package com.ciandt.fullstack.project.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NOME")
    private String name;

    @Column(name = "SOBRENOME")
    private String lastName;

    @Column(name = "TELEFONE")
    private String phone;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "NOME_EMPRESA")
    private String companyName;

    @Column(name = "CNPJ")
    private String cnpj;
}
