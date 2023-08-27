package com.example.demo.entities;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="assembly")
public class Assembly {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int assembly_entry_no;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Timestamp date;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order_id;
	
	@OneToOne
	@JoinColumn(name="part_id")
	Part part_id;
	
	@Column
	int Received_product_qty;
	
	@Column
	int targeted_qty;
	
	@Column
	int acheived_qty;
	
	@Column
	int current_qty;

	public Assembly() {
		super();
	}

	public Assembly(Orders order_id, Part part_id, int received_product_qty) {
		super();
		this.order_id = order_id;
		this.part_id = part_id;
		Received_product_qty = received_product_qty;
	}

	public Assembly(Timestamp date, Orders order_id, Part part_id, int received_product_qty, int targeted_qty,
			int acheived_qty, int current_qty) {
		super();
		this.date = date;
		this.order_id = order_id;
		this.part_id = part_id;
		Received_product_qty = received_product_qty;
		this.targeted_qty = targeted_qty;
		this.acheived_qty = acheived_qty;
		this.current_qty = current_qty;
	}

	public int getAssembly_entry_no() {
		return assembly_entry_no;
	}

	public void setAssembly_entry_no(int assembly_entry_no) {
		this.assembly_entry_no = assembly_entry_no;
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

	public Part getPart_id() {
		return part_id;
	}

	public void setPart_id(Part part_id) {
		this.part_id = part_id;
	}

	public int getReceived_product_qty() {
		return Received_product_qty;
	}

	public void setReceived_product_qty(int received_product_qty) {
		Received_product_qty = received_product_qty;
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

	public int getCurrent_qty() {
		return current_qty;
	}

	public void setCurrent_qty(int current_qty) {
		this.current_qty = current_qty;
	}
	
	
	
}

