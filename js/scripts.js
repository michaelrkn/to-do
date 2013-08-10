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


var List = {
  initialize: function() {

    // our `initialize()` method creates an empty array to store our tasks in
    this.tasks = [];
  },

  addTask: function(taskToAdd) {

    // when we add a task, we simply push it onto the array of tasks
    this.tasks.push(taskToAdd);
  }
};



$(function() {
  // create a list to use for the page
  var myList = Object.create(List);
  myList.initialize();

  // select the form with the id `new-task`, and bind an event listener to submit
  // when the form is submitted, the callback (the function that's passed in as an argument to `.submit()`) is run
  $("form#new-task").submit(function() {
    // create a variable called `description`
    // by the way, variables only exist in the function in which they are created
    // they disappear when the function stops running
    // and they can't be accessed by any code outside of the function
    // this is called "variable scope"

    // grab the text the user inputted into the input with the id `description`
    var description = $("input#description").val();

    // create a new task
    var newTask = Object.create(Task);

    // set its description to the user's input
    newTask.setDescription(description);

    // add it to the list object
    myList.addTask(newTask);

    // update the page to include the new task
    // retrieve the task's description property (`newTask.description`) and put it in the list item
    $("ol#tasks").append("<li>" + newTask.description + "</li>");

    // clear out the input field by setting the value to an empty string
    $("input#description").val("");

    // return false so that the form doesn't actually submit
    return false;
  });
});
