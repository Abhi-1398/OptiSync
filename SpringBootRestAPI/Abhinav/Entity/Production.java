package com.example.demo.Entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="production")
public class Production {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int entry_no;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	Orders order;
	
	@ManyToOne
	@JoinColumn(name="raw_material_id")
	RawMaterial rawMaterial;
	
	@Column
	int received_qty;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date date;
	
	@Column
	int target_value;
	
	@Column
	int achieve;
	
	@Column
	int current_qty;
	@Column
	String operator_name;
	
	@ManyToOne
	@JoinColumn(name="machine_id")
	Machine machine;

	public Production() {
		super();
	}




	



	public Production(Orders order, RawMaterial rawMaterial, int received_qty,Date date) {
		super();
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.received_qty = received_qty;
		this.date=date;
	}








	public Production(Orders order, RawMaterial rawMaterial, int received_qty, Date date, int target_value, int achieve,
			int current_qty, String operator_name, Machine machine) {
		super();
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.received_qty = received_qty;
		this.date = date;
		this.target_value = target_value;
		this.achieve = achieve;
		this.current_qty = current_qty;
		this.operator_name = operator_name;
		this.machine = machine;
	}




	public Production(int entry_no, Orders order, RawMaterial rawMaterial, int received_qty, Date date,
			int target_value, int achieve, int current_qty, String operator_name, Machine machine) {
		super();
		this.entry_no = entry_no;
		this.order = order;
		this.rawMaterial = rawMaterial;
		this.received_qty = received_qty;
		this.date = date;
		this.target_value = target_value;
		this.achieve = achieve;
		this.current_qty = current_qty;
		this.operator_name = operator_name;
		this.machine = machine;
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




	public RawMaterial getRawMaterial() {
		return rawMaterial;
	}




	public void setRawMaterial(RawMaterial rawMaterial) {
		this.rawMaterial = rawMaterial;
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




	public int getTarget_value() {
		return target_value;
	}




	public void setTarget_value(int target_value) {
		this.target_value = target_value;
	}




	public int getAchieve() {
		return achieve;
	}




	public void setAchieve(int achieve) {
		this.achieve = achieve;
	}




	public int getCurrent_qty() {
		return current_qty;
	}




	public void setCurrent_qty(int current_qty) {
		this.current_qty = current_qty;
	}




	public String getOperator_name() {
		return operator_name;
	}




	public void setOperator_name(String operator_name) {
		this.operator_name = operator_name;
	}




	public Machine getMachine() {
		return machine;
	}




	public void setMachine(Machine machine) {
		this.machine = machine;
	}




	
	
}
