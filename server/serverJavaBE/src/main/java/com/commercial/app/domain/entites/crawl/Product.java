package com.commercial.app.domain.entites.crawl;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
    private General general;
    private Filterable filterable;
}
