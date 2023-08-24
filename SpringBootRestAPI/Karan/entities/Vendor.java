package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="master_vendor")
public class Vendor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int master_vendor_id;
	
	@Column
	String master_vendor_name;
	
	@Column
	String master_vendor_part_name;

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(int master_vendor_id, String master_vendor_name, String master_vendor_part_name) {
		super();
		this.master_vendor_id = master_vendor_id;
		this.master_vendor_name = master_vendor_name;
		this.master_vendor_part_name = master_vendor_part_name;
	}

	public int getMaster_vendor_id() {
		return master_vendor_id;
	}

	public void setMaster_vendor_id(int master_vendor_id) {
		this.master_vendor_id = master_vendor_id;
	}

	public String getMaster_vendor_name() {
		return master_vendor_name;
	}

	public void setMaster_vendor_name(String master_vendor_name) {
		this.master_vendor_name = master_vendor_name;
	}

	public String getMaster_vendor_part_name() {
		return master_vendor_part_name;
	}

	public void setMaster_vendor_part_name(String master_vendor_part_name) {
		this.master_vendor_part_name = master_vendor_part_name;
	}
	
	
	
}
