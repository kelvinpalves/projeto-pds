/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.custo;

import br.unisc.gestaofrota.api.veiculo.custo.categoria.Category;
import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import lombok.Data;

/**
 *
 * @author joaogularte
 */
@Entity
@Data
public class Cost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private BigDecimal value;
    
    @ManyToOne 
    @JoinColumn
    private Category category;
    
    
    @ManyToOne
    @JoinColumn
    private Vehicles vehicle;
}
