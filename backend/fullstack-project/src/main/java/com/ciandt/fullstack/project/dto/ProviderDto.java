package com.ciandt.fullstack.project.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class ProviderDto {

    @NotBlank
    private String name;

    @NotBlank
    private String lastName;

    @NotBlank
    private String phone;

    @NotBlank
    private String email;

    @NotBlank
    private String companyName;

    @NotBlank
    private String cnpj;
}
