/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo.categoria;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class CategoriaConversor {
    
    public static Function<Category, CategoriaComboDto> criarConversorDto() {
        return (source) -> CategoriaComboDto.builder()
                .id(source.getId())
                .descricao(source.getDescription())
                .build();
    }
    
}
