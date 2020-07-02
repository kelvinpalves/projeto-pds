/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.veiculo.veiculo.relatorio;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */
@Service
public class RelatorioServicePadrao implements RelatorioService {
    
    private final RelatorioRepository repository; 
    
    @Autowired
    public RelatorioServicePadrao(RelatorioRepository repository) {
        this.repository = repository;
    }
    

    @Override
    public List<RelatorioDto> gerar(Date inicio, Date fim, Integer veiculos) {
        List<Object[]> lista = repository.getRelatorio(inicio, fim, veiculos);
        
        List<RelatorioDto> retorno = new ArrayList<>();
        
        for (Object[] ob : lista) {
            
            Integer tipo = Integer.parseInt(ob[2].toString());
            RelatorioDto relatorioDto = RelatorioDto.builder()
                    .tipo(tipo == 1 ? "Custo" : "Imposto")
                    .valor(new BigDecimal(ob[1].toString()))
                    .build();
            
            retorno.add(relatorioDto);   
        }
        
        return retorno;
    }
    
}
