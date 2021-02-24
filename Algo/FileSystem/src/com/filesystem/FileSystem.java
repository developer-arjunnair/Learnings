package com.filesystem;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author anair@wayfair.com
 */
public class FileSystem {
  private Directory root;

  public FileSystem() {
    root = new Directory("root", null);
  }

  public Directory getRoot() {
    return root;
  }

  private static String[] destructurePath(String path) {
    if (path == null || path.length() == 0 || !path.startsWith("/")) {
      System.err.println("Invalid path");
      return new String[0];
    }

    return path.equals("/") ? new String[0]: path.substring(1).split("/");
  }

  public void mkdir(String path) {
    String[] pathArr = destructurePath(path);
    if (path.length() > 0) {
      Directory pointer = root;
      for (String value : pathArr) {
        pointer = pointer.addDirectory(new Directory(value, pointer));
      }
    }
  }

  public void printSubDirectoryAndFileNames(Directory d) {
    if (d == null) {
      return;
    }
    if (d.parent == null) {
      System.out.println("*** ROOT Directory - " + d.name);
    } else {
      System.out.println("*** Directory - " + d.name + " is child of " + d.parent.name);
    }

    System.out.println("** Files ** total files in the folder - " + d.files.size());
    for (File f : d.files.values()) {
      System.out.println("Parent - " + d.name + " File name " + f.name + " contents " + f.text);
    }

    for (Directory t : d.directories.values()) {
      printSubDirectoryAndFileNames(t);
    }
  }

  public void addContentToFile(String path, String text) {
    String[] pathArr = destructurePath(path);
    if (path.length() > 0) {
      int i = 0;
      Directory pointer = root;
      for (; i < pathArr.length - 1; i++) {
        pointer = pointer.addDirectory(new Directory(pathArr[i], pointer));
      }
      pointer.addFile(new File(pathArr[i], text, pointer));
    }
  }

  public String readContentsOfFile(String path) {
    String[] pathArr = destructurePath(path);
    if (pathArr.length <= 0) {
      return "";
    }
    int i = 0;
    Directory pointer = root;
    for (; i < pathArr.length - 1; i++) {
      if (pointer.directories.containsKey(pathArr[i])) {
        pointer = pointer.directories.get(pathArr[i]);
      } else {
        System.err.println("Path does not exist - read contents of file");
        return "";
      }
    }
    return pointer.files.containsKey(pathArr[i]) ?  pointer.files.get(pathArr[i]).text : "";
  }

  public List<String>  getContentsOfFolder(String path) {
    String[] pathArr = destructurePath(path);
    Directory pointer  =  root;
    int i = 0;
    for (; i < pathArr.length ; i++) {
      if (pointer.directories.containsKey(pathArr[i])) {
        pointer = pointer.directories.get(pathArr[i]);
      } else {
        System.err.println("Path does not exist - get contents of folder");
        return new ArrayList<>();
      }
    }

    List<String> result  = pointer.directories.values().stream().map(d -> d.name).collect(Collectors.toList());
    result.addAll(pointer.files.values().stream().map(f -> f.name).collect(Collectors.toList()));
    result.sort(Comparator.naturalOrder());
    return result;
  }

}
