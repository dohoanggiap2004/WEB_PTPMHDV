package com.commercial.app.domain.dtos.request;


import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class InstallmentRequestDto {

    private String company; // Company
    private int installmentPrice; // Installment price
    private int downPayment; // Down payment
    private String term; // Term in months
    private int monthlyInstallment; // Monthly installment
    private String flatInterestRate; // Flat interest rate
    private String requiredDocuments; // Required documents
    private int totalPayment; // Total payment
}
