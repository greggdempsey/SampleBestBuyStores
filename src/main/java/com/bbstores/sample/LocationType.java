package com.bbstores.sample;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LocationType {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;

	  private float lat;
	  private float lon;
	  
	  public float getLat() {
		  return lat;
	  }
	  
	  public void setLat(float lat) {
		  this.lat = lat;
	  }
	  
	  public float getLon() {
		  return lon;
	  }
	  
	  public void setLon(float lon) {
		  this.lon = lon;
	  }

}
