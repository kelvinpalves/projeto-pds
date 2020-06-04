/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import java.util.Date;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */
@Data
@Builder
public class RotaDto {
    private final Long id;
    private final Date dataHoraEvento;
    private final Long veiculo;
    private final Long motorista;
    private final String latitude;
    private final String longitude;
    private final Double velocidade;
}
