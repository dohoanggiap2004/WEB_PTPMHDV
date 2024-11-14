package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.VoucherDTO;
import com.commercial_website.Entities.Voucher;
import com.commercial_website.Mappers.VoucherMapper;
import com.commercial_website.Repositories.VoucherRepository;
import com.commercial_website.Services.VoucherService;
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
    public List<VoucherDTO> getAllVouchers() {
        List<Voucher> vouchers = voucherRepository.findAll();
        return vouchers.stream()
                .map(voucherMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VoucherDTO getVoucherByCode(String voucherCode) {
        Voucher voucher = voucherRepository.findByVoucherCode(voucherCode);
        return voucherMapper.mapToDTO(voucher);
    }

    @Override
    public VoucherDTO createVoucher(VoucherDTO voucherDTO) {
        Voucher voucher = voucherMapper.mapToEntity(voucherDTO);
        Voucher savedVoucher = voucherRepository.save(voucher);
        return voucherMapper.mapToDTO(savedVoucher);
    }

    @Override
    public void deleteVoucher(Long voucherId) {
        voucherRepository.deleteById(voucherId);
    }
}
