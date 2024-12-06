package com.commercial.app.domain.dtos.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LaptopUpdateRequestDto {
    private String laptopId;
    private String model;
    private String description;
    private int price;
    private String manufacturer;
    private int stockAvailable;
    private String image;
}