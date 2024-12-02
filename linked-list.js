class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = null;
    this.length = 1;
  }

  append(value) {}

  size() {
    return this.length;
  }

  head() {
    return this.head.value;
  }

  tail() {
    return this.tail.value;
  }

  toString() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    if (arr.length === 0 || arr[0] === undefined) {
      return "linked list is empty";
    }
    return arr.map((item) => `( ${item} ) ->`).join(" ") + " null";
  }
}

export default LinkedList;
