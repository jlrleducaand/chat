package org.iesvdm.mhm.service;

import org.iesvdm.mhm.domain.Cliente;
import org.iesvdm.mhm.exception.ClienteNotFoundException;
import org.iesvdm.mhm.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;


    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }


    public List<Cliente> all() {
        return this.clienteRepository.findAll();
    }

    public Cliente save(Cliente cliente) {
        return this.clienteRepository.save(cliente);
    }

    public Cliente one(Long id) {
        return this.clienteRepository.findById(id)
                .orElseThrow(() -> new ClienteNotFoundException(id));
    }

    public Cliente replace(Long id, Cliente cliente) {

        return this.clienteRepository.findById(id).map( p -> (id.equals(cliente.getId())  ?
                        this.clienteRepository.save(cliente) : null))
                .orElseThrow(() -> new ClienteNotFoundException(id));

    }

    public void delete(Long id) {
        this.clienteRepository.findById(id).map(p -> {this.clienteRepository.delete(p);
                    return p;})
                .orElseThrow(() -> new ClienteNotFoundException(id));
    }



}
