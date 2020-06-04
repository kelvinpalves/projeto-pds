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
public interface CustoRepositoryCustom {
    
    List<Cost> getByVehicle(Long id);
    
}
