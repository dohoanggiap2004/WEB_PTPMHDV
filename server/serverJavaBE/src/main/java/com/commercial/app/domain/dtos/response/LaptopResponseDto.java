package com.commercial.app.domain.dtos.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LaptopResponseDto {
    private String laptopId;
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
    private Integer specialPrice;
    private int price;
    private String image;
    private String manufacturer;
    private int stockAvailable;
}
