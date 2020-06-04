/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.rota;

import br.unisc.gestaofrota.api.motorista.Drivers;
import br.unisc.gestaofrota.api.veiculo.veiculo.Vehicles;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;

/**
 *
 * @author kelvin
 */
@Entity
@Data
public class Routes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date createdAt;
    @ManyToOne
    @JoinColumn
    private Vehicles vehicle;
    @ManyToOne
    @JoinColumn
    private Drivers driver;
    private String latitude;
    private String longitude;
    private Double speed;
    private Date dateTimeEvent;
}
