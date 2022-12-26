// ______________________ Desktop ________________________
var lupa=document.getElementById("Lupa-Desktop");
var carrito=document.getElementById("Carrito");
var favoritos=document.getElementById("Favoritos-Desktop");
var cancelar=document.getElementById("Boton-Cancelar");
var contBusqueda=document.getElementById("Contenedor-Busqueda");
var listProductos=document.getElementById("Lista-Productos");
var inputBusqueda=document.getElementById("Input-Busqueda");
var Menu=document.getElementById("Menu-Desktop");

// ______________________ Mobile _________________________
var mobCancelar=document.getElementById("BTN-Cerrar");

lupa.addEventListener("click",function(){
   carrito.classList.add("ClaseNone");
   favoritos.classList.add("ClaseNone");
   listProductos.classList.add("ClaseNone");
   Menu.classList.add("ClaseNone");
   cancelar.classList.add("Boton-Cancelar-show");
   contBusqueda.classList.add("Busqueda-Abierta");
   inputBusqueda.classList.add("Input-Expandido");
});

inputBusqueda.addEventListener("click",function(){
   carrito.classList.add("ClaseNone");
   favoritos.classList.add("ClaseNone");
   listProductos.classList.add("ClaseNone");
   cancelar.classList.add("Boton-Cancelar-show");
   contBusqueda.classList.add("Busqueda-Abierta");
   inputBusqueda.classList.add("Input-Expandido");
   Menu.classList.add("ClaseNone");
});

cancelar.addEventListener("click",function(){
   carrito.classList.remove("ClaseNone");
   favoritos.classList.remove("ClaseNone");
   listProductos.classList.remove("ClaseNone");
   cancelar.classList.remove("Boton-Cancelar-show");
   contBusqueda.classList.remove("Busqueda-Abierta");
   inputBusqueda.classList.remove("Input-Expandido");
   Menu.classList.remove("ClaseNone");
});

mobCancelar.addEventListener("click",function(){
   document.getElementById("Mobile-Menu-Slide").classList.remove("Mobile-Menu-Open");
});

Menu.addEventListener("click",function(){
   document.getElementById("Mobile-Menu-Slide").classList.add("Mobile-Menu-Open");
});
