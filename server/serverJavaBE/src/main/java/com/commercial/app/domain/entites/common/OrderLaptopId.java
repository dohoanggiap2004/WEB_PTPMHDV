package com.commercial.app.domain.entites.common;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable public class OrderLaptopId implements java.io.Serializable{
    private String laptopId;
    private Long orderId;

}
