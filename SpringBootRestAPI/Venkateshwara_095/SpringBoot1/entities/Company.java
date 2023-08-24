package com.example.demo.entities;

import java.sql.Date;
import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="company")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int company_id;
	@Column
	String company_name;
	@Column
	String person_name;
	@Column
	String contact_no;
	@Column
	String email;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date registration_date;
	
	 @ManyToOne
	 @JoinColumn(name = "plan_id")
	 Plan plans;

	@Column
	boolean payment_status;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date plan_startdate;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date plan_enddate;
	@Column
	boolean admin_approval;
	@Column
	String mode_of_transaction;
	public Company() {
		super();
	}
	public Company(int company_id, String name, String person_name, String contact_no, String email,
			Date registration_date, Plan plans, boolean payment_status, Date plan_startdate,
			Date plan_enddate, boolean admin_approval, String mode_of_transaction) {
		super();
		this.company_id = company_id;
		this.company_name = name;
		this.person_name = person_name;
		this.contact_no = contact_no;
		this.email = email;
		this.registration_date = registration_date;
		this.plans = plans;
		this.payment_status = payment_status;
		this.plan_startdate = plan_startdate;
		this.plan_enddate = plan_enddate;
		this.admin_approval = admin_approval;
		this.mode_of_transaction = mode_of_transaction;
	}
	
	public Company(String name, String person_name, String contact_no, String email, Date registration_date,
			Plan plans, boolean payment_status, Date plan_startdate, Date plan_enddate,
			boolean admin_approval, String mode_of_transaction) {
		super();
		this.company_name = name;
		this.person_name = person_name;
		this.contact_no = contact_no;
		this.email = email;
		this.registration_date = registration_date;
		this.plans = plans;
		this.payment_status = payment_status;
		this.plan_startdate = plan_startdate;
		this.plan_enddate = plan_enddate;
		this.admin_approval = admin_approval;
		this.mode_of_transaction = mode_of_transaction;
	}
	public int getId() {
		return company_id;
	}
	public void setId(int company_id) {
		this.company_id = company_id;
	}
	public String getName() {
		return company_name;
	}
	public void setName(String name) {
		this.company_name = name;
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
	public Date getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}
	public Plan getPlans() {
		return plans;
	}
	public void setPlans(Plan plans) {
		this.plans = plans;
	}
	public boolean isPayment_status() {
		return payment_status;
	}
	public void setPayment_status(boolean payment_status) {
		this.payment_status = payment_status;
	}
	public Date getPlan_startdate() {
		return plan_startdate;
	}
	public void setPlan_startdate(Date plan_startdate) {
		this.plan_startdate = plan_startdate;
	}
	public Date getPlan_enddate() {
		return plan_enddate;
	}
	public void setPlan_enddate(Date plan_enddate) {
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

