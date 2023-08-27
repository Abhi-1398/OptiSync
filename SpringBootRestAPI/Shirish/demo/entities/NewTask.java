package com.example.demo.entities;


public class NewTask {
	String dateId;
	 int orderId;
   int productId;
   int targetedQtyId;
   int acheivedQtyId;
    String dispatcherNameId ;
    int disptachStatusId;
	public NewTask(String dateId, int orderId, int productId, int targetedQtyId, int acheivedQtyId,
			String dispatcherNameId, int disptachStatusId) {
		super();
		this.dateId = dateId;
		this.orderId = orderId;
		this.productId = productId;
		this.targetedQtyId = targetedQtyId;
		this.acheivedQtyId = acheivedQtyId;
		this.dispatcherNameId = dispatcherNameId;
		this.disptachStatusId = disptachStatusId;
	}
	public NewTask() {
		super();
	}
	public String getDateId() {
		return dateId;
	}
	public void setDateId(String dateId) {
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
	public int getTargetedQtyId() {
		return targetedQtyId;
	}
	public void setTargetedQtyId(int targetedQtyId) {
		this.targetedQtyId = targetedQtyId;
	}
	public int getAcheivedQtyId() {
		return acheivedQtyId;
	}
	public void setAcheivedQtyId(int acheivedQtyId) {
		this.acheivedQtyId = acheivedQtyId;
	}
	public String getDispatcherNameId() {
		return dispatcherNameId;
	}
	public void setDispatcherNameId(String dispatcherNameId) {
		this.dispatcherNameId = dispatcherNameId;
	}
	public int getDisptachStatusId() {
		return disptachStatusId;
	}
	public void setDisptachStatusId(int disptachStatusId) {
		this.disptachStatusId = disptachStatusId;
	}
    
}
