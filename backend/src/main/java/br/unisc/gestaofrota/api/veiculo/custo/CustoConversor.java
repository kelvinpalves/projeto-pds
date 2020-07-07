/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class CustoConversor {
    public static Function<Cost, CustoDto> criarConversorDto() {
        return (source) -> CustoDto.builder()
                .id(source.getId())
                .valor(source.getValue())
                .categoriaCusto(source.getCategory().getId())
                .build();
    }
    
    public static Function<Cost, CustoDtoLista> criarConversorDtoTabela() {
        return (source) -> CustoDtoLista.builder()
                .id(source.getId())
                .valor(source.getValue())
                .categoriaCusto(source.getCategory().getDescription())
                .build();
    }
}
