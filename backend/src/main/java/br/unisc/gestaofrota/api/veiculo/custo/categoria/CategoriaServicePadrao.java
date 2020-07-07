/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo.categoria;

import br.unisc.gestaofrota.api.veiculo.custo.CustoConversor;
import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */

@Service
public class CategoriaServicePadrao implements CategoriaService {

    private CategoriaRepository repository;

    @Autowired
    public CategoriaServicePadrao(CategoriaRepository categoriaRepository) {
        this.repository = categoriaRepository;
    }   
    
    @Override
    public List<CategoriaComboDto> buscarCombo() {
        List<Category> categorias = repository.findAll();
        return DataMapperDefault.map().comFunction(CategoriaConversor.criarConversorDto()).convert(categorias);
    }
    
}
