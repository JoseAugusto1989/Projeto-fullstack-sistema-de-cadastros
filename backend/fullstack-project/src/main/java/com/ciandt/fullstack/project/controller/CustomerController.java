package com.ciandt.fullstack.project.controller;


import com.ciandt.fullstack.project.dto.CustomerDto;
import com.ciandt.fullstack.project.model.Customer;
import com.ciandt.fullstack.project.service.CustomerService;
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
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/addCustomer")
    public ResponseEntity<Object> saveCustomer(@Valid @RequestBody CustomerDto customerDto) {
        var customer = new Customer();
        BeanUtils.copyProperties(customerDto, customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(customerService.save(customer));
    }

    @GetMapping("/getAllCustomer")
    public ResponseEntity<Page<Customer>> getAllCustomers(Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(customerService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getCustomer(@PathVariable(value = "id") Long id) {
        Optional<Customer> customerOptional = customerService.findById(id);
        if (!customerOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(customerOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCustomer(@PathVariable(value = "id") Long id) {
        Optional<Customer> customerOptional = customerService.findById(id);
        if (!customerOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        customerService.delete(customerOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente deletado com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCustomer(@PathVariable(value = "id") Long id,
                                                 @RequestBody @Valid CustomerDto customerDto) {
        Optional<Customer> customerOptional = customerService.findById(id);
        if (!customerOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        var customer = new Customer();
        BeanUtils.copyProperties(customerDto, customer);
        customer.setId(customerOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(customerService.save(customer));
    }
}
