// objectives
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    /*
    1. This function should accept a value
    2. create a new node using the value passes to the functio
    3. if there is no head property on the list, set the head and tail to be the newly created node
    otherwise set the next property on the tail to the new node and set the tail property on the list to be the newly created node 
    4. increment the length by one
    */
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
    }
    this.length = this.length + 1;
    return this;
  }
}

var first = new SinglyLinkedList();
first.push("hello");

console.log(first);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var indices = [];
  for (let x = 0; x < nums.length; x++) {
    for (let y = 1; y < nums.length; y++) {
        let c = nums[x] + nums[y]
        ;
        console.log(nums[x], nums[y], c);
      if (c === target && nums[x] !== nums[y]) {
        return [x,y]
      }
      if(indices.length >= 1)  return indices
      
    }
}

  return indices;
};
console.log(twoSum([2, 10, 5, 11], 15));
