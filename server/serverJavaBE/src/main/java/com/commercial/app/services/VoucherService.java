package com.commercial.app.services;


import com.commercial.app.domain.dtos.response.VoucherResponseDto;

import java.util.List;
import java.util.Optional;

public interface VoucherService {

    List<VoucherResponseDto> getAllVouchers();

    VoucherResponseDto getVoucherByCode(String voucherCode);

    VoucherResponseDto createVoucher(VoucherResponseDto voucherDTO);

    void deleteVoucher(Long voucherId);
}
