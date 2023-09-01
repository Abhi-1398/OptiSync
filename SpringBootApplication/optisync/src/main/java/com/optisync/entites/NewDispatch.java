package com.optisync.entites;

import java.sql.Timestamp;

public class NewDispatch {
	
	Timestamp dateId;
	int orderId;
	int productId;	
	int productQty;
	public NewDispatch() {
		super();
	}
	public NewDispatch(Timestamp dateId, int orderId, int productId, int productQty) {
		super();
		this.dateId = dateId;
		this.orderId = orderId;
		this.productId = productId;
		this.productQty = productQty;
	}
	public Timestamp getDateId() {
		return dateId;
	}
	public void setDateId(Timestamp dateId) {
		this.dateId = dateId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getProductQty() {
		return productQty;
	}
	public void setProductQty(int productQty) {
		this.productQty = productQty;
	}
	
}
