/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

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
public class ImpostoController {
    
    private final ImpostoService service;

    public ImpostoController(final ImpostoService service) {
        this.service = service;
    }
    
    @GetMapping("/imposto/{id}")
    public ImpostoDto buscar(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return service.buscar(id);
    }
    
    @GetMapping("/imposto/veiculo/{id}")
    public List<ImpostoDto> buscarTodos(@PathVariable(value = "id") Long veiculo) {
        return service.buscarTodos(veiculo);
    }
    
    @PostMapping("/imposto/veiculo/{id}")
    ImpostoDto salvar(@RequestBody final ImpostoDto imposto, @PathVariable(value = "id") Long veiculo) throws Exception {
        return service.salvar(imposto, veiculo);
    }
    
    @PutMapping("/imposto/{id}")
    ImpostoDto atualizar(@RequestBody final ImpostoDto imposto, @PathVariable final Long id) throws Exception {
        return service.atualizar(id, imposto);
    }

    @DeleteMapping("/imposto/{id}")
    void remover(@PathVariable final Long id) {
        service.remover(id);
    }
    
}
