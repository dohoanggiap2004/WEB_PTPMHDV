package com.commercial_website.Mappers;

import com.commercial_website.DTOs.OrderDTO;
import com.commercial_website.Entities.Order;
import com.commercial_website.Entities.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-13T14:43:52+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 18.0.2.1 (Oracle Corporation)"
)
@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public Order mapToEntity(OrderDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Order order = new Order();

        order.setOrderId( dto.getOrderId() );
        order.setOrderDate( dto.getOrderDate() );
        order.setStatus( dto.getStatus() );
        order.setOrderNote( dto.getOrderNote() );
        order.setTotalPayment( dto.getTotalPayment() );
        order.setOrderAddress( dto.getOrderAddress() );
        order.setPhoneNumber( dto.getPhoneNumber() );
        order.setPaymentMethod( dto.getPaymentMethod() );
        order.setShippingMethod( dto.getShippingMethod() );

        return order;
    }

    @Override
    public OrderDTO mapToDTO(Order order) {
        if ( order == null ) {
            return null;
        }

        OrderDTO orderDTO = new OrderDTO();

        orderDTO.setUserName( orderUserFullname( order ) );
        orderDTO.setOrderId( order.getOrderId() );
        orderDTO.setOrderDate( order.getOrderDate() );
        orderDTO.setStatus( order.getStatus() );
        orderDTO.setOrderNote( order.getOrderNote() );
        orderDTO.setTotalPayment( order.getTotalPayment() );
        orderDTO.setOrderAddress( order.getOrderAddress() );
        orderDTO.setPhoneNumber( order.getPhoneNumber() );
        orderDTO.setPaymentMethod( order.getPaymentMethod() );
        orderDTO.setShippingMethod( order.getShippingMethod() );

        return orderDTO;
    }

    private String orderUserFullname(Order order) {
        if ( order == null ) {
            return null;
        }
        User user = order.getUser();
        if ( user == null ) {
            return null;
        }
        String fullname = user.getFullname();
        if ( fullname == null ) {
            return null;
        }
        return fullname;
    }
}
