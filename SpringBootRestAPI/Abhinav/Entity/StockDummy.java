package com.example.demo.Entity;

import java.sql.Date;

public class StockDummy {

	Date stock_date;
	
	int raw_material_id;
	
	int raw_material_qty;
	
	int final_raw_material_qty;
	
	int part_id;
	
	int part_qty;
	
	int final_part_qty;
	
	int company_id;

	
	
	public StockDummy() {
		super();
	}



	public StockDummy(Date stock_date, int raw_material_id, int raw_material_qty, int final_raw_material_qty,
			int part_id, int part_qty, int final_part_qty, int company_id) {
		super();
		this.stock_date = stock_date;
		this.raw_material_id = raw_material_id;
		this.raw_material_qty = raw_material_qty;
		this.final_raw_material_qty = final_raw_material_qty;
		this.part_id = part_id;
		this.part_qty = part_qty;
		this.final_part_qty = final_part_qty;
		this.company_id = company_id;
	}



	public Date getStock_date() {
		return stock_date;
	}



	public void setStock_date(Date stock_date) {
		this.stock_date = stock_date;
	}



	public int getRaw_material_id() {
		return raw_material_id;
	}



	public void setRaw_material_id(int raw_material_id) {
		this.raw_material_id = raw_material_id;
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



	public int getPart_id() {
		return part_id;
	}



	public void setPart_id(int part_id) {
		this.part_id = part_id;
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



	public int getCompany_id() {
		return company_id;
	}



	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	
	
	
}
