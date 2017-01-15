// Add task
	// When Add button is clicked, make text in input box into a list item in incomplete tasks


// Mark tasks as complete
	// When checkbox is checked move item to completed tasks
// Mark tasks as incomplete
	// When checkbox is unchecked move item to incompleted tasks


var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");
var addButton = document.getElementById("addButton");
var editButton;
var deleteButton;
var todoList = document.getElementById("todoList");
var doneDoin = document.getElementById("doneDoin");

var newEl = function(todoInput) {
	var newLi = document.createElement("li");
	var newLabel = document.createElement("label"); 
	var newTextBox = document.createElement("input"); //textbox
	var newCheckbox = document.createElement("input"); //checkbox
	var newButton = document.createElement("button");
}

addButton.addEventListener('click', createToDo);
editButton.addEventListener('click', editToDo);
deleteButton.addEventListener('click', deleteToDo);

var createToDo = function() {
	todoList.appendChild(newLi);
	todoList.appendChild(newLabel);
	todoList.appendChild(newTextBox);
	todoList.appendChild(newCheckbox);
	todoList.appendChild(newButton);
	todoList.appendChild(newButton);

	// ??  taskList.label = taskList.value;

}

var editToDo = function() {
	// Edit ToDo
	// When edit button is clicked, switch to edit mode
}

var deleteToDo = function() {
	// Delete ToDo
	// When delete button is clicked, remove li from uncomplete tasks
}

var doneToDo = function() {
	// body...
}

var unDoToDo = function() {

}