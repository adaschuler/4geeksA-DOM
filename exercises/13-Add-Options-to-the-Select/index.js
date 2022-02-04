let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

//selecciono el select
const selectionSelect=document.querySelector("#mySelect");

//recorro el array
for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option"); 
		option.text = countries[i];
		selectionSelect.add(option);
		document.querySelector("#mySelect").appendChild(option); 
	}
//añado el evento    
    selectionSelect.addEventListener("change", function() {
		alert(event.target.value);
	});