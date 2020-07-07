/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo.categoria;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author kelvin
 */

@RestController
@RequestMapping("/api/v1")
public class CategoriaController {
    
    private CategoriaService service;
    
    public CategoriaController(final CategoriaService service) {
        this.service = service;
    }
    
    @GetMapping("/categoria/combo")
    public List<CategoriaComboDto> buscar() {
        return service.buscarCombo();
    }
    
}
