package com.example.demo.Entity;

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
@Table(name="stock")
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int stock_entry_no;
	
	@Column
	Date stock_date;
	
	@ManyToOne
	@JoinColumn(name="raw_material_id")
	RawMaterial rawMaterial;
	
	@Column
	int raw_material_qty;
	
	@Column
	int final_raw_material_qty;
	
	@ManyToOne
	@JoinColumn(name="part_id")
	Part part;
	
	@Column
	int part_qty;
	
	@Column
	int final_part_qty;
	
	@ManyToOne
	@JoinColumn(name="company_id")
	Company company;
	
	

	public Stock() {
		super();
	}

	public Stock(int stock_entry_no, Date stock_date, RawMaterial rawMaterial, int raw_material_qty,
			int final_raw_material_qty, Part part, int part_qty, int final_part_qty, Company company) {
		super();
		this.stock_entry_no = stock_entry_no;
		this.stock_date = stock_date;
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.final_raw_material_qty = final_raw_material_qty;
		this.part = part;
		this.part_qty = part_qty;
		this.final_part_qty = final_part_qty;
		this.company = company;
	}

	public Stock(Date stock_date, RawMaterial rawMaterial, int raw_material_qty, int final_raw_material_qty, Part part,
			int part_qty, int final_part_qty, Company company) {
		super();
		this.stock_date = stock_date;
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.final_raw_material_qty = final_raw_material_qty;
		this.part = part;
		this.part_qty = part_qty;
		this.final_part_qty = final_part_qty;
		this.company = company;
	}

	
	
	public Stock(RawMaterial rawMaterial, int raw_material_qty, Company company,Date stock_date) {
		super();
		this.rawMaterial = rawMaterial;
		this.raw_material_qty = raw_material_qty;
		this.company = company;
		this.stock_date=stock_date;
	}
	
	

	

	public Stock(Part part, int part_qty, Company company,Date stock_date) {
		super();
		this.part = part;
		this.part_qty = part_qty;
		this.company = company;
		this.stock_date=stock_date;
	}

	public int getStock_entry_no() {
		return stock_entry_no;
	}

	public void setStock_entry_no(int stock_entry_no) {
		this.stock_entry_no = stock_entry_no;
	}

	public Date getStock_date() {
		return stock_date;
	}

	public void setStock_date(Date stock_date) {
		this.stock_date = stock_date;
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

	public int getFinal_raw_material_qty() {
		return final_raw_material_qty;
	}

	public void setFinal_raw_material_qty(int final_raw_material_qty) {
		this.final_raw_material_qty = final_raw_material_qty;
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

	public int getFinal_part_qty() {
		return final_part_qty;
	}

	public void setFinal_part_qty(int final_part_qty) {
		this.final_part_qty = final_part_qty;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	
	
	
	
}
