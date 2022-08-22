package com.ciandt.fullstack.project.service;

import com.ciandt.fullstack.project.model.Provider;
import com.ciandt.fullstack.project.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    @Transactional
    public Provider save(Provider providers) {
        return providerRepository.save(providers);
    }

    public Page<Provider> findAll(Pageable pageable) {
        return providerRepository.findAll(pageable);
    }

    public Optional<Provider> findById(Long id) {
        return providerRepository.findById(id);
    }

    @Transactional
    public void delete(Provider providers) {
        providerRepository.delete(providers);
    }
}
