let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
let ul = document.getElementById("myList");
let liNew = document.createElement("li");


liNew.appendChild(document.createTextNode("Forth element"));
ul.appendChild(liNew);

//document.getElementById('myList').innerHTML += "<li>Forth element</li>";

});

