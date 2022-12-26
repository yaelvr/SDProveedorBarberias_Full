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

const nf = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   maximumFractionDigits: 0,
   roundingIncrement: 5,
 });

//-------------------------------FETCH PRODUCTOS RELEVANTES----------------------------
fetch('./most-relevant')
.then(res=>res.json())
.then(data =>{
    original_data = JSON.parse(JSON.stringify(data.productos));
    console.log(original_data);
    for(index of original_data){
      let url=document.createElement("a")
      url.href="./prodcut-detail/"+index.id+"";
      console.log(index.id)
      let div=document.createElement("div");
      div.className="Pdisplay"
      div.id="Pdisplay"
      div.setAttribute("onclick", "");

      let img=document.createElement("img");
      img.src=index.image_url;
      img.className="Producto-IMG";

      let label=document.createElement("label");
      label.className="Producto-title";
      label.textContent=index.nombre;

      let label2=document.createElement("label");
      label2.className="Producto-precio";
      label2.textContent=nf.format(index.precio);

      div.append(img);
      div.append(label);
      div.append(label2);
      url.append(div);
      document.getElementById("Lay-out-Productos").appendChild(url);
      //console.log(index.title)
   }
});
