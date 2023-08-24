package com.example.demo.entities;

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
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="production")
public class Production {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int p_entry_no;
	
	@OneToMany(cascade = CascadeType.MERGE)
	@JoinColumn(name = "orderId")
	Set<Orders> order;
	
	@OneToMany(cascade = CascadeType.MERGE)
	@JoinColumn(name="raw_material_id")
	 Set<RawMaterials> rawmaterial;
	
	@OneToMany(cascade=CascadeType.MERGE)
	@JoinColumn(name="machine_id")
	Set<Machines> machine; 
		
	@Column(name="recieved_qty")
	int received_qty;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="p_date")
	Date date;
	
	@Column
	int achieve;
	
	@Column
	int current_qty;
	
	@Column
	String operator_name;
	
	@Column
	int target_value;

	public int getEntry_no() {
		return p_entry_no;
	}

	public void setEntry_no(int p_entry_no) {
		this.p_entry_no = p_entry_no;
	}

	public Set<Orders> getOrder() {
		return order;
	}

	public void setOrder(Set<Orders> order) {
		this.order = order;
	}

	public Set<RawMaterials> getRawmaterial() {
		return rawmaterial;
	}

	public void setRawmaterial(Set<RawMaterials> rawmaterial) {
		this.rawmaterial = rawmaterial;
	}

	public Set<Machines> getMachine() {
		return machine;
	}

	public void setMachine(Set<Machines> machine) {
		this.machine = machine;
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

	public int getTarget_value() {
		return target_value;
	}

	public void setTarget_value(int target_value) {
		this.target_value = target_value;
	}

	public Production(int p_entry_no, Set<Orders> order, Set<RawMaterials> rawmaterial, Set<Machines> machine,
			int received_qty, Date date, int achieve, int current_qty, String operator_name, int target_value) {
		super();
		this.p_entry_no = p_entry_no;
		this.order = order;
		this.rawmaterial = rawmaterial;
		this.machine = machine;
		this.received_qty = received_qty;
		this.date = date;
		this.achieve = achieve;
		this.current_qty = current_qty;
		this.operator_name = operator_name;
		this.target_value = target_value;
	}

	public Production() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}