package com.commercial.app.domain.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Nationalized;
import org.hibernate.annotations.UuidGenerator;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "laptops")
public class Laptop {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(insertable = false, updatable = false, nullable = false, columnDefinition = "CHAR(36)")
    private String laptopId;

    @Nationalized
    @Column
    private String model;

    @Nationalized
    @Column
    private String battery;

    @Nationalized
    @Column
    private String description;

    @Nationalized
    @Column
    private String cpu;

    @Nationalized
    @Column
    private String ram;

    @Nationalized
    @Column
    private String os;

    @Nationalized
    @Column
    private String vga;

    @Nationalized
    @Column
    private String webcam;

    @Nationalized
    @Column
    private String weight;

    @Nationalized
    @Column
    private String storage;

    @Nationalized
    @Column
    private String frameRate;

    @Nationalized
    @Column
    private String resolution;

    @Nationalized
    @Column
    private String screenSize;

    @Nationalized
    @Column
    private int price;

    @Nationalized
    @Column
    private String manufacturer;

    @Nationalized
    @Column
    private int stockAvailable;

    @Nationalized
    @Column
    private String image;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL ,mappedBy = "laptop")
    private List<OrderLaptop> laptopOrderSet;
}
