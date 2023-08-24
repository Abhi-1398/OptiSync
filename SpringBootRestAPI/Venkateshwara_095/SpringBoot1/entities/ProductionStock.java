package com.example.demo.entities;

import java.sql.Date;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="production_stock")
public class ProductionStock {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int entry_no;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "order_id")
	Orders order;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="raw_material_id")
	 RawMaterials rawmaterial;
	
	@Column(name="recieved_qty")
	int received_qty;
	
	@Column
	Date date;

	public ProductionStock() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductionStock(int entry_no, Orders order, RawMaterials rawmaterial, int received_qty,
			Date date) {
		super();
		this.entry_no = entry_no;
		this.order = order;
		this.rawmaterial = rawmaterial;
		this.received_qty = received_qty;
		this.date = date;
	}

	public int getEntry_no() {
		return entry_no;
	}

	public void setEntry_no(int entry_no) {
		this.entry_no = entry_no;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public RawMaterials getRawmaterial() {
		return rawmaterial;
	}

	public void setRawmaterial(RawMaterials rawmaterial) {
		this.rawmaterial = rawmaterial;
	}

	public int getReceived_qty() {
		return received_qty;
	}

	public void setReceived_qty(int received_qty) {
		this.received_qty = received_qty;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
	
	
	
	

}
