package com.commercial_website.DTOs;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VoucherDTO {
    private Long voucherId;
    private String voucherCode;
    private String description;
    private Double voucherDiscount;
}
