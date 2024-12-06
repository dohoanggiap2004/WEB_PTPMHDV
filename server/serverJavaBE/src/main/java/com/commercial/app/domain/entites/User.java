package com.commercial.app.domain.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Nationalized;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(insertable = false, updatable = false, nullable = false, columnDefinition = "CHAR(36)")
    private String userId;

    @Nationalized
    @Column(nullable = false)
    private String username;

    @Nationalized
    @Column(nullable = false)
    private String address;

    @Nationalized
    @Column(nullable = false)
    private String password;

    @Nationalized
    @Column
    private String email;

    @Nationalized
    @Column
    private String phone;

    @Column
    @CreatedDate
    private Date createdAt;

    @Column
    @LastModifiedDate
    private Date updatedAt;

    @Nationalized
    @Column
    private String fullname;

    @Nationalized
    @Column
    private String dateOfBirth;

    @Nationalized
    @Column
    private String addressDetail;

    @Nationalized
    @Column
    private String ward;

    @Nationalized
    @Column
    private String district;

    @Nationalized
    @Column
    private String province;

    @Nationalized
    @Column
    private String role;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Order order;
}
