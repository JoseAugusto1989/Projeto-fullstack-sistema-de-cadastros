package com.ciandt.fullstack.project.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ProductDto {

    @NotBlank
    private String name;

    @NotNull
    private Double salePrice;

    @NotNull
    private Double purchasePrice;

    @NotNull
    private Double gain;

    @NotNull
    private Integer quantityInStock;

    @NotNull
    private Integer addedAmount;

    @NotBlank
    private String provider;
}
