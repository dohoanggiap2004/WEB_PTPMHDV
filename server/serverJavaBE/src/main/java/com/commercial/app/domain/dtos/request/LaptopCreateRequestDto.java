package com.commercial.app.domain.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LaptopCreateRequestDto {
    private String model;
    private String battery;
    private String description;
    private String cpu;
    private String ram;
    private String os;
    private String vga;
    private String webcam;
    private String weight;
    private String storage;
    private String frameRate;
    private String resolution;
    private String screenSize;
    private int price;
    private String manufacturer;
    private int stockAvailable;
    private String image;
}
