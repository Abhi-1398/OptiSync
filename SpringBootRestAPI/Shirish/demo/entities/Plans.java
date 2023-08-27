package com.example.demo.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name="plans")
public class Plans {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int plan_id;
	@Column
	String plan_name;
	@Column
	int user_no;
	@Column
	int duration;
	@Column
	float price;
	
	public Plans() {
		super();
	}
	
	public Plans(int plan_id, String plan_name, int user_no, int duration, float price) {
		super();
		this.plan_id = plan_id;
		this.plan_name = plan_name;
		this.user_no = user_no;
		this.duration = duration;
		this.price = price;
	}

	
	public Plans(String plan_name, int user_no, int duration, float price) {
		super();
		this.plan_name = plan_name;
		this.user_no = user_no;
		this.duration = duration;
		this.price = price;
	}

	public int getPlan_id() {
		return plan_id;
	}

	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}

	public String getPlan_name() {
		return plan_name;
	}

	public void setPlan_name(String plan_name) {
		this.plan_name = plan_name;
	}

	public int getUser_no() {
		return user_no;
	}

	public void setUser_no(int user_no) {
		this.user_no = user_no;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	

}
