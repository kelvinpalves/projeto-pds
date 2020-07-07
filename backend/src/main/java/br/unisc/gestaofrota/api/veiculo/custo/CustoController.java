/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

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
public class CustoController {
    
    private final CustoService service;

    public CustoController(final CustoService service) {
        this.service = service;
    }
    
    @GetMapping("/custo/{id}")
    public CustoDto buscar(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return service.buscar(id);
    }
    
    @GetMapping("/custo/veiculo/{id}")
    public List<CustoDtoLista> buscarTodos(@PathVariable(value = "id") Long veiculo) {
        return service.buscarTodos(veiculo);
    }
    
    @PostMapping("/custo/veiculo/{id}")
    CustoDto salvar(@RequestBody final CustoDto custo, @PathVariable(value = "id") Long veiculo) throws Exception {
        return service.salvar(custo, veiculo);
    }
    
    @PutMapping("/custo/{id}")
    CustoDto atualizar(@RequestBody final CustoDto custo, @PathVariable final Long id) throws Exception {
        return service.atualizar(id, custo);
    }

    @DeleteMapping("/custo/{id}")
    void remover(@PathVariable final Long id) {
        service.remover(id);
    }
    
}
