package com.ciandt.fullstack.project.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class CustomerDto {

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    private String phone;

    @NotBlank
    private String address;

    @NotBlank
    private String cpf;

    @NotBlank
    private String occupation;

    @NotNull
    private Integer number;

    @NotBlank
    private String district;

    @NotBlank
    private String city;

}
