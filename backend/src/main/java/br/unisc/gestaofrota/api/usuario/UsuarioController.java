/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.usuario;

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
public class UsuarioController {
    private final UsuarioService service;

    public UsuarioController(final UsuarioService service) {
        this.service = service;
    }
    
    @GetMapping("/usuario/{id}")
    public UsuarioDto buscar(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return service.buscar(id);
    }
    
    @GetMapping("/usuario")
    public List<UsuarioDto> buscarTodos() {
        return service.buscarTodos();
    }
    
    @PostMapping("/usuario")
    UsuarioDto salvar(@RequestBody final UsuarioDto usuario) throws Exception {
        return service.salvar(usuario);
    }
    
    @PutMapping("/usuario/{id}")
    UsuarioDto atualizar(@RequestBody final UsuarioDto usuarioDto, @PathVariable final Long id) throws Exception {
        return service.atualizar(id, usuarioDto);
    }

    @DeleteMapping("/usuario/{id}")
    void remover(@PathVariable final Long id) {
        service.remover(id);
    }
    
}
