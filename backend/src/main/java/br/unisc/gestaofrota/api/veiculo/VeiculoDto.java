/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo;

import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */

@Data
@Builder
public class VeiculoDto {
    private final Long id;
    private final String nome;
    private final String placa;
    private final String chassi;
    private final String renavan;
    private final Integer anoModelo;
    private final Integer anoFabricacao;
}
