package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Orders;

import jakarta.transaction.Transactional;


@Repository
@Transactional
public interface OrderRepository extends JpaRepository<Orders, Integer> {

	@Query(value = "select c.dispatch_qty from orders c where c.order_id=:orderId",nativeQuery = true)
	    List<Object[]> getQuantitiesByOrderId(int orderId);
	
	    
	    @Modifying
		@Query(value = "update orders set dispatch_qty= ?1 where order_id= ?2 and company_id= ?3",nativeQuery = true)
		public int updateDispatchQty(int qty, int orderId, int companyId);    
	    //"update Patient p set p.contact = ?2 where p.pid = ?1" "update Orders o set o.dispatch_qty= ?1 where o.order_id= ?2 and o.company_id= ?3"

    @Query(value="select * from orders u where u.company_id=:id",nativeQuery = true)
    public List<Orders> getorderbycid(int id);

}
