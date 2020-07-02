/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import br.unisc.gestaofrota.api.veiculo.veiculo.VeiculoDto;
import java.util.Date;
import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */

@Data
@Builder
public class ListarPontoDto {
    private final Date inicio;
    private final Date fim;
    private final Integer id;
}
