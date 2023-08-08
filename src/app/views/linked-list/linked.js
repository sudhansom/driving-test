 class LinkedList {
  constructor(){
    this.head = null;
  }
  addStart(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  addEnd(value){
    const node = new Node(value);
    curr = this.head;
    if(curr == null){
      this.head = node;
      return;
    }
    while(curr.next !== null){
      curr = curr.next;
    }
    curr.next = node;
  }
}

export const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
console.log(list);

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
