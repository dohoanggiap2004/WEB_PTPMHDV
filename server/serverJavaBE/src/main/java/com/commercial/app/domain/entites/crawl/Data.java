package com.commercial.app.domain.entites.crawl;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Data {
    private List<Product> products;
}
