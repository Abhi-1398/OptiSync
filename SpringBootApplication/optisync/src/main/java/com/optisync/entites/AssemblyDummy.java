package com.optisync.entites;

import java.sql.*;

public class AssemblyDummy {
	Timestamp dateId;
	int orderId;
	int parttId;
	public AssemblyDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AssemblyDummy(Timestamp dateId, int orderId, int parttId) {
		super();
		this.dateId = dateId;
		this.orderId = orderId;
		this.parttId = parttId;
	}
	public Timestamp getDateId() {
		return dateId;
	}
	public void setDateId(Timestamp dateId) {
		this.dateId = dateId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getParttId() {
		return parttId;
	}
	public void setParttId(int parttId) {
		this.parttId = parttId;
	}	
	
}
