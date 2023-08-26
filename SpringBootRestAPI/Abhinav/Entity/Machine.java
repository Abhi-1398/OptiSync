package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="machines")
public class Machine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int machine_id;
	
	@Column
	String machine_name;
	
	@Column
	String machine_description;
	
	@ManyToOne
	@JoinColumn(name="company_id")
	Company company;

	
	public Machine() {
		super();
	}


	public Machine(String machine_name, String machine_description, Company company) {
		super();
		this.machine_name = machine_name;
		this.machine_description = machine_description;
		this.company = company;
	}


	public Machine(int machine_id, String machine_name, String machine_description, Company company) {
		super();
		this.machine_id = machine_id;
		this.machine_name = machine_name;
		this.machine_description = machine_description;
		this.company = company;
	}


	public int getMachine_id() {
		return machine_id;
	}


	public void setMachine_id(int machine_id) {
		this.machine_id = machine_id;
	}


	public String getMachine_name() {
		return machine_name;
	}


	public void setMachine_name(String machine_name) {
		this.machine_name = machine_name;
	}


	public String getMachine_description() {
		return machine_description;
	}


	public void setMachine_description(String machine_description) {
		this.machine_description = machine_description;
	}


	public Company getCompany() {
		return company;
	}


	public void setCompany(Company company) {
		this.company = company;
	}
	
	
}
