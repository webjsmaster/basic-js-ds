const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.queue = {};
    this.key = 0;
    this.head = 0;
  }

  getUnderlyingList(key = this.head) {
    if (key === this.key) {
      return null
    }

    return {
      value: this.queue[key],
      next: this.getUnderlyingList(key + 1)
    };
  }


  enqueue(el) {
    this.queue[this.key++] = el;
  }

  dequeue() {
    if (this.key === this.head) return undefined;

    let first = this.queue[this.head];

    delete this.queue[this.head++];
    return first;
  }
}

module.exports = {
  Queue
};


// const queue = new Queue();
// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(3); // adds the element to the queue
// queue.dequeue(); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }

