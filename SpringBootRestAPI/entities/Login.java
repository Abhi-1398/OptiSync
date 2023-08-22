package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int login_id;
	@Column
	String username;
	@Column
	String password;
	@Column
	int company_id;
	@Column
	int role_id;
	@Column
	boolean forgetpass_status;
	@Column
	boolean setup_status;
	public Login() {
		super();
	}
	public Login(String username, String password, int company_id, int role_id, boolean forgetpass_status,
			boolean setup_status) {
		super();
		this.username = username;
		this.password = password;
		this.company_id = company_id;
		this.role_id = role_id;
		this.forgetpass_status = forgetpass_status;
		this.setup_status = setup_status;
	}
	public Login(int login_id, String username, String password, int company_id, int role_id, boolean forgetpass_status,
			boolean setup_status) {
		super();
		this.login_id = login_id;
		this.username = username;
		this.password = password;
		this.company_id = company_id;
		this.role_id = role_id;
		this.forgetpass_status = forgetpass_status;
		this.setup_status = setup_status;
	}
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getCompany_id() {
		return company_id;
	}
	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	public boolean isForgetpass_status() {
		return forgetpass_status;
	}
	public void setForgetpass_status(boolean forgetpass_status) {
		this.forgetpass_status = forgetpass_status;
	}
	public boolean isSetup_status() {
		return setup_status;
	}
	public void setSetup_status(boolean setup_status) {
		this.setup_status = setup_status;
	}
	
}
