
/* Presentacion */
alert("Bienvenidos a sorrento lopez");
alert("Haga su pedido")

/* Tipo de entrega */
var pedido;

pedido = prompt("Elija la opcion: 1-Para retirar por el local, 2-Delivery")

if (pedido == 1){
    pedido = "retira por el local"
}else{
    domicilio = prompt("Ingrese su domicilio")
    pedido = "el delivery va hacia su domicilio " + domicilio
}

// VARIABLES DE TIPOS DE PIZZA
let pizza1 = 1200;
let pizza2 = 1000;
let pizza3 = 1400;
let pizza4 =  1450;
let pizza5  = 1650;
let pizza6  = 1500;
let pizza7  = 1300;
let pizza8  = 1200;
let pizza9  = 1800;

var precio;

//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let pizza

    do {
        pizza = parseInt(prompt(`Seleccione la Pizza:
        1 -Margarita ($ 1200) 
        2 -Marinara ($1000)
        3 -Quesos ($1400)
        4 -Jamon ($1450)
        5 -Sorrento ($ 1200)
        6 -Cantimpalo ($1000)
        7 -Cebolla ($1400)
        8 -Veggie  ($1450)
        9 -Hongos  ($1450)`))
    } while (( pizza > 0 && pizza > 9 ) );
    return pizza
}

eleccion = seleccionarpizza()

switch (eleccion) {
    case 1:
        precio = pizza1
        eleccion = "Margarita"
     break;
    case 2:
        precio = pizza2
        eleccion = "Marinara"
    break;
    case 3:
        precio = pizza3
        eleccion = "Quesos"
    break;
     case 4:
        precio =  pizza4
        eleccion = "Jamon"
    break;
    case 5:
        precio = pizza5
        eleccion = "Sorrento"
     break;
    case 6:
        precio =  pizza6
        eleccion = "Cantimpalo"
    break;
    case 7:
        precio =  pizza7
        eleccion = "Cebolla"
    break;
     case 8:
       precio =  pizza8
       eleccion = "Veggie"
    break;
    case 9:
        precio =  pizza9
        eleccion = "Hongos"
    break;
}

alert("Su pedido es una pizza de " + eleccion + " y el precio es $" + precio+ " " + pedido)









