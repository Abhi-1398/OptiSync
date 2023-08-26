package com.example.demo.Entity;

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
	
	@Column
	String name;

	public Forward(int forward_id, String name) {
		super();
		this.forward_id = forward_id;
		this.name = name;
	}
	
	

	public Forward(String name) {
		super();
		this.name = name;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
