/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo;

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
public class VeiculoController {
    
    private final VeiculoService service;

    public VeiculoController(final VeiculoService service) {
        this.service = service;
    }
    
    @GetMapping("/veiculo/{id}")
    public VeiculoDto buscar(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return service.buscar(id);
    }
    
    @GetMapping("/veiculo")
    public List<VeiculoDto> buscarTodos() {
        return service.buscarTodos();
    }
    
    @PostMapping("/veiculo")
    VeiculoDto salvar(@RequestBody final VeiculoDto dto) throws Exception {
        return service.salvar(dto);
    }
    
    @PutMapping("/veiculo/{id}")
    VeiculoDto atualizar(@RequestBody final VeiculoDto dto, @PathVariable final Long id) throws Exception {
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/veiculo/{id}")
    void remover(@PathVariable final Long id) {
        service.remover(id);
    }
    
}
