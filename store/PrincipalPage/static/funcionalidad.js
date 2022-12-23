// ______________________ Desktop ________________________
var Data=[{id: 11, title: 'perfume Oil', price: 13},
{id: 12, title: 'Brown Perfume', price: 40},
{id: 13, title: 'Fog Scent Xpressio Perfume', price: 13},
{id: 14, title: 'Non-Alcoholic Concentrated Perfume Oil', price: 120},
{id: 15, title: 'Eau De Perfume Spray', price: 30},
{id: 16, title: 'Hyaluronic Acid Serum', price: 19},
{id: 17, title: 'Tree Oil 30ml', price: 12},
{id: 18, title: 'Oil Free Moisturizer 100ml', price: 40},
{id: 19, title: 'Skin Beauty Serum.', price: 46},
{id: 20, title: 'Freckle Treatment Cream- 15gm', price: 70}];

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

var original_data
fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
.then(res =>res.json())
.then(data=>{
   original_data = JSON.parse(JSON.stringify(data.products));
   console.log(original_data)
   for(index of original_data){
      let div=document.createElement("div");
      div.className="Pdisplay";

      let img=document.createElement("img");
      img.src="https://http2.mlstatic.com/D_NQ_NP_752567-MLV46793543522_072021-F.jpg";
      img.className="Producto-IMG";

      let label=document.createElement("label");
      label.className="Producto-title";
      label.textContent=index.title;

      let label2=document.createElement("label");
      label2.className="Producto-precio";
      label2.textContent=nf.format(index.price);

      div.append(img);
      div.append(label);
      div.append(label2);
      document.getElementById("Lay-out-Productos").appendChild(div);
      console.log(index.title)
   }
});