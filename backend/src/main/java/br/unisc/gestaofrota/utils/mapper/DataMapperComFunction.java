/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.utils.mapper;

import java.util.Comparator;
import java.util.List;

/**
 *
 * @author kelvin
 */
public interface DataMapperComFunction <T, U> {
    
     U convert(final T source);

    List<U> convert(final List<T> source);

    List<U> convert(final Iterable<T> source);

    List<U> convert(final List<T> source, final Comparator<U> comparator);

    List<U> convert(final Iterable<T> source, final Comparator<U> comparator);

    
}
