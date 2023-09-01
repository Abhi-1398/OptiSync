package com.optisync.entites;

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
	int received_product_qty;
	
	@Column
	int targeted_value;
	
	@Column
	int acheive;
	
	@Column
	int current_qty;
	
	@Column
	String Assembler_name;

	public Assembly() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Assembly(Timestamp date, Orders order_id, Part part_id, int received_product_qty) {
		super();
		this.date = date;
		this.order_id = order_id;
		this.part_id = part_id;
		this.received_product_qty = received_product_qty;
	}


	public Assembly(Orders order_id, Part part_id, int received_product_qty) {
		super();
		this.order_id = order_id;
		this.part_id = part_id;
		this.received_product_qty = received_product_qty;
	}


	public Assembly(Timestamp date, Orders order_id, Part part_id, int received_product_qty, int targeted_value,
			int acheive, int current_qty, String assembler_name) {
		super();
		this.date = date;
		this.order_id = order_id;
		this.part_id = part_id;
		this.received_product_qty = received_product_qty;
		this.targeted_value = targeted_value;
		this.acheive = acheive;
		this.current_qty = current_qty;
		Assembler_name = assembler_name;
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

	public int getAcheive() {
		return acheive;
	}

	public void setAcheive(int acheive) {
		this.acheive = acheive;
	}

	public int getCurrent_qty() {
		return current_qty;
	}

	public void setCurrent_qty(int current_qty) {
		this.current_qty = current_qty;
	}

	public String getAssembler_name() {
		return Assembler_name;
	}

	public void setAssembler_name(String assembler_name) {
		Assembler_name = assembler_name;
	}


	
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            