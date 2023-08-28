package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="client")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int client_id;
	@Column
	String client_name;
	public Client() {
		super();
	}
	public Client(int client_id, String client_name) {
		super();
		this.client_id = client_id;
		this.client_name = client_name;
	}
	public int getClient_id() {
		return client_id;
	}
	public void setClient_id(int client_id) {
		this.client_id = client_id;
	}
	public String getClient_name() {
		return client_name;
	}
	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}
	
	
	
}
