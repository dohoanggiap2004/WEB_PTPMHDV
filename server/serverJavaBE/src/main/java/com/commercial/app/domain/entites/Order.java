package com.commercial.app.domain.entites;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;
import java.util.List;

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
    @CreatedDate
    private Date orderDate;

    @Column
    @LastModifiedDate
    private Date completeDate;

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
    @OneToOne
    @JoinColumn(name = "voucherId", referencedColumnName = "voucherId")
    private Voucher voucher;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private List<OrderLaptop> laptopOrderSet;
}
