// Define a class for the Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a class for the Singly Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push: Add an element to the end of the list
  push(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the list is empty, set the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the next property of the current tail to the new node
      // and update the tail to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // Increment the length of the list
    this.length++;
  }

  // pop: Remove an element from the end of the list
  pop() {
    // If the list is empty, return undefined
    if (!this.head) {
      return undefined;
    }

    // Initialize current and previous pointers
    let current = this.head;
    let previous = null;

    // Traverse the list until reaching the last node
    while (current.next) {
      previous = current;
      current = current.next;
    }

    // Update the tail to the previous node
    this.tail = previous;

    // If previous is not null, set its next property to null
    // Otherwise, if the list has only one element, set the head to null
    if (previous) {
      previous.next = null;
    } else {
      this.head = null;
    }

    // Decrement the length of the list
    this.length--;

    // Return the value of the removed node
    return current.value;
  }

  // shift: Remove an element from the beginning of the list
  shift() {
    // If the list is empty, return undefined
    if (!this.head) {
      return undefined;
    }

    // Store the current head
    const currentHead = this.head;

    // Update the head to the next node
    this.head = currentHead.next;

    // Decrement the length of the list
    this.length--;

    // If the list becomes empty after removing the node, set the tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    // Return the value of the removed node
    return currentHead.value;
  }

  // unshift: Add an element to the beginning of the list
  unshift(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the list is empty, set the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the next property of the new node to the current head
      newNode.next = this.head;
      // Update the head to the new node
      this.head = newNode;
    }

    // Increment the length of the list
    this.length++;
  }

  // find: Locate an element in the list
  find(value) {
    // If the list is empty, return null
    if (!this.head) {
      return null;
    }

    // Initialize a current pointer
    let current = this.head;

    // Traverse the list until finding the value or reaching the end
    while (current) {
      // If the current node's value matches the target value, return the node
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    // If the value is not found, return null
    return null;
  }
}
