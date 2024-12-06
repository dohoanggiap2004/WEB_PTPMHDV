package com.commercial.app.domain.entites.crawl;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PriceType {
    private int chiet_khau;
    private int discount_id;
    private int discount_value;
    private double value;
}
