package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="dispatch_status")
public class DispatchStatus {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		int dispatch_status_id;
		
		@Column
		String status_meaning;

		public DispatchStatus(int dispatch_status_id, String status_meaning) {
			super();
			this.dispatch_status_id = dispatch_status_id;
			this.status_meaning = status_meaning;
		}

		public DispatchStatus(int dispatch_status_id) {
			super();
			this.dispatch_status_id = dispatch_status_id;
		}

		public DispatchStatus(String status_meaning) {
			super();
			this.status_meaning = status_meaning;
		}
		public DispatchStatus() {
			super();
		}

		public int getDispatch_status_id() {
			return dispatch_status_id;
		}

		public void setDispatch_status_id(int dispatch_status_id) {
			this.dispatch_status_id = dispatch_status_id;
		}

		public String getStatus_meaning() {
			return status_meaning;
		}

		public void setStatus_meaning(String status_meaning) {
			this.status_meaning = status_meaning;
		}
		
}
