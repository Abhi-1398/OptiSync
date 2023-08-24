package com.example.demo.entities;

import java.sql.Timestamp;

public class NewOrder {
		int clientId;
		int companyId;
		int productId;
		int productQty;
		Timestamp startDate;
		Timestamp endDate;
		int dispatchQty;
		
		public NewOrder() {
			super();
		}
		public NewOrder(int clientId, int companyId, int productId, int productQty, Timestamp startDate,
				Timestamp endDate, int dispatchQty) {
			super();
			this.clientId = clientId;
			this.companyId = companyId;
			this.productId = productId;
			this.productQty = productQty;
			this.startDate = startDate;
			this.endDate = endDate;
			this.dispatchQty = dispatchQty;
		}
		public int getClientId() {
			return clientId;
		}
		public void setClientId(int clientId) {
			this.clientId = clientId;
		}
		public int getCompanyId() {
			return companyId;
		}
		public void setCompanyId(int companyId) {
			this.companyId = companyId;
		}
		public int getProductId() {
			return productId;
		}
		public void setProductId(int productId) {
			this.productId = productId;
		}
		public int getProductQty() {
			return productQty;
		}
		public void setProductQty(int productQty) {
			this.productQty = productQty;
		}
		public Timestamp getStartDate() {
			return startDate;
		}
		public void setStartDate(Timestamp startDate) {
			this.startDate = startDate;
		}
		public Timestamp getEndDate() {
			return endDate;
		}
		public void setEndDate(Timestamp endDate) {
			this.endDate = endDate;
		}
		public int getDispatchQty() {
			return dispatchQty;
		}
		public void setDispatchQty(int dispatchQty) {
			this.dispatchQty = dispatchQty;
		}
		@Override
		public String toString() {
			return "NewOrder [clientId=" + clientId + ", companyId=" + companyId + ", productId=" + productId
					+ ", productQty=" + productQty + ", startDate=" + startDate + ", endDate=" + endDate
					+ ", dispatchQty=" + dispatchQty + "]";
		}
		
}