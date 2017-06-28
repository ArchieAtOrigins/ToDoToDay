let addButton = document.getElementById("addButton");
let addItem = document.getElementById('addItem');
// let newItem = addItem.value;
// let secA = document.getElementById('sectionA');
let list = document.querySelector('.list');
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
for (let i=0; i<liChildren.length; i++) {
	createButtonSet(liChildren[i]);
}
//* Add listener to add button, create new item and add to list
addButton.addEventListener('click',() => {
	let tdList = document.getElementById('tdList');
	let li = document.createElement('li');
	li.textContent = addItem.value;
	tdList.appendChild(li);
	createButtonSet(li);
	addItem.value = '';
}
);
