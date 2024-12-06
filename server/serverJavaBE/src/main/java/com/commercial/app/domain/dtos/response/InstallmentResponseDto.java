package com.commercial.app.domain.dtos.response;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
public class InstallmentResponseDto {

    private String installmentId; // Installment ID
    private String company; // Company
    private String installmentPrice; // Installment price
    private String downPayment; // Down payment
    private String term; // Term in months
    private String monthlyInstallment; // Monthly installment
    private String flatInterestRate; // Flat interest rate
    private String requiredDocuments; // Required documents
    private String totalPayment; // Total payment
}
