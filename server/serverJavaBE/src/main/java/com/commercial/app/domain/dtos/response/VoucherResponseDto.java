package com.commercial.app.domain.dtos.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VoucherResponseDto {
    private Long voucherId;
    private String voucherCode;
    private String description;
    private Double voucherDiscount;
}

