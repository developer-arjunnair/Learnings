package com.filesystem;

import java.util.Date;

/**
 * @author anair@wayfair.com
 */
public abstract class Container {
  private Date createdOn;
  private Date updatedOn;
  public String name;

  public Date getCreatedOn() {
    return createdOn;
  }

  public void setCreatedOn(Date createdOn) {
    this.createdOn = createdOn;
  }

  public Date getUpdatedOn() {
    return updatedOn;
  }

  public void setUpdatedOn(Date updatedOn) {
    this.updatedOn = updatedOn;
  }
}
