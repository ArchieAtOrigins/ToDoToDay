// Add task
	// When Add button is clicked, make text in input box into a list item in incomplete tasks


// Mark tasks as complete
	// When checkbox is checked move item to completed tasks
// Mark tasks as incomplete
	// When checkbox is unchecked move item to incompleted tasks


var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");
var doneDoin = document.getElementById("doneDoin");
var addButton = document.getElementById("addButton");

var editToDo = function() {
	// Edit ToDo
	// When edit button is clicked, switch to edit mode
}

var deleteToDo = function() {
	// Delete ToDo
	// When delete button is clicked, remove li from uncomplete tasks
}

var doneToDo = function() {
	console.log("doneToDo...");
	// body...
}

var unDoToDo = function() {

}

var newEl = function() {
	
	var newLi = document.createElement("li");
	var newLabel = document.createElement("label"); 
	var newTextBox = document.createElement("input"); //textbox
	var newCheckbox = document.createElement("input"); //checkbox
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	newTextBox.type = "text";
	newCheckbox.type = "checkbox";

	newLi.appendChild(newLabel);
	newLi.appendChild(newTextBox);
	newLi.appendChild(newCheckbox);
	newLi.appendChild(editButton);
	newLi.appendChild(deleteButton);

	todoList.appendChild(newLi);

	console.log(newLi);

	return newLi;
}

addButton.addEventListener('click', newEl);
//editButton.addEventListener('click', editToDo);
//deleteButton.addEventListener('click', deleteToDo);

