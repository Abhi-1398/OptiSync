package com.example.demo.entities;

import java.sql.Date;
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
	int orderId;
	
	@OneToOne
	@JoinColumn(name="client_id")
    Client client;
	
	@OneToOne
	@JoinColumn(name="company_id")
	Company company;
	
	@OneToOne
	@JoinColumn(name="product_id")
	Product product;
	
	@Column
	int product_qty;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date start_date;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date end_date;
	
	@Column
	int dispatch_qty;

	public Orders() {
		super();
	}
	

	public Orders(Client client, Company company, Product product, int product_qty, Date start_date,
			Date end_date, int dispatch_qty) {
		super();
		this.client = client;
		this.company = company;
		this.product= product;
		this.product_qty = product_qty;
		this.start_date = start_date;
		this.end_date = end_date;
		this.dispatch_qty = dispatch_qty;
	}


	public int getOrder_id() {
		return orderId;
	}

	public void setOrder_id(int order_id) {
		this.orderId = order_id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Company getComapny() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getProduct_qty() {
		return product_qty;
	}

	public void setProduct_qty(int product_qty) {
		this.product_qty = product_qty;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public int getDispatch_qty() {
		return dispatch_qty;
	}

	public void setDispatch_qty(int dispatch_qty) {
		this.dispatch_qty = dispatch_qty;
	}

	
}