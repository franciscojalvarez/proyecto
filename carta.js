
/* Presentacion */
alert("Bienvenidos a sorrento lopez");
alert("Haga su pedido")

/* Tipo de entrega */
var pedido;

function tipoDePedido (){
pedido = prompt("Elija la opcion: 1-Para retirar por el local, 2-Delivery")

if (pedido == 1){
    pedido = "retira por el local"
}else{
    domicilio = prompt("Ingrese su domicilio")
    pedido = "el delivery va hacia su domicilio " + domicilio
}
}

tipoDePedido();

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

function inicial (){
let todosLosProductos = productos.map(
    (productos) => productos.id + " " + productos.nombre +" $"+productos.precio+ "\n" );
    
    
}

inicial();
seleccionarpizza();
//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let seleccion; 
    do{
    
        (seleccion = prompt(parseInt(todosLosProductos.join("-"))));
    
    
    finalizar = prompt("¿Quiere finalizar su pedido? SI/NO")
    
    if (finalizar === 'NO'){
        calcularTotal()
    }

    finalizar = finalizar.toUpperCase();
} while (( finalizar != "SI") );

agregarAlCarrito(seleccion);
}

seleccion = seleccionarpizza()

agregarAlCarrito(seleccion);

function agregarAlCarrito(seleccion){
const productoElegido = productos.find (p => p.id === seleccion);

if (productoElegido ===undefined){
    seleccionarpizza()
}

const productoAlCarrito = {
    id : productoElegido.id,
    nombre : productoElegido.nombre,
    precio : productoElegido.precio,
}

pedidox.push(productoAlCarrito);

const existe = productos.some (p => onabort.id === productoAlCarrito.id);

if (existe) {
    const indice = pedidox.findIndex(p => p.id ===productoAlCarrito.id);
    pedidox[indice].cantidad++;
    pedidox[indice].precio = productoAlCarrito.precio * pedidox[indice].cantidad;
}else{
    pedidox.push(productoAlCarrito);
}
}

function calcularTotal(){
    let resultado = productos
    
    const total = pedidox.reduce ((acc, el) => acc+=el.precio, 0)
    
    alert(total)

}







