/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo.relatorio;

import java.util.Date;
import lombok.Data;

/**
 *
 * @author kelvin
 */

@Data
public class RelatorioCommand {
    private Date inicio;
    private Date fim;
    private Integer veiculo;
}
