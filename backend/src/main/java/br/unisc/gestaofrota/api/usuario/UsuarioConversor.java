/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.usuario;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class UsuarioConversor {
    
    public static Function<Users, UsuarioDto> criarConversorDto() {
        return (source) -> UsuarioDto.builder()
                .id(source.getId())
                .nome(source.getFullName())
                .login(source.getLogin())
                .build();
    }
    
}
