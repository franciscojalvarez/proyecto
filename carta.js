
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

const productos = [ 
    {id:1 , nombre:"Margarita" ,precio: 1200}, 
    {id:2 , nombre:"Marinara" ,precio: 1000},
    {id:3 , nombre:"Quesos" ,precio: 1400}, 
    {id:4 , nombre:"Jamon" ,precio: 1450}, 
    {id:5 , nombre:"Sorrento" ,precio: 1650}, 
    {id:6 , nombre:"Cantimpalo" ,precio: 1500}, 
    {id:7 , nombre:"Cebolla" ,precio: 1300}, 
    {id:8 , nombre:"Veggie" ,precio: 1200}, 
    {id:9 , nombre:"Hongos" ,precio: 1800} 
]

let pedidox = [];

//FUNCION DE ORDEN SUPERIOR PARA RECORRER EL ARRAY DE OBJETOS

let todosLosProductos = productos.map(
    (productos) => productos.id + " " + productos.nombre +" $"+productos.precio+ "\n" );


//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let seleccion; 
    do{
    (seleccion = prompt(todosLosProductos.join("-")))
    
    
    finalizar = prompt("¿Quiere finalizar su pedido? SI/NO")
    finalizar = finalizar.toUpperCase();
} while (( finalizar != "SI") );

return seleccion}

seleccion = seleccionarpizza()




switch(seleccion){  //Tomamos el valor seleccionado por el usuario
    
    case '1':
        pedidox += 'Margarita: 1200' + '\n';
        break; 
    case '2':
        pedidox += 'Marinara: 1000' + '\n';
        break;
    case '3':
        pedidox += 'Quesos: 1400' + '\n';
         break;
    case '4':
        pedidox += 'Jamón: 1450' + '\n';
        break;
    case '5':
        pedidox += 'Sorrento: 1650' + '\n';
        break;
    case '6':
        pedidox += 'Cantimpalo: 1500' + '\n';
        break;
    case '7':
        pedidox += 'Cebolla: 1300' + '\n';
        break;
    case '8':
        pedidox += 'Veggie: 1200' + '\n';
        break;}

/* alert("Su pedido es una pizza de " + pedidox /* + pizza + " y el precio es $" + total+ " " + pedido */ 


let resultado = productos
        .filter(productos => pedidox.includes(productos.nombre))
        .reduce((acum,productos) => acum + productos.precio,0);

alert(`Cantidad de productos pedidos: ${pedidox.length}
Productos: ${pedidox}
Total: ${resultado}`);






