/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class RotaConversor {
    
    public static Function<Routes, RotaDto> criarConversorDto() {
        return (source) -> RotaDto.builder()
                .id(source.getId())
                .veiculo(source.getVehicle().getId())
                .motorista(source.getDriver().getId())
                .velocidade(source.getSpeed())
                .latitude(source.getLatitude())
                .longitude(source.getLongitude())
                .dataHoraEvento(source.getDateTimeEvent())
                .build();
    }
    
}
