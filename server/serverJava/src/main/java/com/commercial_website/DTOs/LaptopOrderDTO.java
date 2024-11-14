package com.commercial_website.DTOs;

import com.commercial_website.Entities.Laptop;
import com.commercial_website.Entities.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LaptopOrderDTO {
    private Long id;

    private Long laptopId;

    private Long orderId;

    private int quantity;

    private int totalPrice;
}
