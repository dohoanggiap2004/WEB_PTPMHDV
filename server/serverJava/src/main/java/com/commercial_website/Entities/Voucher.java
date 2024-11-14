package com.commercial_website.Entities;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vouchers")
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voucherId;

    @Column(unique = true, nullable = false)
    private String voucherCode;

    @Column(unique = true, nullable = false)
    private String description;

    @Column(unique = true, nullable = false)
    private Double voucherDiscount;
}
