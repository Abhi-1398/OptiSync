package com.example.demo.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="production")
public class Production {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int production_entry_no;
	
	@OneToOne
	@JoinColumn(name="order_id")
	Orders order_id;
	@OneToOne
	@JoinColumn(name="raw_material_id")
	RawMaterial raw_material_id;
	
	@Column
	int received_qty;
	
	@Column
	Timestamp production_date;
	
	@Column
	int production_target_value;
	
	@Column
	int production_acheived_value;
	
	@Column
	int current_qty;
	
	@Column
	String operator_name;
	
	@OneToOne
	@JoinColumn(name="machine_id")
	Machine machine_id;

	public Production(Orders order_id, RawMaterial raw_material_id, int received_qty) {
		super();
		this.order_id = order_id;
		this.raw_material_id = raw_material_id;
		this.received_qty = received_qty;
	}

	public Production(Orders order_id, RawMaterial raw_material_id, int received_qty, Timestamp production_date,
			int production_target_value, int production_acheived_value, int curent_qty, String operator_name,
			Machine machine_id) {
		super();
		this.order_id = order_id;
		this.raw_material_id = raw_material_id;
		this.received_qty = received_qty;
		this.production_date = production_date;
		this.production_target_value = production_target_value;
		this.production_acheived_value = production_acheived_value;
		this.current_qty = curent_qty;
		this.operator_name = operator_name;
		this.machine_id = machine_id;
	}

	public Production() {
		super();
	}

	public int getProduction_entry_no() {
		return production_entry_no;
	}

	public void setProduction_entry_no(int production_entry_no) {
		this.production_entry_no = production_entry_no;
	}

	public Orders getOrder_id() {
		return order_id;
	}

	public void setOrder_id(Orders order_id) {
		this.order_id = order_id;
	}

	public RawMaterial getRaw_material_id() {
		return raw_material_id;
	}

	public void setRaw_material_id(RawMaterial raw_material_id) {
		this.raw_material_id = raw_material_id;
	}

	public int getReceived_qty() {
		return received_qty;
	}

	public void setReceived_qty(int received_qty) {
		this.received_qty = received_qty;
	}

	public Timestamp getProduction_date() {
		return production_date;
	}

	public void setProduction_date(Timestamp production_date) {
		this.production_date = production_date;
	}

	public int getProduction_target_value() {
		return production_target_value;
	}

	public void setProduction_target_value(int production_target_value) {
		this.production_target_value = production_target_value;
	}

	public int getProduction_acheived_value() {
		return production_acheived_value;
	}

	public void setProduction_acheived_value(int production_acheived_value) {
		this.production_acheived_value = production_acheived_value;
	}

	public int getCurrent_qty() {
		return current_qty;
	}

	public void setCurrent_qty(int curent_qty) {
		this.current_qty = curent_qty;
	}

	public String getOperator_name() {
		return operator_name;
	}

	public void setOperator_name(String operator_name) {
		this.operator_name = operator_name;
	}

	public Machine getMachine_id() {
		return machine_id;
	}

	public void setMachine_id(Machine machine_id) {
		this.machine_id = machine_id;
	}
	
	
}
