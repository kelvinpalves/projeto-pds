/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import br.unisc.gestaofrota.api.motorista.Drivers;
import br.unisc.gestaofrota.api.motorista.MotoristaDto;
import br.unisc.gestaofrota.api.motorista.MotoristaService;
import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import br.unisc.gestaofrota.api.veiculo.veiculo.VeiculoConversor;
import br.unisc.gestaofrota.api.veiculo.veiculo.VeiculoDto;
import br.unisc.gestaofrota.api.veiculo.veiculo.VeiculoService;
import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author kelvin
 */
@Service
public class RotaServicePadrao implements RotaService {
    
    private final RotaRepository repository;
    
    private final MotoristaService motoristaService;
    
    private final VeiculoService veiculoService;
    
    @Autowired
    RotaServicePadrao(final RotaRepository repository, 
            final MotoristaService motoristaService,
            final VeiculoService veiculoService) {
        
        this.repository = repository;
        this.motoristaService  = motoristaService;
        this.veiculoService = veiculoService;
    }


    @Override
    public RotaDto salvar(RotaDto dto) throws Exception {
        this.validar(dto);
        
        Routes routes = new Routes();
        
        try {
            MotoristaDto motoristaDto = motoristaService.buscar(dto.getMotorista());
            Drivers motorista = new Drivers();
            motorista.setId(motoristaDto.getId());
            routes.setDriver(motorista);
        } catch (ResourceNotFoundException ex) {
            throw new Exception("O motorista informado não consta na base de dados.");
        }
        
        try {
            VeiculoDto veiculoDto = veiculoService.buscar(dto.getVeiculo());
            Vehicles veiculo = new Vehicles();
            veiculo.setId(veiculoDto.getId());
            routes.setVehicle(veiculo);
        } catch (ResourceNotFoundException ex) {
            throw new Exception("O veículo informado não consta na base de dados.");
        }
        
        routes.setCreatedAt(new Date());
        routes.setLatitude(dto.getLatitude());
        routes.setLongitude(dto.getLongitude());
        routes.setSpeed(dto.getVelocidade());
        routes.setDateTimeEvent(dto.getDataHoraEvento());
        
        routes = this.repository.save(routes);
            
        return DataMapperDefault.map().comFunction(RotaConversor.criarConversorDto()).convert(routes);
    }
    
     private void validar(RotaDto dto) throws Exception {
        if (StringUtils.isBlank(dto.getLatitude())) {
            throw new Exception("O campo latitude é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getLongitude())) {
            throw new Exception("O campo longitude é obrigatório.");
        }
        
        if (dto.getDataHoraEvento() == null) {
            throw new Exception("O campo data e hora é obrigatório.");
        }
        
        if (dto.getMotorista() == null) {
            throw new Exception("O campo motorista é obrigatório.");
        }
        
        if (dto.getVeiculo() == null) {
            throw new Exception("O campo veículo é obrigatório.");
        }
        
        if (dto.getVelocidade() == null) {
            throw new Exception("O campo velocidade é obrigatório.");
        }
    }

    @Override
    public List<RotaDto> listarPontos(ListarPontoDto dto) throws Exception {
        if (dto.getInicio() == null) {
            throw new Exception("O campo data inicial é obrigatório.");
        }
        
        if (dto.getFim() == null) {
            throw new Exception("O campo data final é obrigatório.");
        }
       
        List<Routes> rotas = this.repository.getByDate(dto.getInicio(), dto.getFim());
        List<Routes> novaLista = new ArrayList<>();
        
        for (Routes rota : rotas) {
            
            if (dto.getId().equals(rota.getVehicle().getId())) {
                novaLista.add(rota);
            }
            
        }
        
        return DataMapperDefault.map().comFunction(RotaConversor.criarConversorDto()).convert(novaLista);
    }
    
}
