/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.gestaofrota.api.usuario;

import br.unisc.gestaofrota.utils.mapper.DataMapperDefault;
import br.unisc.pds.utils.exception.ResourceNotFoundException;
import java.util.Date;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelvin
 */
@Service
public class UsuarioServicePadrao implements UsuarioService {
    
    private final UsuarioRepository repository;
    
    @Autowired
    UsuarioServicePadrao(final UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UsuarioDto buscar(Long id) {
        Users usuario = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Users.class));
        return DataMapperDefault.map().comFunction(UsuarioConversor.criarConversorDto()).convert(usuario);    
    }

    @Override
    public List<UsuarioDto> buscarTodos() {
        List<Users> users = this.repository.findAll();
        return DataMapperDefault.map().comFunction(UsuarioConversor.criarConversorDto()).convert(users);
    }

    @Override
    public UsuarioDto salvar(UsuarioDto dto) throws Exception {
        this.validar(dto);
        
        Users user = new Users();
        
        user.setFullName(dto.getNome());
        user.setLogin(dto.getLogin());
        user.setPassword(dto.getSenha());
        user.setCreatedAt(new Date());
        
        user = this.repository.save(user);
        
        return DataMapperDefault.map().comFunction(UsuarioConversor.criarConversorDto()).convert(user);
    }

    @Override
    public UsuarioDto atualizar(Long id, UsuarioDto dto) throws Exception {
        this.validar(dto);
        
        Users user = this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id, Users.class));
        user.setFullName(dto.getNome());
        user.setLogin(dto.getLogin());
        user.setPassword(dto.getSenha());
        
        user = this.repository.save(user);
        
        return DataMapperDefault.map().comFunction(UsuarioConversor.criarConversorDto()).convert(user);
    }

    @Override
    public void remover(Long id) {
        this.repository.deleteById(id);
    }
    
    private void validar(UsuarioDto dto) throws Exception {
        if (StringUtils.isBlank(dto.getNome())) {
            throw new Exception("O campo nome é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getLogin())) {
            throw new Exception("O campo login é obrigatório.");
        }
        
        if (StringUtils.isBlank(dto.getSenha())) {
            throw new Exception("O campo senha é obrigatório.");
        }
    }
    
}
