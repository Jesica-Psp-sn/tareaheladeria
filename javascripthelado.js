alert("te damos la bienvenida!");
alert("que disfrutes tu helado");


let topping = prompt("ingresa tu topping ");

let preciotopping;
let preciohelado = 500;
let montofinal;

if(topping =="oreo"){
    preciotopping = 10;
    console.log("topping es de oreo")
}else if (topping == "kitkat"){
    preciotopping = 15;
    console.log("topping es de kitkat")
}else if (topping == "kinder"){
    preciotopping = 25; 
    console.log("topping es de kinder")
} else{
    preciotopping = 0;
    console.log("no tenemos ese topping")

}
montofinal = preciohelado + preciotopping;
console.log("el helado cuesta $" + montofinal)