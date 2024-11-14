package com.commercial_website.Mappers;

import com.commercial_website.DTOs.VoucherDTO;
import com.commercial_website.Entities.Voucher;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoucherMapper {

    Voucher mapToEntity(VoucherDTO dto);

    VoucherDTO mapToDTO(Voucher voucher);
}

