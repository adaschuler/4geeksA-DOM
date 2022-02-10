//Your code here

//variables generales
const input = document.querySelector("input");
let icon = document.querySelector("i"); 
let liSelect = document.querySelectorAll("li"); 
let ulSelect = document.querySelector("ul"); 
let li = document.createElement("li");
let t= document.createTextNode("bla");
const newLi="<span><i class='fa fa-trash'></i></span>"+t;

//let texto='blablabla';

//esto de aca no esta funcionando:
let inputValue = document.getElementById("addToDo").value;
console.log(inputValue);


//funcion borrar
icon.addEventListener("click", function deleteTask (e){

console.log (ulSelect.children.length); //comprobar el listado y que ul es el elemento padre


let spanDelete=e.target.parentElement;
let liDelete=spanDelete.parentElement;
console.log(liDelete,spanDelete);
ulSelect.removeChild(liDelete);

});

//funcion añadir
input.addEventListener('keyup', addTask);

function addTask (e) {
 if (e.keyCode === 13) {
  e.preventDefault();
  window.alert("Hello World"); //para comprobar que este funcionando el click
  
  li.appendChild(t);
  ulSelect.appendChild(li);


  document.getElementById("addToDo").value = "";

}
}


//no esta reconociendo el Value ingresado en el input, por ahora deje un texto por defecto para que se agregue
//solo se puede eliminar el primer item del listado





