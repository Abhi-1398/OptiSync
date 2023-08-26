package com.example.demo.Entity;

import java.sql.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name="assembly")
public class Assembly {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int assembly_entry_no;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date date;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order;
	
	@ManyToOne
	@JoinColumn(name="part_id")
	Part part;
	
	@Column
	int received_part_qty;
	
	@Column
	int targeted_value;
	
	@Column
	int achieve;
	
	

	public Assembly() {
		super();
	}



	



	public Assembly(Orders order, Part part, int received_part_qty,Date date) {
		super();
		this.order = order;
		this.part = part;
		this.received_part_qty = received_part_qty;
		this.date=date;
	}







	public Assembly(int assembly_entry_no, Date date, Orders order, Part part, int received_part_qty,
			int targeted_value, int achieve) {
		super();
		this.assembly_entry_no = assembly_entry_no;
		this.date = date;
		this.order = order;
		this.part = part;
		this.received_part_qty = received_part_qty;
		this.targeted_value = targeted_value;
		this.achieve = achieve;
	}



	public int getAssembly_entry_no() {
		return assembly_entry_no;
	}



	public void setAssembly_entry_no(int assembly_entry_no) {
		this.assembly_entry_no = assembly_entry_no;
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



	public void setOrder_id(Orders order) {
		this.order = order;
	}



	public Part getPart() {
		return part;
	}



	public void setPart_id(Part part) {
		this.part = part;
	}



	public int getReceived_part_qty() {
		return received_part_qty;
	}



	public void setReceived_part_qty(int received_part_qty) {
		this.received_part_qty = received_part_qty;
	}



	public int getTargeted_value() {
		return targeted_value;
	}



	public void setTargeted_value(int targeted_value) {
		this.targeted_value = targeted_value;
	}



	public int getAchieve() {
		return achieve;
	}



	public void setAchieve(int achieve) {
		this.achieve = achieve;
	}



	
	
	
}
