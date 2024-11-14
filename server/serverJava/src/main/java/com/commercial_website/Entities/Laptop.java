package com.commercial_website.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "laptops")
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long laptopId;

    @Column
    private String model;

    @Column
    private int price;

    @Column
    private int stockQuantity;

    @Column
    private String description;

    @Column
    @CreationTimestamp
    private Timestamp createdAt;

    @Column
    @UpdateTimestamp
    private Timestamp updatedAt;

    @Column
    private String processor;

    @Column
    private String ram;

    @Column
    private String storage;

    @Column
    private String gpu;

    @Column
    private double screenSize;

    @Column
    private String battery;

    @Column
    private double weight;

    @Column
    private String os;

    @Column
    private String image;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "brandId", referencedColumnName = "brandId")
    private Brand brand;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "discountId", referencedColumnName = "discountId")
    private Discount discount;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL ,mappedBy = "laptop")
    private List<LaptopOrder> laptopOrderSet;
}
