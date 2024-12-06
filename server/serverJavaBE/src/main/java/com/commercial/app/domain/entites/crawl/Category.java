package com.commercial.app.domain.entites.crawl;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Category {
    private String category_id;
    private String name;
    private String uri;
}
