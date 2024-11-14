package com.commercial_website.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "installment_plans")
public class InstallmentPlans {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long installmentId;

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
