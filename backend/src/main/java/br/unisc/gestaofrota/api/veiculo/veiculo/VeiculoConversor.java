/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class VeiculoConversor {
    
    public static Function<Vehicles, VeiculoDto> criarConversorDto() {
        return (source) -> VeiculoDto.builder()
                .id(source.getId())
                .nome(source.getName())
                .placa(source.getLicensePlate())
                .chassi(source.getChassi())
                .renavan(source.getRenavan())
                .anoModelo(source.getModelationYear())
                .anoFabricacao(source.getManufacturingYear())
                .build();
    }
    
}
