package com.optisync.entites;

public class Forgetpass {
	
	String username1;
	String username2;
	public Forgetpass(String username1, String username2) {
		super();
		this.username1 = username1;
		this.username2 = username2;
	}
	public Forgetpass() {
		super();
	}
	public String getUsername1() {
		return username1;
	}
	public void setUsername1(String username1) {
		this.username1 = username1;
	}
	public String getUsername2() {
		return username2;
	}
	public void setUsername2(String username2) {
		this.username2 = username2;
	}
	
	

}
