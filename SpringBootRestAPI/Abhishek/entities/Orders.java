package com.example.demo.entities;

import java.sql.Timestamp;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int order_id;
	
	@OneToOne
	@JoinColumn(name="client_id")
    Client client_id;
	
	@OneToOne
	@JoinColumn(name="company_id")
	Company comapny_id;
	
	@OneToOne
	@JoinColumn(name="product_id")
	Product product_id;
	
	@Column
	int product_qty;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Timestamp start_date;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Timestamp end_date;
	
	@Column
	int dispatch_qty;

	public Orders() {
		super();
	}
	

	public Orders(Client client_id, Company comapny_id, Product product_id, int product_qty, Timestamp start_date,
			Timestamp end_date, int dispatch_qty) {
		super();
		this.client_id = client_id;
		this.comapny_id = comapny_id;
		this.product_id = product_id;
		this.product_qty = product_qty;
		this.start_date = start_date;
		this.end_date = end_date;
		this.dispatch_qty = dispatch_qty;
	}


	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public Client getClient_id() {
		return client_id;
	}

	public void setClient_id(Client client_id) {
		this.client_id = client_id;
	}

	public Company getComapny_id() {
		return comapny_id;
	}

	public void setComapny_id(Company comapny_id) {
		this.comapny_id = comapny_id;
	}

	public Product getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}

	public int getProduct_qty() {
		return product_qty;
	}

	public void setProduct_qty(int product_qty) {
		this.product_qty = product_qty;
	}

	public Timestamp getStart_date() {
		return start_date;
	}

	public void setStart_date(Timestamp start_date) {
		this.start_date = start_date;
	}

	public Timestamp getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Timestamp end_date) {
		this.end_date = end_date;
	}

	public int getDispatch_qty() {
		return dispatch_qty;
	}

	public void setDispatch_qty(int dispatch_qty) {
		this.dispatch_qty = dispatch_qty;
	}

	
}