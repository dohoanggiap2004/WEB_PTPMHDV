package com.commercial.app.domain.dtos.response;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
public class InstallmentResponseDto {

    private Long installmentId;
    private String company; // Company
    private int installmentPrice; // Installment price
    private int downPayment; // Down payment
    private String term; // Term in months
    private int monthlyInstallment; // Monthly installment
    private String flatInterestRate; // Flat interest rate
    private String requiredDocuments; // Required documents
    private int totalPayment; // Total payment
}
