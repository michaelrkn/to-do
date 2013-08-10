// we create a variable called Task that is set equal to an object
// we call this object a "model", since it models some piece of the world we're creating in our code
var Task = {
  // `setDescription` is a method on Task
  // a method is a property whose value is a function
  // `setDescription` accepts an argument and assigns it to the parameter `newDescription`
  // the parameter becomes available in the function as a variable
  setDescription: function(newDescription) {

    // `this` refers to the object that we're currently inside of
    // so, if we have an object like `myTask = Object.create(Task)`, then `this` would refer to `myTask`
    // `this.description` refers to the property `description` in the object we're currently inside of
    this.description = newDescription;
  }
};
