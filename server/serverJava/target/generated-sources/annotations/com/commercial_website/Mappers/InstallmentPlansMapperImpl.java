package com.commercial_website.Mappers;

import com.commercial_website.DTOs.InstallmentPlansDTO;
import com.commercial_website.Entities.InstallmentPlans;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-13T14:43:52+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 18.0.2.1 (Oracle Corporation)"
)
@Component
public class InstallmentPlansMapperImpl implements InstallmentPlansMapper {

    @Override
    public InstallmentPlans mapToEntity(InstallmentPlansDTO dto) {
        if ( dto == null ) {
            return null;
        }

        InstallmentPlans installmentPlans = new InstallmentPlans();

        installmentPlans.setInstallmentId( dto.getInstallmentId() );
        installmentPlans.setCompany( dto.getCompany() );
        installmentPlans.setInstallmentPrice( dto.getInstallmentPrice() );
        installmentPlans.setDownPayment( dto.getDownPayment() );
        installmentPlans.setTerm( dto.getTerm() );
        installmentPlans.setMonthlyInstallment( dto.getMonthlyInstallment() );
        installmentPlans.setFlatInterestRate( dto.getFlatInterestRate() );
        installmentPlans.setRequiredDocuments( dto.getRequiredDocuments() );
        installmentPlans.setTotalPayment( dto.getTotalPayment() );

        return installmentPlans;
    }

    @Override
    public InstallmentPlansDTO mapToDTO(InstallmentPlans installmentPlans) {
        if ( installmentPlans == null ) {
            return null;
        }

        InstallmentPlansDTO installmentPlansDTO = new InstallmentPlansDTO();

        installmentPlansDTO.setInstallmentId( installmentPlans.getInstallmentId() );
        installmentPlansDTO.setCompany( installmentPlans.getCompany() );
        installmentPlansDTO.setInstallmentPrice( installmentPlans.getInstallmentPrice() );
        installmentPlansDTO.setDownPayment( installmentPlans.getDownPayment() );
        installmentPlansDTO.setTerm( installmentPlans.getTerm() );
        installmentPlansDTO.setMonthlyInstallment( installmentPlans.getMonthlyInstallment() );
        installmentPlansDTO.setFlatInterestRate( installmentPlans.getFlatInterestRate() );
        installmentPlansDTO.setRequiredDocuments( installmentPlans.getRequiredDocuments() );
        installmentPlansDTO.setTotalPayment( installmentPlans.getTotalPayment() );

        return installmentPlansDTO;
    }
}
