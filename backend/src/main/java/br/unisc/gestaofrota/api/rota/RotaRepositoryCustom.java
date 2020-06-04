/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import java.util.Date;
import java.util.List;

/**
 *
 * @author kelvin
 */
public interface RotaRepositoryCustom {
    
    List<Routes> getByDate(Date inicio, Date fim);
    
}
