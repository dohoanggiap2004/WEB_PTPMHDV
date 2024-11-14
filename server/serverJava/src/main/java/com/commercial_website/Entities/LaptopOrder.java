package com.commercial_website.Entities;

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
@Table(name = "laptops_orders")
public class LaptopOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "laptopId")
    private Laptop laptop;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "orderId")
    private Order order;

    @Column
    private int quantity;

    @Column
    private int totalPrice;
}
