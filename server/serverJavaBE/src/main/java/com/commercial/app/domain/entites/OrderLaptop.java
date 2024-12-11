package com.commercial.app.domain.entites;

import com.commercial.app.domain.entites.common.OrderLaptopId;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders_laptops")
public class OrderLaptop {

    @EmbeddedId
    private OrderLaptopId id = new OrderLaptopId();

    @JsonIgnore
    @ManyToOne
    @MapsId("laptopId")
    @JoinColumn(name = "laptopId")
    private Laptop laptop;

    @JsonIgnore
    @ManyToOne
    @MapsId("orderId")
    @JoinColumn(name = "orderId")
    private Order order;

    @Column
    private int quantity;

    @Column
    private int totalPrice;
}

