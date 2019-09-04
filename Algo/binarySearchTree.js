const text = document.getElementById("text");
text.innerHTML = "From JS with love";

class BinarySearchTree {

  constructor() {
    this.head = null;
  }


  createNode(value = 0, left = null, right = null) {
    return {
      value,
      left,
      right,
    }
  }

  insert(node, value) {
    if (node === null) {
      this.head = this.createNode(value);
      console.log('inserted as head', value);
    } else if (value <= node.value) {
      if (node.left === null) {
        node.left = this.createNode(value);
        console.log(`inserted ${value} to left of ${node.value}`);
      } else {
        this.insert(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = this.createNode(value);
        console.log(`inserted ${value} to right of ${node.value}`);
      } else {
        this.insert(node.right, value);
      }
    }
  }

  printPreOrder(node) {
    if (node !== null) {
      console.log(node.value);
      if (node.left !== null) {
        this.printPreOrder(node.left);
      }
      if (node.right !== null) {
        this.printPreOrder(node.right);
      }
    }
  }

  printInOrder(node) {
    if (node !== null) {
      if (node.left !== null) {
        this.printInOrder(node.left);
      }
      console.log(node.value);
      if (node.right !== null) {
        this.printInOrder(node.right);
      }
    }
  }

  printPostOrder(node) {
    if (node !== null) {
      if (node.left !== null) {
        this.printPostOrder(node.left);
      }
      if (node.right !== null) {
        this.printPostOrder(node.right);
      }
      console.log(node.value);
    }
  }


}

const bst = new BinarySearchTree();
[7,2,9,3,1,8,11].forEach(n => bst.insert(bst.head, n));
console.log('Pre');
bst.printPreOrder(bst.head);
console.log('Post');
bst.printPostOrder(bst.head);
console.log('In');
bst.printInOrder(bst.head);
