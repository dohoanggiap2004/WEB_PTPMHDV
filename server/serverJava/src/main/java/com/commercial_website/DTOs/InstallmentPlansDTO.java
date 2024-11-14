package com.commercial_website.DTOs;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InstallmentPlansDTO {

    private Long installmentId;
    private String company;
    private int installmentPrice;
    private int downPayment;
    private String term;
    private int monthlyInstallment;
    private String flatInterestRate;
    private String requiredDocuments;
    private int totalPayment;

}


