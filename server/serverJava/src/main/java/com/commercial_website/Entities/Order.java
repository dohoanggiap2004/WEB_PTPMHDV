package com.commercial_website.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column
    @CreationTimestamp
    private Timestamp orderDate;

    @Column
    private String status;

    @Column
    private String orderNote;

    @Column
    private int totalPayment;

    @Column
    private String orderAddress;

    @Column
    private String phoneNumber;

    @Column
    private String paymentMethod;

    @Column
    private String shippingMethod;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private List<LaptopOrder> laptopOrderSet;

}
