package com.example.demo.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="dispatch")
public class Dispatch {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int dispatch_entry_no;
	
	@Column
	Date date;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	Product product;
	
	@Column
	int received_product_qty;
	
	@Column
	int targeted_value;
	
	@Column
	int achieved;
	
	@Column
	String dispatcher_name;
	
	@Column
	boolean dispatch_status;

	
	
	public Dispatch() {
		super();
	}



	public Dispatch(int dispatch_entry_no, Date date, Orders order, Product product, int received_product_qty,
			int targeted_value, int achieved, String dispatcher_name, boolean dispatch_status) {
		super();
		this.dispatch_entry_no = dispatch_entry_no;
		this.date = date;
		this.order = order;
		this.product = product;
		this.received_product_qty = received_product_qty;
		this.targeted_value = targeted_value;
		this.achieved = achieved;
		this.dispatcher_name = dispatcher_name;
		this.dispatch_status = dispatch_status;
	}



	public Dispatch(Date date, Orders order, Product product, int received_product_qty, int targeted_value,
			int achieved, String dispatcher_name, boolean dispatch_status) {
		super();
		this.date = date;
		this.order = order;
		this.product = product;
		this.received_product_qty = received_product_qty;
		this.targeted_value = targeted_value;
		this.achieved = achieved;
		this.dispatcher_name = dispatcher_name;
		this.dispatch_status = dispatch_status;
	}



	public int getDispatch_entry_no() {
		return dispatch_entry_no;
	}



	public void setDispatch_entry_no(int dispatch_entry_no) {
		this.dispatch_entry_no = dispatch_entry_no;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public Orders getOrder() {
		return order;
	}



	public void setOrder(Orders order) {
		this.order = order;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	public int getReceived_product_qty() {
		return received_product_qty;
	}



	public void setReceived_product_qty(int received_product_qty) {
		this.received_product_qty = received_product_qty;
	}



	public int getTargeted_value() {
		return targeted_value;
	}



	public void setTargeted_value(int targeted_value) {
		this.targeted_value = targeted_value;
	}



	public int getAchieved() {
		return achieved;
	}



	public void setAchieved(int achieved) {
		this.achieved = achieved;
	}



	public String getDispatcher_name() {
		return dispatcher_name;
	}



	public void setDispatcher_name(String dispatcher_name) {
		this.dispatcher_name = dispatcher_name;
	}



	public boolean isDispatch_status() {
		return dispatch_status;
	}



	public void setDispatch_status(boolean dispatch_status) {
		this.dispatch_status = dispatch_status;
	}
	
	
}
