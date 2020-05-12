/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.usuario;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface UsuarioService {
    
    UsuarioDto buscar(Long id);
    
    List<UsuarioDto> buscarTodos();
    
    UsuarioDto salvar(UsuarioDto dto) throws Exception;
    
    UsuarioDto atualizar(Long id, UsuarioDto dto) throws Exception;
    
    void remover(Long id);
    
}
