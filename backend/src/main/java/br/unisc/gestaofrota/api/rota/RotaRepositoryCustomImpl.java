/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author kelvin
 */
@Repository
@Transactional(readOnly = true)
public class RotaRepositoryCustomImpl implements RotaRepositoryCustom {
    
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Routes> getByDate(Date inicio, Date fim) {
        return entityManager.createQuery("SELECT r FROM Routes r WHERE r.dateTimeEvent BETWEEN :inicio AND :fim")
                .setParameter("inicio", inicio)
                .setParameter("fim", fim)
                .getResultList();
    }
    
}
