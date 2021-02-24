package com.filesystem;

/**
 * @author anair@wayfair.com
 */
public class File extends Container {
  public String text;
  public Directory parent;

  public File(String name, String text, Directory parent) {
    this.parent = parent;
    this.text = text;
    this.name = name;
  }
}
