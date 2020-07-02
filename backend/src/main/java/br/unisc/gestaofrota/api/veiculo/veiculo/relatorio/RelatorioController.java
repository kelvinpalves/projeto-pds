/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo.relatorio;

import br.unisc.gestaofrota.api.veiculo.veiculo.VeiculoDto;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author kelvin
 */
@RestController
@RequestMapping("/api/v1")
public class RelatorioController {
    
    private final RelatorioService service;

    public RelatorioController(final RelatorioService service) {
        this.service = service;
    }
    
    @PostMapping("/relatorio")
    List<RelatorioDto> salvar(@RequestBody final RelatorioCommand command) throws Exception {
        return service.gerar(command.getInicio(), command.getFim(), command.getVeiculo());
    }
    
}
