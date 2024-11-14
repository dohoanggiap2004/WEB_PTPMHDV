package com.commercial_website.Services;

import com.commercial_website.DTOs.VoucherDTO;

import java.util.List;
import java.util.Optional;

public interface VoucherService {

    List<VoucherDTO> getAllVouchers();

    VoucherDTO getVoucherByCode(String voucherCode);

    VoucherDTO createVoucher(VoucherDTO voucherDTO);

    void deleteVoucher(Long voucherId);
}
