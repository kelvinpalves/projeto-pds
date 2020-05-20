/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

import br.unisc.gestaofrota.api.usuario.UsuarioConversor;
import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.Arrays;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */

@Service
public class ImpostoServicePadrao implements ImpostoService {
    
    private final ImpostoRepository repository;
        
    @Autowired
    ImpostoServicePadrao(ImpostoRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public ImpostoDto buscar(Long id) {
        TaxPayments usuario = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, TaxPayments.class));
        return DataMapperDefault.map().comFunction(ImpostoConversor.criarConversorDto()).convert(usuario);    
    }

    @Override
    public void remover(Long id) {
        this.repository.deleteById(id);
    }
    
    private void validar(ImpostoDto dto) throws Exception {
        if (StringUtils.isBlank(dto.getDocumento())) {
            throw new Exception("O campo documento é obrigatório.");
        }
        
        if (dto.getDataPagamento() == null) {
            throw new Exception("O campo documento é obrigatório.");
        }
        
        if (dto.getValor() == null) {
            throw new Exception("O campo valor é obrigatório.");
        }
    }

    @Override
    public List<ImpostoDto> buscarTodos(Long veiculo) {
        List<TaxPayments> payments = this.repository.getByVehicle(veiculo);
        return DataMapperDefault.map().comFunction(ImpostoConversor.criarConversorDto()).convert(payments);
    }

    @Override
    public ImpostoDto salvar(ImpostoDto dto, Long veiculo) throws Exception {
        this.validar(dto);
        
        TaxPayments payment = new TaxPayments();
        
        payment.setDocument(dto.getDocumento());
        payment.setPaymentDate(dto.getDataPagamento());
        payment.setValue(dto.getValor());
        
        Vehicles vehicle = new Vehicles();
        vehicle.setId(veiculo);
        payment.setVehicle(vehicle);
        
        payment = this.repository.save(payment);
        
        return DataMapperDefault.map().comFunction(ImpostoConversor.criarConversorDto()).convert(payment);
    }

    @Override
    public ImpostoDto atualizar(Long id, ImpostoDto dto) throws Exception {
        this.validar(dto);
        
        TaxPayments payment = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, TaxPayments.class));
        
        payment.setDocument(dto.getDocumento());
        payment.setPaymentDate(dto.getDataPagamento());
        payment.setValue(dto.getValor());
        
        payment = this.repository.save(payment);
        
        return DataMapperDefault.map().comFunction(ImpostoConversor.criarConversorDto()).convert(payment);
    }
    
}
