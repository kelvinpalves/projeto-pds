/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface VeiculoService {
     
    VeiculoDto buscar(Long id);
    
    List<VeiculoDto> buscarTodos();
    
    VeiculoDto salvar(VeiculoDto dto) throws Exception;
    
    VeiculoDto atualizar(Long id, VeiculoDto dto) throws Exception;
    
    void remover(Long id);
}
