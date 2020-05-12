/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.motorista;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class MotoristaConversor {
    
    public static Function<Drivers, MotoristaDto> criarConversorDto() {
        return (source) -> MotoristaDto.builder()
                .id(source.getId())
                .nome(source.getUser().getFullName())
                .contato(source.getContact())
                .dataAdmissao(source.getAdmissionDate())
                .matricula(source.getRegistration())
                .build();
    }
    
}
