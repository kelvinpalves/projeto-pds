/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface ImpostoService {
    
    ImpostoDto buscar(Long id);
    
    List<ImpostoDto> buscarTodos(Long veiculo);
    
    ImpostoDto salvar(ImpostoDto dto, Long veiculo) throws Exception;
    
    ImpostoDto atualizar(Long id, ImpostoDto dto) throws Exception;
    
    void remover(Long id);
    
}
