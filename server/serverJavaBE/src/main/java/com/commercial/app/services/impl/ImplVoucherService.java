package com.commercial.app.services.impl;


import com.commercial.app.domain.dtos.response.VoucherResponseDto;
import com.commercial.app.domain.entites.Voucher;
import com.commercial.app.domain.mapper.VoucherMapper;
import com.commercial.app.repositories.VoucherRepository;
import com.commercial.app.services.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImplVoucherService implements VoucherService {
    @Autowired
    private VoucherMapper voucherMapper;

    @Autowired
    private VoucherRepository voucherRepository;

    @Override
    public List<VoucherResponseDto> getAllVouchers() {
        List<Voucher> vouchers = voucherRepository.findAll();
        return vouchers.stream()
                .map(voucherMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VoucherResponseDto getVoucherByCode(String voucherCode) {
        Voucher voucher = voucherRepository.findByVoucherCode(voucherCode);
        return voucherMapper.mapToDTO(voucher);
    }

    @Override
    public VoucherResponseDto createVoucher(VoucherResponseDto voucherDTO) {
        Voucher voucher = voucherMapper.mapToEntity(voucherDTO);
        Voucher savedVoucher = voucherRepository.save(voucher);
        return voucherMapper.mapToDTO(savedVoucher);
    }

    @Override
    public void deleteVoucher(Long voucherId) {
        voucherRepository.deleteById(voucherId);
    }
}
