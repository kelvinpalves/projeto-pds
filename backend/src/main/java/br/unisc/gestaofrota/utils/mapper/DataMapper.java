/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.utils.mapper;

import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public interface DataMapper {
    
    <T, U> DataMapperComFunction<T, U> comFunction(Function<T, U> conversor);
    
}
