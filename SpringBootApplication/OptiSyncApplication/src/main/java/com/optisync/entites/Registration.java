package com.optisync.entites;

import java.sql.Timestamp;


public class Registration {


	String name;
    String person_name;
	String contact_no;
    String email;
	Timestamp registration_date;
	int plan_id;
	boolean payment_status;
	Timestamp plan_startdate;
    Timestamp plan_enddate;
	boolean admin_approval;
	String mode_of_transaction;
	
	public Registration() {
		super();
	}
	
	public Registration(String name, String person_name, String contact_no, String email, Timestamp registration_date,
			int plan_id, boolean payment_status, Timestamp plan_startdate, Timestamp plan_enddate,
			boolean admin_approval, String mode_of_transaction) {
		super();
		this.name = name;
		this.person_name = person_name;
		this.contact_no = contact_no;
		this.email = email;
		this.registration_date = registration_date;
		this.plan_id = plan_id;
		this.payment_status = payment_status;
		this.plan_startdate = plan_startdate;
		this.plan_enddate = plan_enddate;
		this.admin_approval = admin_approval;
		this.mode_of_transaction = mode_of_transaction;
	}


    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPerson_name() {
		return person_name;
	}
	public void setPerson_name(String person_name) {
		this.person_name = person_name;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Timestamp getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(Timestamp registration_date) {
		this.registration_date = registration_date;
	}
	public int getPlan_id() {
		return plan_id;
	}
	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}
	public boolean isPayment_status() {
		return payment_status;
	}
	public void setPayment_status(boolean payment_status) {
		this.payment_status = payment_status;
	}
	public Timestamp getPlan_startdate() {
		return plan_startdate;
	}
	public void setPlan_startdate(Timestamp plan_startdate) {
		this.plan_startdate = plan_startdate;
	}
	public Timestamp getPlan_enddate() {
		return plan_enddate;
	}
	public void setPlan_enddate(Timestamp plan_enddate) {
		this.plan_enddate = plan_enddate;
	}
	public boolean isAdmin_approval() {
		return admin_approval;
	}
	public void setAdmin_approval(boolean admin_approval) {
		this.admin_approval = admin_approval;
	}
	public String getMode_of_transaction() {
		return mode_of_transaction;
	}
	public void setMode_of_transaction(String mode_of_transaction) {
		this.mode_of_transaction = mode_of_transaction;
	}
	
	

}
