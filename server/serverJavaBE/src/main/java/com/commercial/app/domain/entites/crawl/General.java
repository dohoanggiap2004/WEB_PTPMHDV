package com.commercial.app.domain.entites.crawl;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class General {
    private String product_id;
    private String name;
    private Attributes attributes;
    private String sku;
    private String manufacturer;
    private String url_key;
    private String url_path;
    private List<Category> categories;
    private Review review;
}
