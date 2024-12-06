package com.commercial.app.domain.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderRequestDto {

    private Long orderId;

    private Date orderDate;

    private Date completeDate;

    private String status;

    private String orderNote;

    private int totalPayment;

    private String orderAddress;

    private String phoneNumber;

    private String paymentMethod;

    private String shippingMethod;

    private Long userId;

    private Long voucherId;
}
