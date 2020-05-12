/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.motorista;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface MotoristaService {
    
    MotoristaDto buscar(Long id);
    
    List<MotoristaDto> buscarTodos();
    
    MotoristaDto salvar(MotoristaDto dto) throws Exception;
    
    MotoristaDto atualizar(Long id, MotoristaDto dto) throws Exception;
    
    void remover(Long id);
    
}
