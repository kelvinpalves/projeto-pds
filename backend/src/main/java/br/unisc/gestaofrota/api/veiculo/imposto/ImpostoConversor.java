/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

import br.unisc.gestaofrota.api.usuario.Users;
import br.unisc.gestaofrota.api.usuario.UsuarioDto;
import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class ImpostoConversor {
    public static Function<TaxPayments, ImpostoDto> criarConversorDto() {
        return (source) -> ImpostoDto.builder()
                .id(source.getId())
                .documento(source.getDocument())
                .dataPagamento(source.getPaymentDate())
                .valor(source.getValue())
                .build();
    }
}
