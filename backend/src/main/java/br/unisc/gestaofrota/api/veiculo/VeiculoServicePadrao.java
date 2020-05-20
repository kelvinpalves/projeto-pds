/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo;

import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.Date;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */
@Service
public class VeiculoServicePadrao implements VeiculoService {

    private final VeiculoRepository repository;
    
    @Autowired
    public VeiculoServicePadrao(VeiculoRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public VeiculoDto buscar(Long id) {
        Vehicles model = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Vehicles.class));
        return DataMapperDefault.map().comFunction(VeiculoConversor.criarConversorDto()).convert(model);    
    }

    @Override
    public List<VeiculoDto> buscarTodos() {
        List<Vehicles> models = this.repository.findAll();
        return DataMapperDefault.map().comFunction(VeiculoConversor.criarConversorDto()).convert(models);
    }

    @Override
    public VeiculoDto salvar(VeiculoDto dto) throws Exception {
        this.validar(dto);
        
        Vehicles model = new Vehicles();
        
        model.setName(dto.getNome());
        model.setChassi(dto.getChassi());
        model.setRenavan(dto.getRenavan());
        model.setLicensePlate(dto.getPlaca());
        model.setModelationYear(dto.getAnoModelo());
        model.setManufacturingYear(dto.getAnoFabricacao());
        model.setCreatedAt(new Date());
        
        model = this.repository.save(model);
        
        return DataMapperDefault.map().comFunction(VeiculoConversor.criarConversorDto()).convert(model);
    }

    @Override
    public VeiculoDto atualizar(Long id, VeiculoDto dto) throws Exception {
        this.validar(dto);
        
        Vehicles model = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Vehicles.class));
        
        model.setName(dto.getNome());
        model.setChassi(dto.getChassi());
        model.setRenavan(dto.getRenavan());
        model.setLicensePlate(dto.getPlaca());
        model.setModelationYear(dto.getAnoModelo());
        model.setManufacturingYear(dto.getAnoFabricacao());
        model.setCreatedAt(new Date());
        
        model = this.repository.save(model);
        
        return DataMapperDefault.map().comFunction(VeiculoConversor.criarConversorDto()).convert(model);
    }

    @Override
    public void remover(Long id) {
        this.repository.deleteById(id);
    }
    
     private void validar(VeiculoDto dto) throws Exception {
        if (StringUtils.isBlank(dto.getNome())) {
            throw new Exception("O campo nome é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getChassi())) {
            throw new Exception("O campo chassi é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getRenavan())) {
            throw new Exception("O campo renavan é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getPlaca())) {
            throw new Exception("O campo placa é obrigatório.");
        }
        
        if (dto.getAnoModelo() == null) {
            throw new Exception("O campo ano modelo é obrigatório.");
        }
        
        if (dto.getAnoFabricacao() == null) {
            throw new Exception("O campo ano fabricação é obrigatório.");
        }
     }
    
}
