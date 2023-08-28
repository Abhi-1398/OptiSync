package com.example.demo.entities;

import java.sql.Timestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "dispatch")
public class Dispatch {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int entry_no;
	
	@Column
	Timestamp date;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order_id;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	Product product_id;
	
	@Column
	int received_product_qty;
	
	@Column(name="tageted_value")
	int targeted_qty;
	
	@Column(name = "achieved")
	int acheived_qty;
	
	@Column(name="dispatcher_name")
	String disptacher_name;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="dispatch_status")
	DispatchStatus dispatch_status;


	public Dispatch(Timestamp date, Orders order_id, Product product_id, int received_product_qty) {
		super();
		this.date = date;
		this.order_id = order_id;
		this.product_id = product_id;
		this.received_product_qty = received_product_qty;
		this.targeted_qty = 0;
		this.acheived_qty = 0;
	}

	public Dispatch(Timestamp date, Orders order_id, Product product_id, int received_product_qty, int targeted_qty,
			int acheived_qty, String disptacher_name, DispatchStatus dispatch_status) {
		super();
		this.date = date;
		this.order_id = order_id;
		this.product_id = product_id;
		this.received_product_qty = received_product_qty;
		this.targeted_qty = targeted_qty;
		this.acheived_qty = acheived_qty;
		this.disptacher_name = disptacher_name;
		this.dispatch_status = dispatch_status;
	}

	public Dispatch() {
		super();
	}

	public int getEntry_no() {
		return entry_no;
	}

	public void setEntry_no(int entry_no) {
		this.entry_no = entry_no;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public Orders getOrder_id() {
		return order_id;
	}

	public void setOrder_id(Orders order_id) {
		this.order_id = order_id;
	}

	public Product getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}

	public int getReceived_product_qty() {
		return received_product_qty;
	}

	public void setReceived_product_qty(int received_product_qty) {
		this.received_product_qty = received_product_qty;
	}

	public int getTargeted_qty() {
		return targeted_qty;
	}

	public void setTargeted_qty(int targeted_qty) {
		this.targeted_qty = targeted_qty;
	}

	public int getAcheived_qty() {
		return acheived_qty;
	}

	public void setAcheived_qty(int acheived_qty) {
		this.acheived_qty = acheived_qty;
	}

	public String getDisptacher_name() {
		return disptacher_name;
	}

	public void setDisptacher_name(String disptacher_name) {
		this.disptacher_name = disptacher_name;
	}

	public DispatchStatus getDisptach_status() {
		return dispatch_status;
	}

	public void setDisptach_status(DispatchStatus dispatch_status) {
		this.dispatch_status = dispatch_status;
	}
	
}