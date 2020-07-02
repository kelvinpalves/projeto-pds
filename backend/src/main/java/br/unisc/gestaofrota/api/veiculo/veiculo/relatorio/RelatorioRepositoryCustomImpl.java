/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo.relatorio;

import br.unisc.gestaofrota.api.veiculo.imposto.*;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

/**
 *
 * @author kelvin
 */
@Repository
@Transactional(readOnly = true)
public class RelatorioRepositoryCustomImpl implements RelatorioRepositoryCustom {
    
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Object[]> getRelatorio(Date inicio, Date fim, Integer veiculo) {
        String sql = "SELECT vehicle_id , value, 1 FROM cost c\n" +
                    "WHERE vehicle_id = ?1 \n" +
                    "UNION ALL \n" +
                    "SELECT vehicle_id, value, 2 FROM tax_payments tp\n" +
                    "WHERE vehicle_id  = ?1\n" +
                    "AND payment_date  BETWEEN ?2 AND ?3 ";
        
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, veiculo);
        query.setParameter(2, inicio);
        query.setParameter(3, fim);
        
        return (List<Object[]>) query.getResultList();
    }
    
}
