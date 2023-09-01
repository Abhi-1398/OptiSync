package com.optisync.entites;

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
@Table(name="stores")
public class Store {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int store_entry_no;
	
	@Column
	Date store_date;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order;
	
	@ManyToOne
	@JoinColumn(name="raw_material_id")
	RawMaterial rawMaterial;
	
	@Column
	int raw_material_qty;
	
	@ManyToOne
	@JoinColumn(name="forward_id")
	Forward forward;
	
	@ManyToOne
	@JoinColumn(name="part_id")
	Part part;
	
	@Column
	int part_qty;
	
	

	public Store() {
		super();
	}

	public Store(int store_entry_no, Date store_date, Orders order, RawMaterial rawMaterial, int raw_material_qty,
			Forward forward, Part part, int part_qty) {
		super();
		this.store_entry_no = store_entry_no;
		this.store_date = store_date;
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.forward = forward;
		this.part = part;
		this.part_qty = part_qty;
	}

	public Store(Date store_date, Orders order, RawMaterial rawMaterial, int raw_material_qty, Forward forward,
			Part part, int part_qty) {
		super();
		this.store_date = store_date;
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.forward = forward;
		this.part = part;
		this.part_qty = part_qty;
	}
	
	

	public Store(Date store_date, Orders order, RawMaterial rawMaterial, int raw_material_qty, Forward forward) {
		super();
		this.store_date = store_date;
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.forward = forward;
	}
	
	

	public Store(Date store_date, Orders order, Forward forward, Part part, int part_qty) {
		super();
		this.store_date = store_date;
		this.order = order;
		this.forward = forward;
		this.part = part;
		this.part_qty = part_qty;
	}

	public int getStore_entry_no() {
		return store_entry_no;
	}

	public void setStore_entry_no(int store_entry_no) {
		this.store_entry_no = store_entry_no;
	}

	public Date getStore_date() {
		return store_date;
	}

	public void setStore_date(Date store_date) {
		this.store_date = store_date;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public RawMaterial getRawMaterial() {
		return rawMaterial;
	}

	public void setRawMaterial(RawMaterial rawMaterial) {
		this.rawMaterial = rawMaterial;
	}

	public int getRaw_material_qty() {
		return raw_material_qty;
	}

	public void setRaw_material_qty(int raw_material_qty) {
		this.raw_material_qty = raw_material_qty;
	}

	public Forward getForward() {
		return forward;
	}

	public void setForward(Forward forward) {
		this.forward = forward;
	}

	public Part getPart() {
		return part;
	}

	public void setPart(Part part) {
		this.part = part;
	}

	public int getPart_qty() {
		return part_qty;
	}

	public void setPart_qty(int part_qty) {
		this.part_qty = part_qty;
	}
	
	
}
