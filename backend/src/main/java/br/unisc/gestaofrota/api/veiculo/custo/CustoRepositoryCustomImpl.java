/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

/**
 *
 * @author kelvin
 */
@Repository
@Transactional(readOnly = true)
public class CustoRepositoryCustomImpl implements CustoRepositoryCustom {
    
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Cost> getByVehicle(Long id) {
        return entityManager.createQuery("SELECT c FROM Cost c WHERE c.vehicle.id = :id")
                .setParameter("id", id)
                .getResultList();
    }
    
}
