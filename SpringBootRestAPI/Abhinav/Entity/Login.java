package com.example.demo.Entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@ManyToOne
	@JoinColumn(name="company_id")
	Company company_id;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role;
	
	@Column
	boolean forgetpass_status;
	
	@Column
	boolean setup_status;

	
	
	public Login() {
		super();
	}



	public Login(int login_id, String username, String password, Company company_id, Role role,
			boolean forgetpass_status, boolean setup_status) {
		super();
		this.login_id = login_id;
		this.username = username;
		this.password = password;
		this.company_id = company_id;
		this.role = role;
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



	public Company getCompany_id() {
		return company_id;
	}



	public void setCompany_id(Company company_id) {
		this.company_id = company_id;
	}



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
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
