let addButton = document.getElementById("addButton");
let addItem = document.getElementById('addItem');
let list = document.getElementById('tdList');
let liChildren = list.children;

//* Create remove, up, down and edit buttons
function createButtonSet(li) {
	let upButton = document.createElement('button');
	upButton.className = 'upBtn';
	upButton.textContent = 'Up';
	li.appendChild(upButton);

	let downButton = document.createElement('button');
	downButton.className = 'downBtn';
	downButton.textContent = 'Down';
	li.appendChild(downButton);

	let editButton = document.createElement('button');
	editButton.className = 'editBtn';
	editButton.textContent = 'Edit';
	li.appendChild(editButton);

	let removeButton = document.createElement('button');
	removeButton.className = 'removeBtn';
	removeButton.textContent = 'Remove';
	li.appendChild(removeButton);
}

//* Iterate over li's and append buttons
for (let i=0; i<liChildren.length; i++) createButtonSet(liChildren[i]);
//* Add listener to add button, create new item and add to list
addButton.addEventListener('click',() => {
	if (addItem.value == "") return;
	localStorage.todoLength = parseInt(localStorage.todoLength) + 1 || 1;
	localStorage['todo' + localStorage.todoLength] = addItem.value;
	let tdList = document.getElementById('tdList');
	let li = document.createElement('li');
	let label = document.createElement('label');
	label.textContent = addItem.value;
	label.setAttribute('contenteditable', 'true');
	li.appendChild(label);
	tdList.appendChild(li);
	createButtonSet(li);
	addItem.value = '';
});

document.getElementById("addItem").addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode == 13 || e.which == 13) document.getElementById("addButton").click();
});

window.addEventListener('load', function(){
	for (i = 0; i < localStorage.todoLength; i++) {
		let tdList = document.getElementById('tdList');
		let li = document.createElement('li');
		let label = document.createElement('label');
		label.textContent = localStorage['todo' + (i+1)];
		label.setAttribute('contenteditable', 'true');
		li.appendChild(label);
		tdList.appendChild(li);
		createButtonSet(li);
	}
});
