/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author kelvin
 */
public interface UsuarioRepository extends JpaRepository<Users, Long> {
}
