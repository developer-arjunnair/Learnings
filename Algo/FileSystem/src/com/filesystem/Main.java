package com.filesystem;

import java.util.List;

public class Main {

  public static void main(String[] args) {
    // write your code here
    FileSystem fs = new FileSystem();
    fs.mkdir("/a/b/c/d");
    fs.mkdir("/a/b/c/e");
    fs.mkdir("/a/b/c/f");
    fs.mkdir("/aa");
    fs.mkdir("/ab");
    fs.addContentToFile("/a/b/c/d/e", "hello");
    fs.printSubDirectoryAndFileNames(fs.getRoot());
    List<String> res = fs.getContentsOfFolder("/a/b/c");
    System.out.println("Folder details" + res);
    res = fs.getContentsOfFolder("/");
    System.out.println("Folder details" + res);

    System.out.println("Contents of the file - " + fs.readContentsOfFile("/a/b/c/d/e"));
  }

}
