package com.commercial.app.domain.dtos.request;


import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class InstallmentRequestDto {

    @NotNull
    private String company; // Company

    @NotNull
    private String installmentPrice; // Installment price

    @NotNull
    private String downPayment; // Down payment

    @NotNull
    private String term; // Term in months

    @NotNull
    private String monthlyInstallment; // Monthly installment

    @NotNull
    private String flatInterestRate; // Flat interest rate

    @NotNull
    private String requiredDocuments; // Required documents

    @NotNull
    private String totalPayment; // Total payment
}
