let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let parrafo = document.createElement("div");
parrafo.innerHTML="Hello World";
document.body.appendChild(parrafo);

parrafo.style.background = "yellow";
});

