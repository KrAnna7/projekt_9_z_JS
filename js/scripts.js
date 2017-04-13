// plik scripts.js
var buttons = document.getElementsByClassName('button');

console.log(buttons);
	
var n = buttons.length;

for (var i = 0; i < n; i++) {
	var content = buttons[i].innerText;
	console.log(content);
	alert(content);
}
