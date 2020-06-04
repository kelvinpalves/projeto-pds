/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import java.util.List;

/**
 *
 * @author kelvin
 */
public interface RotaService {
    
    RotaDto salvar(RotaDto dto) throws Exception;
    
    List<RotaDto> listarPontos(ListarPontoDto dto) throws Exception;
    
}
