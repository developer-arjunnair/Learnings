package com.filesystem;

import java.util.HashMap;

/**
 * @author anair@wayfair.com
 */
public class Directory extends Container {
  HashMap<String, Directory> directories;
  HashMap<String, File> files;
  public Directory parent;

  public Directory(String name,Directory parent) {
    this.name = name;
    this.parent = parent;
    directories = new HashMap<>();
    files = new HashMap<>();
  }

  public Directory addDirectory(Directory d) {
    if(!directories.containsKey(d.name)) {
      directories.put(d.name, d);
    }
    return directories.get(d.name);
  }

  public Directory addFile(File f) {
    if(!files.containsKey(f.name)) {
      files.put(f.name, f);
    }
    return this;
  }

}
