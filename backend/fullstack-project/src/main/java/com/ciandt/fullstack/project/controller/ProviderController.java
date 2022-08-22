package com.ciandt.fullstack.project.controller;

import com.ciandt.fullstack.project.dto.ProviderDto;
import com.ciandt.fullstack.project.model.Customer;
import com.ciandt.fullstack.project.model.Provider;
import com.ciandt.fullstack.project.service.ProviderService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/provider")
@CrossOrigin
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    @PostMapping("/addProviders")
    public ResponseEntity<Object> saveProvider(@Valid @RequestBody ProviderDto providerDto) {
        var provider = new Provider();
        BeanUtils.copyProperties(providerDto, provider);
        return ResponseEntity.status(HttpStatus.CREATED).body(providerService.save(provider));
    }

    @GetMapping("/getAllProvider")
    public ResponseEntity<Page<Provider>> getAllProviders(Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(providerService.findAll(pageable));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProvider(@PathVariable(value = "id") Long id) {
        Optional<Provider> providerOptional = providerService.findById(id);
        if (!providerOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fornecedor não encontrado.");
        }
        providerService.delete(providerOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Fornecedor deletado com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCustomer(@PathVariable(value = "id") Long id,
                                                 @RequestBody @Valid ProviderDto providerDto) {
        Optional<Provider> providerOptional = providerService.findById(id);
        if (!providerOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        var provider = new Provider();
        BeanUtils.copyProperties(providerDto, provider);
        provider.setId(providerOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(providerService.save(provider));
    }
}
