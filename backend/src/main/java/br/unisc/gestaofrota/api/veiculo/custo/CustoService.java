/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface CustoService {
    
    CustoDto buscar(Long id);
    
    List<CustoDto> buscarTodos(Long veiculo);
    
    CustoDto salvar(CustoDto dto, Long veiculo) throws Exception;
    
    CustoDto atualizar(Long id, CustoDto dto) throws Exception;
    
    void remover(Long id);
    
}
