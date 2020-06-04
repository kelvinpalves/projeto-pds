/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import java.math.BigDecimal;
import java.util.Date;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author joaogularte
 */
@Data
@Builder
public class CustoDto {
    private final Long id;
    private final BigDecimal valor;
    private final BigDecimal categoriaCusto;
}
