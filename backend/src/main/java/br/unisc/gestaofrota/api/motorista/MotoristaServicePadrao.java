/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.motorista;

import br.unisc.gestaofrota.api.usuario.Users;
import br.unisc.gestaofrota.api.usuario.UsuarioDto;
import br.unisc.gestaofrota.api.usuario.UsuarioService;
import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */

@Service
public class MotoristaServicePadrao implements MotoristaService {

    private final MotoristaRepository repository;
    
    private final UsuarioService usuarioService;

    @Autowired
    MotoristaServicePadrao(final MotoristaRepository repository, final UsuarioService usuarioService) {
        this.repository = repository;
        this.usuarioService = usuarioService;
    }

    @Override
    public MotoristaDto buscar(Long id) {
        Drivers motorista = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Drivers.class));
        return DataMapperDefault.map().comFunction(MotoristaConversor.criarConversorDto()).convert(motorista);
    }

    @Override
    public List<MotoristaDto> buscarTodos() {
        List<Drivers> drivers = this.repository.findAll();
        return DataMapperDefault.map().comFunction(MotoristaConversor.criarConversorDto()).convert(drivers);
    }

    @Override
    public MotoristaDto salvar(MotoristaDto dto) throws Exception {
        this.validar(dto);
        
        UsuarioDto usuarioDto = UsuarioDto.builder()
                .nome(dto.getNome())
                .login(this.createLoginByName(dto.getNome()))
                .senha(this.createLoginByName(dto.getNome()) + ".1234")
                .build();
                
        usuarioDto = usuarioService.salvar(usuarioDto);
        
        Users user = new Users();
        user.setId(usuarioDto.getId());
        
        Drivers driver = new Drivers();
        driver.setUser(user);
        driver.setAdmissionDate(dto.getDataAdmissao());
        driver.setContact(dto.getContato());
        driver.setRegistration(dto.getMatricula());
        
        driver = this.repository.save(driver);

        return DataMapperDefault.map().comFunction(MotoristaConversor.criarConversorDto()).convert(driver);
    }

    private String createLoginByName(String nome) {
        String nomes[] = nome.trim().split(" ");

        if (nomes.length == 1) {
            return nomes[0].toLowerCase();
        } else if (nomes.length == 2) {
            return nomes[0].substring(0, 1).toLowerCase()
                    + nomes[1].toLowerCase();
        } else {
            return nomes[0].substring(0, 1).toLowerCase()
                    + nomes[nomes.length - 1].toLowerCase();
        }

    }

    @Override
    public MotoristaDto atualizar(Long id, MotoristaDto dto) throws Exception {
        this.validar(dto);

        Drivers driver = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Drivers.class));
        
        UsuarioDto usuarioDto = UsuarioDto.builder()
                .id(driver.getUser().getId())
                .nome(dto.getNome())
                .login(this.createLoginByName(dto.getNome()))
                .senha(this.createLoginByName(dto.getNome()) + ".1234")
                .build();
                
        usuarioDto = usuarioService.atualizar(usuarioDto.getId(), usuarioDto);
        
        driver.setAdmissionDate(dto.getDataAdmissao());
        driver.setContact(dto.getContato());
        driver.setRegistration(dto.getMatricula());
        
        driver = this.repository.save(driver);

        return DataMapperDefault.map().comFunction(MotoristaConversor.criarConversorDto()).convert(driver);
    }

    @Override
    public void remover(Long id) {
        Drivers driver = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Drivers.class));
        this.repository.deleteById(id);
        usuarioService.remover(driver.getUser().getId());
        
    }

    private void validar(MotoristaDto dto) throws Exception {
        if (StringUtils.isBlank(dto.getContato())) {
            throw new Exception("O campo contato é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getMatricula())) {
            throw new Exception("O campo matricula é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getNome())) {
            throw new Exception("O campo nome é obrigatório.");
        }
        
        if (dto.getDataAdmissao() == null) {
            throw new Exception("O campo data de admissão é obrigatório.");
        }
    }

}
