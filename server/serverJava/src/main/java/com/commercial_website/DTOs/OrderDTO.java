package com.commercial_website.DTOs;

import com.commercial_website.Entities.User;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private Long orderId;

    private Timestamp orderDate;

    private String status;

    private String orderNote;

    private int totalPayment;

    private String orderAddress;

    private String phoneNumber;

    private String paymentMethod;

    private String shippingMethod;

    private String userName;
}
