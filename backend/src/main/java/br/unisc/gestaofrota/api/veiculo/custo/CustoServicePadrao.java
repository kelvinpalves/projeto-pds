/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import br.unisc.gestaofrota.api.veiculo.custo.categoria.Category;
import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */

@Service
public class CustoServicePadrao implements CustoService {
    
    private final CustoRepository repository;
        
    @Autowired
    CustoServicePadrao(CustoRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public CustoDto buscar(Long id) {
        Cost custo = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Cost.class));
        return DataMapperDefault.map().comFunction(CustoConversor.criarConversorDto()).convert(custo);    
    }

    @Override
    public void remover(Long id) {
        this.repository.deleteById(id);
    }
    
    private void validar(CustoDto dto) throws Exception {
        if (dto.getValor() == null) {
            throw new Exception("O campo valor é obrigatório.");
        }
    }

    @Override
    public List<CustoDtoLista> buscarTodos(Long veiculo) {
        List<Cost> costs = this.repository.getByVehicle(veiculo);
        return DataMapperDefault.map().comFunction(CustoConversor.criarConversorDtoTabela()).convert(costs);
    }

    @Override
    public CustoDto salvar(CustoDto dto, Long veiculo) throws Exception {
        this.validar(dto);
        
        Cost cost = new Cost();
        
        cost.setValue(dto.getValor());
        cost.setCategory(new Category(dto.getCategoriaCusto()));
        
        Vehicles vehicle = new Vehicles();
        vehicle.setId(veiculo);
        cost.setVehicle(vehicle);
        
        cost = this.repository.save(cost);
        
        return DataMapperDefault.map().comFunction(CustoConversor.criarConversorDto()).convert(cost);
    }

    @Override
    public CustoDto atualizar(Long id, CustoDto dto) throws Exception {
        this.validar(dto);
        
        Cost cost = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Cost.class));
        
        cost.setValue(dto.getValor());
        cost.setCategory(new Category(dto.getCategoriaCusto()));
        
        cost = this.repository.save(cost);
        
        return DataMapperDefault.map().comFunction(CustoConversor.criarConversorDto()).convert(cost);
    }
    
}
