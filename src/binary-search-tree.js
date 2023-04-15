const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }


  root() {
    if (!this.rootNode) return null;
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data) 

    function addWithin (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node
      }

      if (data > node.data) {
        node.right = addWithin(node.right, data)
      } else {
        node.left = addWithin(node.left, data)
      }
      return node
    }
  }

  has(data, node = this.rootNode) {
    if (node.data === data) return true;

    if (node.data > data && node.left) {
      return this.has(data, node.left);
    }

    if (node.data < data && node.right) {
      return this.has(data, node.right);
    }
    return false;
  }

  find(data, node = this.rootNode) {
    let res = null
    if (node.data === data) return node;

    if (node.data > data && node.left) {
      res =  this.find(data, node.left);
    }

    if (node.data < data && node.right) {
      res = this.find(data, node.right);
    }
    return res;
  }


  findMinNode(node){
    if(node.left === null)
       return node;
    else
      return this.findMinNode(node.left);
  }

  remove(val) {
    this.rootNode = this.removeNode(this.rootNode, val);

  }


  removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
          node.left = this.removeNode(node.left, data);
          return node;
      }

      else if (data > node.data){
          node.right = this.removeNode(node.right, data);
          return node;
      } else {

        //* удаление ноды без дочерних элементов
        if(!node.left && !node.right) {
            return null;
        }
 

        //* удаление ноды с одним потомком
        if(node.left === null) {
            node = node.right;
            return node;
        }
         
        else if(node.right === null) {
            node = node.left;
            return node;
        }

        //* удаление ноды с двумя потомками
        let aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
  }

  min() {
    let node = this.rootNode;
    let check = true;
    while (check) {
      if (node.left) {
        node = node.left;
      } else {
        check = false;
      }
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    let check = true;
    while (check) {
      if (node.right) {
        node = node.right;
      } else {
        check = false;
      }
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();


// tree.add(9);  //                    9                       
// tree.add(14); //                  /   \
// tree.add(2);  //                 2     14
// tree.add(6); //                /  \      \
// tree.add(128); //             1    6      128
// tree.add(8); //                     \     /
// tree.add(31); //                     8  31
// tree.add(54); //                          \
// tree.add(1); //                           54

// console.log('📢 [binary-search-tree.js:167]', tree.root());
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14)) // false);
// console.log(tree.has(8)) // false);
// console.log(tree.has(9)) // false);
// console.log(tree.has(2)) // true);
// console.log(tree.has(6)) // true);
// console.log(tree.has(128)) // true);
// console.log(tree.has(31)) // true);
// console.log(tree.has(54)) // true);
// console.log(tree.has(1)) // true);

// console.log('📢 [binary-search-tree.js:185]', tree.min());