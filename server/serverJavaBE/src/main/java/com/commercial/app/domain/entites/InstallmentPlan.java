package com.commercial.app.domain.entites;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "installment_plans")
public class InstallmentPlan {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(insertable = false, updatable = false, nullable = false, columnDefinition = "CHAR(36)")
    private String installmentId;

    @Column
    private String company; // Company

    @Column
    private int installmentPrice; // Installment price

    @Column
    private int downPayment; // Down payment

    @Column
    private String term; // Term in months

    @Column
    private int monthlyInstallment; // Monthly installment

    @Column
    private String flatInterestRate; // Flat interest rate

    @Column
    private String requiredDocuments; // Required documents

    @Column
    private int totalPayment; // Total payment
}

