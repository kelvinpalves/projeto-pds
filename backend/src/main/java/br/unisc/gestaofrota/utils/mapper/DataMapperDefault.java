/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.utils.mapper;

import com.google.common.collect.Lists;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;

/**
 *
 * @author kelvin
 */
public class DataMapperDefault implements DataMapper {
    
    private DataMapperDefault() {
    }

    public static DataMapper map() {
        return new DataMapperDefault();
    }

    @Override
    public <T, U> DataMapperComFunction<T, U> comFunction(Function<T, U> conversor) {
        return new DataMapperDefaultComFunction<>(conversor);
    }

    public class DataMapperDefaultComFunction<T, U> implements DataMapperComFunction<T, U> {

        private Function<T, U> conversor;

        private DataMapperDefaultComFunction(Function<T, U> conversor) {
            this.conversor = conversor;
        }

        @Override
        public U convert(T source) {
            return source == null ? null : conversor.apply(source);
        }

        @Override
        public List<U> convert(List<T> source) {
            if (source == null) {
                return null;
            }

            List<U> lista = new ArrayList<>();
            for (T item : source) {
                lista.add(DataMapperDefaultComFunction.this.convert(item));
            }
            return lista;
        }

        @Override
        public List<U> convert(Iterable<T> source) {
            return convert(Lists.newArrayList(source));
        }

        @Override
        public List<U> convert(List<T> source, Comparator<U> comparator) {
            List<U> lista = convert(source);
            lista.sort(comparator);
            return lista;
        }

        @Override
        public List<U> convert(Iterable<T> source, Comparator<U> comparator) {
            return convert(Lists.newArrayList(source), comparator);
        }
    }
    
}
