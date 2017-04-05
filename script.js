//* 

let addButton = document.getElementById("addButton");
let addItem = document.getElementById('addItem');
let newItem = addItem.value;

//* Add listener to add button, create new item and add to list
addButton.addEventListener('click',() => {
	let tdList = document.getElementById('tdList');
	let li = document.createElement('li');
	li.textContent = addItem.value;
	tdList.appendChild(li);
});

