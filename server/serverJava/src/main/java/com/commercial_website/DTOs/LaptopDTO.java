package com.commercial_website.DTOs;

import com.commercial_website.Entities.Brand;
import com.commercial_website.Entities.Discount;
import com.commercial_website.Entities.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LaptopDTO {
    private Long laptopId;
    private String model;
    private int price;
    private int stockQuantity;
    private String description;
    private Timestamp createdAt;
    private String processor;
    private String ram;
    private String storage;
    private String gpu;
    private double screenSize;
    private String battery;
    private double weight;
    private String os;
    private String image;

    // IDs of referenced entities
    private String brandName;
    private Discount discount;
}
