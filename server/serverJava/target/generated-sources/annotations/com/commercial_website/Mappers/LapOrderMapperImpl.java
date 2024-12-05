package com.commercial_website.Mappers;

import com.commercial_website.DTOs.LaptopOrderDTO;
import com.commercial_website.Entities.Laptop;
import com.commercial_website.Entities.LaptopOrder;
import com.commercial_website.Entities.Order;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-05T16:13:01+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class LapOrderMapperImpl implements LapOrderMapper {

    @Override
    public LaptopOrder mapToEntity(LaptopOrderDTO laptopOrderDTO) {
        if ( laptopOrderDTO == null ) {
            return null;
        }

        LaptopOrder laptopOrder = new LaptopOrder();

        laptopOrder.setId( laptopOrderDTO.getId() );
        laptopOrder.setQuantity( laptopOrderDTO.getQuantity() );
        laptopOrder.setTotalPrice( laptopOrderDTO.getTotalPrice() );

        return laptopOrder;
    }

    @Override
    public LaptopOrderDTO mapToDTO(LaptopOrder laptopOrder) {
        if ( laptopOrder == null ) {
            return null;
        }

        LaptopOrderDTO laptopOrderDTO = new LaptopOrderDTO();

        laptopOrderDTO.setLaptopId( laptopOrderLaptopLaptopId( laptopOrder ) );
        laptopOrderDTO.setOrderId( laptopOrderOrderOrderId( laptopOrder ) );
        laptopOrderDTO.setId( laptopOrder.getId() );
        laptopOrderDTO.setQuantity( laptopOrder.getQuantity() );
        laptopOrderDTO.setTotalPrice( laptopOrder.getTotalPrice() );

        return laptopOrderDTO;
    }

    private Long laptopOrderLaptopLaptopId(LaptopOrder laptopOrder) {
        if ( laptopOrder == null ) {
            return null;
        }
        Laptop laptop = laptopOrder.getLaptop();
        if ( laptop == null ) {
            return null;
        }
        Long laptopId = laptop.getLaptopId();
        if ( laptopId == null ) {
            return null;
        }
        return laptopId;
    }

    private Long laptopOrderOrderOrderId(LaptopOrder laptopOrder) {
        if ( laptopOrder == null ) {
            return null;
        }
        Order order = laptopOrder.getOrder();
        if ( order == null ) {
            return null;
        }
        Long orderId = order.getOrderId();
        if ( orderId == null ) {
            return null;
        }
        return orderId;
    }
}
