package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="forward")
public class Forward {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int forward_id;
	
	@Column(name="name")
	String forward_name;

	public Forward(int forward_id, String forward_name) {
		super();
		this.forward_id = forward_id;
		this.forward_name = forward_name;
	}

	public Forward(String forward_name) {
		super();
		this.forward_name = forward_name;
	}

	public Forward() {
		super();
	}
	
	public int getForward_id() {
		return forward_id;
	}

	public void setForward_id(int forward_id) {
		this.forward_id = forward_id;
	}

	public String getForward_name() {
		return forward_name;
	}

	public void setForward_name(String forward_name) {
		this.forward_name = forward_name;
	} 
	
	
}
