/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */
@Data
@Builder
public class ImpostoDto {
    private final Long id;
    private final String documento;
    private final Date dataPagamento;
    private final BigDecimal valor;
}
