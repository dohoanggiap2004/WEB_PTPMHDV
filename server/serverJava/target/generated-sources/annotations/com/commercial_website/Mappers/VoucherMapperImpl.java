package com.commercial_website.Mappers;

import com.commercial_website.DTOs.VoucherDTO;
import com.commercial_website.Entities.Voucher;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-05T16:13:01+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class VoucherMapperImpl implements VoucherMapper {

    @Override
    public Voucher mapToEntity(VoucherDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Voucher voucher = new Voucher();

        voucher.setVoucherId( dto.getVoucherId() );
        voucher.setVoucherCode( dto.getVoucherCode() );
        voucher.setDescription( dto.getDescription() );
        voucher.setVoucherDiscount( dto.getVoucherDiscount() );

        return voucher;
    }

    @Override
    public VoucherDTO mapToDTO(Voucher voucher) {
        if ( voucher == null ) {
            return null;
        }

        VoucherDTO voucherDTO = new VoucherDTO();

        voucherDTO.setVoucherId( voucher.getVoucherId() );
        voucherDTO.setVoucherCode( voucher.getVoucherCode() );
        voucherDTO.setDescription( voucher.getDescription() );
        voucherDTO.setVoucherDiscount( voucher.getVoucherDiscount() );

        return voucherDTO;
    }
}
