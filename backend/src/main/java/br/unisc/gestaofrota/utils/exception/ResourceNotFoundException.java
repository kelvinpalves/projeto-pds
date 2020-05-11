/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisc.pds.utils.exception;

/**
 *
 * @author kelvin
 */
public class ResourceNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = -1305565123389197440L;

    public ResourceNotFoundException() {
        super();
    }

    public ResourceNotFoundException(final Long id, final Class<?> clazz) {
        super(String.format("%s com id %d não encontrado.", clazz.getSimpleName(), id));
    }

    public ResourceNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public ResourceNotFoundException(final String message) {
        super(message);
    }

    public ResourceNotFoundException(final Throwable cause) {
        super(cause);
    }
    
}
