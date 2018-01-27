function treeBFS(tree) {
  // print out each child on each level, starting with left most child
  // node.getchildren returns array of children, index 0 is left most children
  
  // print out each children in the array in a loop
  
  console.log(tree.root.value);
  var queue = [tree.root];
  
  while (queue.length > 0) {

    var dequeue = queue[0];
    console.log(dequeue.value);
    
    if (dequeue.getchildren()) {
      queue = dequeue.getchildren();
    }
  }
}

//DFS
Tree.prototype.traverse = function (callback) {
  var stack=[this];
  var n;

  while(stack.length>0) {

    n = stack.pop();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = n.children.length-1; i>=0; i--) {
       stack.push(n.children[i]);
    }
  }
};

//BFS
Tree.prototype.traverse = function (callback) {
  var queue=[this];
  var n;

  while(queue.length>0) {

    n = queue.shift();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = 0; i< n.children.length; i++) {
       queue.push(n.children[i]);
    }
  }
};


// find min and max in o(n) time. don't use another data structure or many loops. keep an array of objects with a key value pair keeping track of the 'minsofar'. the top most index of the stack will always have the min value, and if removed, the next index will also have the minsofar 
