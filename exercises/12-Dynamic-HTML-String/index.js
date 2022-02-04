let myString = "<p>Hello!</p> <strong>My friend</strong>";
document.write(myString);
     
let myString2 = document.createElement("span");
    myString2.innerHTML +=", we are in the year ";
    document.body.appendChild(myString2);    
let fecha = new Date();
let anual = fecha.getFullYear();
console.log(fecha.getFullYear());
myString2.append(anual);