package com.commercial.app.domain.entites.crawl;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Filterable {
    private int is_installment;
    private int stock_available_id;
    private int company_stock_id;
    private List<Filter> filter;
    private boolean is_parent;
    private double price;
    private Prices prices;
    private double special_price;
    private String promotion_information;
    private String thumbnail;
}
