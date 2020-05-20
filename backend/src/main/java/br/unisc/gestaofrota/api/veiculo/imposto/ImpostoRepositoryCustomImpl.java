/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.imposto;

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
public class ImpostoRepositoryCustomImpl implements ImpostoRepositoryCustom {
    
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<TaxPayments> getByVehicle(Long id) {
        return entityManager.createQuery("SELECT p FROM TaxPayments p WHERE p.vehicle.id = :id")
                .setParameter("id", id)
                .getResultList();
    }
    
}
