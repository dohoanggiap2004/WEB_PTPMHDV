package com.commercial_website.Mappers;

import com.commercial_website.DTOs.DiscountDTO;
import com.commercial_website.Entities.Discount;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-13T14:43:52+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 18.0.2.1 (Oracle Corporation)"
)
@Component
public class DiscountMapperImpl implements DiscountMapper {

    @Override
    public Discount mapToEntity(DiscountDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Discount discount = new Discount();

        discount.setDiscountId( dto.getDiscountId() );
        discount.setDiscountPercent( dto.getDiscountPercent() );

        return discount;
    }

    @Override
    public DiscountDTO mapToDTO(Discount discount) {
        if ( discount == null ) {
            return null;
        }

        DiscountDTO discountDTO = new DiscountDTO();

        discountDTO.setDiscountId( discount.getDiscountId() );
        discountDTO.setDiscountPercent( discount.getDiscountPercent() );

        return discountDTO;
    }
}
