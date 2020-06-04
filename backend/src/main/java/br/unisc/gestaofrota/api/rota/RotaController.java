/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

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
public class RotaController {
    
    private final RotaService service;

    public RotaController(final RotaService service) {
        this.service = service;
    }
    
    @PostMapping("/rota/novo-ponto")
    RotaDto salvar(@RequestBody final RotaDto dto) throws Exception {
        return service.salvar(dto);
    }
    
    @PostMapping("/rota/listar-pontos")
    List<RotaDto> listarPontos(@RequestBody final ListarPontoDto dto) throws Exception {
        return service.listarPontos(dto);
    }
    
}
