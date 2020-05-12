/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.motorista;

import br.unisc.gestaofrota.api.motorista.MotoristaDto;
import br.unisc.gestaofrota.api.motorista.MotoristaService;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author kelvin
 */
@RestController
@RequestMapping("/api/v1")
public class MotoristaController {
    
    private final MotoristaService service;

    public MotoristaController(final MotoristaService service) {
        this.service = service;
    }
    
    @GetMapping("/motorista/{id}")
    public MotoristaDto buscar(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return service.buscar(id);
    }
    
    @GetMapping("/motorista")
    public List<MotoristaDto> buscarTodos() {
        return service.buscarTodos();
    }
    
    @PostMapping("/motorista")
    MotoristaDto salvar(@RequestBody final MotoristaDto motorista) throws Exception {
        return service.salvar(motorista);
    }
    
    @PutMapping("/motorista/{id}")
    MotoristaDto atualizar(@RequestBody final MotoristaDto motoristaDto, @PathVariable final Long id) throws Exception {
        return service.atualizar(id, motoristaDto);
    }

    @DeleteMapping("/motorista/{id}")
    void remover(@PathVariable final Long id) {
        service.remover(id);
    }
    
}
