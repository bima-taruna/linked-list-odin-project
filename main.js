import LinkedList from "./linked-list.js";

const linkedList = new LinkedList();

linkedList.append("dog");
linkedList.prepend("cat");

console.log(linkedList.toString());
