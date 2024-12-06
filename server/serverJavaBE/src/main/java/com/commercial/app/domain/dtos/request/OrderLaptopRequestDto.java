package com.commercial.app.domain.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderLaptopRequestDto {
    private Long orderId;

    private String model;

    private int quantity;

    private int totalPrice;
}
