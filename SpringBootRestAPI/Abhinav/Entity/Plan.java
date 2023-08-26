package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="plans")
public class Plan {

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

	public Plan(int plan_id, String plan_name, int user_no, int duration, float price) {
		super();
		this.plan_id = plan_id;
		this.plan_name = plan_name;
		this.user_no = user_no;
		this.duration = duration;
		this.price = price;
	}

	public Plan(String plan_name, int user_no, int duration, float price) {
		super();
		this.plan_name = plan_name;
		this.user_no = user_no;
		this.duration = duration;
		this.price = price;
	}

	public Plan() {
		super();
	}

	public int getId() {
		return plan_id;
	}

	public void setId(int plan_id) {
		this.plan_id = plan_id;
	}

	public String getName() {
		return plan_name;
	}

	public void setName(String plan_name) {
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
