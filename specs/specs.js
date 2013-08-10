// we identify the model we're about to test using describe
describe("Task", function() {
  // we then give a general description of some functionality the object should have
  it("has a description", function() {
    // the test itself is an example of how that functionality should work

    // we create an object using the Task prototype
    // we could name the variable anything we want, but here i've called it `testTask`
    var testTask = Object.create(Task);

    // we call the `setDescription` method on the `task` object, and pass the argument `"learn oo"`
    testTask.setDescription("learn oo");

    // now, we say that, as a result of calling `setDescription("learn oo") above, the `description` property of `task` should return "learn oo"
    // this is called an "assertion" - our test asserts that the code should behave in some way
    testTask.description.should.equal("learn oo");
  });
});

describe("List", function() {
  it("starts out with no tasks", function() {
    var testList = Object.create(List);

    // the initialize() method will set up our empty task list
    testList.initialize();

    // we use eql() to compare arrays and objects
    testList.tasks.should.eql([]);
  });

  it("adds tasks", function() {
    var testList = Object.create(List);
    testList.initialize();

    var testTask = Object.create(Task);

    testList.addTask(testTask);
    testList.tasks.should.eql([testTask]);
  });
});
