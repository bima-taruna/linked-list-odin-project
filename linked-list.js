import Node from "./node.js";

class LinkedList {
  constructor(value) {
    this.nodeHead = {
      value: value,
      next: null,
    };

    this.nodeTail = this.nodeHead;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.nodeHead = newNode;
      this.nodeTail = newNode;
      this.length++;
    } else {
      this.nodeTail.next = newNode;
      this.nodeTail = newNode;
      this.length++;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.nodeHead = newNode;
      this.nodeTail = newNode;
      this.length++;
    } else {
      newNode.next = this.nodeHead;
      this.nodeHead = newNode;
      this.length++;
    }
  }

  size() {
    return this.length;
  }

  head() {
    return this.nodeHead;
  }

  tail() {
    return this.nodeTail;
  }

  toString() {
    const arr = [];
    let currentNode = this.nodeHead;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    if (this.length === 0) {
      return "linked list is empty";
    }
    return arr.map((item) => `( ${item} ) ->`).join(" ") + " null";
  }
}

export default LinkedList;
