/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import java.math.BigDecimal;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */
@Data
@Builder
public class CustoDtoLista {
    private final Long id;
    private final BigDecimal valor;
    private final String categoriaCusto;
}
