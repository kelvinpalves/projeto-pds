/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo.categoria;

import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */

@Builder
@Data
public class CategoriaComboDto {
    private Long id;
    private String descricao;
}
