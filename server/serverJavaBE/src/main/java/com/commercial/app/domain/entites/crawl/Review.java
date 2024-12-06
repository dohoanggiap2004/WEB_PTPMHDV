package com.commercial.app.domain.entites.crawl;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Review {
    private int total_count;
    private double average_rating;
}
