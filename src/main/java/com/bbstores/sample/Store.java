package com.bbstores.sample;

import java.util.List;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;

	  private String type;
	  private String name;
	  private String address;
	  private String address2;
	  private String city;
	  private String state;
	  private String zip;
	  private LocationType location;
	  private String hours;
	  
	  @Convert(converter = StringListConverter.class)
	  private List<String> services;
	  
	  public String getType() {
		return type;
	  }

	  public void setType(String type) {
		this.type = type;
	  }

	  public String getName() {
		return name;
	  }

	  public void setName(String name) {
		  this.name = name;
	  }

	  public String getAddress() {
		  return address;
	  }

	  public void setAddress(String address) {
		  this.address = address;
	  }

	  public String getAddress2() {
		  return address2;
	  }

	  public void setAddress2(String address2) {
		  this.address2 = address2;
	  }

	  public String getCity() {
		  return city;
	  }

	  public void setCity(String city) {
		  this.city = city;
	  }

	  public String getState() {
		  return state;
	  }

	  public void setState(String state) {
		  this.state = state;
	  }

	  public String getZip() {
		  return zip;
	  }

	  public void setZip(String zip) {
		  this.zip = zip;
	  }
	  
	  public LocationType getLocation() {
		  return location;
	  }
	  
	  public void setLocation(LocationType location) {
		  this.location = location;
	  }
	  
	  public String getHours() {
		  return hours;
	  }

	  public void setHours(String hours) {
		  this.hours = hours;
	  }

	  public List<String> getServices() {
		  return services;
	  }

	  public void setServices(List<String> services) {
		  this.services = services;
	  }

	
}
