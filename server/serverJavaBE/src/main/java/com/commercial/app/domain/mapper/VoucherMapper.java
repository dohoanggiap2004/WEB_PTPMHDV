package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.response.VoucherResponseDto;
import com.commercial.app.domain.entites.Voucher;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoucherMapper {

    Voucher mapToEntity(VoucherResponseDto dto);

    VoucherResponseDto mapToDTO(Voucher voucher);
}
