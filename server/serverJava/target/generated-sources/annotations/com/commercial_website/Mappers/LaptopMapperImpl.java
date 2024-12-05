package com.commercial_website.Mappers;

import com.commercial_website.DTOs.LaptopDTO;
import com.commercial_website.Entities.Brand;
import com.commercial_website.Entities.Laptop;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-05T16:13:02+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class LaptopMapperImpl implements LaptopMapper {

    @Override
    public Laptop mapToEntity(LaptopDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Laptop laptop = new Laptop();

        laptop.setLaptopId( dto.getLaptopId() );
        laptop.setModel( dto.getModel() );
        laptop.setPrice( dto.getPrice() );
        laptop.setStockQuantity( dto.getStockQuantity() );
        laptop.setDescription( dto.getDescription() );
        laptop.setCreatedAt( dto.getCreatedAt() );
        laptop.setProcessor( dto.getProcessor() );
        laptop.setRam( dto.getRam() );
        laptop.setStorage( dto.getStorage() );
        laptop.setGpu( dto.getGpu() );
        laptop.setScreenSize( dto.getScreenSize() );
        laptop.setBattery( dto.getBattery() );
        laptop.setWeight( dto.getWeight() );
        laptop.setOs( dto.getOs() );
        laptop.setImage( dto.getImage() );
        laptop.setDiscount( dto.getDiscount() );

        return laptop;
    }

    @Override
    public LaptopDTO mapToDTO(Laptop laptop) {
        if ( laptop == null ) {
            return null;
        }

        LaptopDTO laptopDTO = new LaptopDTO();

        laptopDTO.setBrandName( laptopBrandBrandName( laptop ) );
        laptopDTO.setLaptopId( laptop.getLaptopId() );
        laptopDTO.setModel( laptop.getModel() );
        laptopDTO.setPrice( laptop.getPrice() );
        laptopDTO.setStockQuantity( laptop.getStockQuantity() );
        laptopDTO.setDescription( laptop.getDescription() );
        laptopDTO.setCreatedAt( laptop.getCreatedAt() );
        laptopDTO.setProcessor( laptop.getProcessor() );
        laptopDTO.setRam( laptop.getRam() );
        laptopDTO.setStorage( laptop.getStorage() );
        laptopDTO.setGpu( laptop.getGpu() );
        laptopDTO.setScreenSize( laptop.getScreenSize() );
        laptopDTO.setBattery( laptop.getBattery() );
        laptopDTO.setWeight( laptop.getWeight() );
        laptopDTO.setOs( laptop.getOs() );
        laptopDTO.setImage( laptop.getImage() );
        laptopDTO.setDiscount( laptop.getDiscount() );

        return laptopDTO;
    }

    private String laptopBrandBrandName(Laptop laptop) {
        if ( laptop == null ) {
            return null;
        }
        Brand brand = laptop.getBrand();
        if ( brand == null ) {
            return null;
        }
        String brandName = brand.getBrandName();
        if ( brandName == null ) {
            return null;
        }
        return brandName;
    }
}
