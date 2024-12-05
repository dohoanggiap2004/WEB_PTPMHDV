package com.commercial_website.Mappers;

import com.commercial_website.DTOs.BrandDTO;
import com.commercial_website.Entities.Brand;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-05T16:13:02+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class BrandMapperImpl implements BrandMapper {

    @Override
    public Brand mapToEntity(BrandDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Brand brand = new Brand();

        brand.setBrandId( dto.getBrandId() );
        brand.setBrandName( dto.getBrandName() );

        return brand;
    }

    @Override
    public BrandDTO mapToDTO(Brand brand) {
        if ( brand == null ) {
            return null;
        }

        BrandDTO brandDTO = new BrandDTO();

        brandDTO.setBrandId( brand.getBrandId() );
        brandDTO.setBrandName( brand.getBrandName() );

        return brandDTO;
    }
}
