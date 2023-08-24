package com.example.demo.entities;



public class MachineDummy {
	
	
	String machine_name;
	
	
	String machine_description;
	
	int company_id;

	public MachineDummy(String machine_name, String machine_description, int company_id) {
		super();
		this.machine_name = machine_name;
		this.machine_description = machine_description;
		this.company_id = company_id;
	}

	public MachineDummy() {
		super();
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

	public int getCompany_id() {
		return company_id;
	}

	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	
	

}
