/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.motorista;

import java.util.Date;
import lombok.Builder;
import lombok.Data;

/**
 *
 * @author kelvin
 */
@Data
@Builder
public class MotoristaDto {
    private final Long id;
    private final String nome;
    private final String contato;
    private final Date dataAdmissao;
    private final String matricula;
}
