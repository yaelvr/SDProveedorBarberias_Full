const nf = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   maximumFractionDigits: 0,
   roundingIncrement: 5,
 });
var PrecioTotal=0;
 //-------------------------------------------------
fetch('./carrito-prueba')
.then(res=>res.json())
.then(data =>{
    productos = JSON.parse(JSON.stringify(data.productos));
    for (producto of productos){
//--------------------Incrementamos el precio----------------------------
        PrecioTotal=PrecioTotal+producto.precio;

//-----------------------Producto----------------------------------
        let div_producto=document.createElement("div");
        div_producto.className="Producto";

//------------------------Imagen ----------------------------------
        let img=document.createElement("img");
        img.className="imagenX";
        img.src=producto.image_url;
//-----------------------Producto oprtions-------------------------

        let div_producto_options=document.createElement("div");
        div_producto_options.className="producto-options";
//-----------------------details----------------------------------
        let div_details=document.createElement("div");
        div_details.className="details";
//-----------------------especificaciones-------------------------
        let div_especificaciones=document.createElement("div");
        div_especificaciones.className="especificaciones";
        //titulo
        let label_Product_title=document.createElement("label")
        label_Product_title.id=producto.nombe;
        label_Product_title.className="Product-title";
        label_Product_title.textContent=producto.nombre;
        //descripcion
        let label_descripcion=document.createElement("label");
        label_descripcion.className="descripcion";
        label_descripcion.id="descripcion";
        label_descripcion.textContent=producto.descripcion;
        //Cantidad
        let div_Cantidad=document.createElement("div");
        div_Cantidad.className="Cantidad-div";

        let label_cantidad=document.createElement("label");
        label_cantidad.textContent="Cantidad";

        //Select cantidad
        let select_cantidad=document.createElement("select");
        select_cantidad.className="cantidad";
        for (let i=1;i<11;i++){
            let option=document.createElement("option");
            option.textContent=i;
            select_cantidad.append(option);
        }
//_____________________APPEND A CANTIDAD___________________________
        div_Cantidad.append(label_cantidad);
        div_Cantidad.append(select_cantidad);
//_________________________________________________________________

//___________________APPEND A ESPECIFICACIONES_______________
        div_especificaciones.append(label_Product_title);
        div_especificaciones.append(label_descripcion);
        div_especificaciones.append(div_Cantidad);
//_________________________________________________________________

//------------------------ Prodcut Price------------------------
        let div_product_price=document.createElement("div");
        div_product_price.id="Product-price";

        let label_pp=document.createElement("label");
        label_pp.className="Product-price";
        label_pp.textContent=nf.format(producto.precio);
        div_product_price.append(label_pp);

//__________________________APPEND A DETAILS__________________________
        div_details.append(div_especificaciones);
        div_details.append(div_product_price);
//__________________________________________________________________


//------------------------------acciones------------------------
        let acciones=document.createElement("div");
        acciones.className="acciones";

        //btn favorites
        let button_favorite=document.createElement("button");
        button_favorite.className="accion-icons";
        let span_favorite=document.createElement("span");
        span_favorite.className="material-symbols-outlined icon-btn";
        span_favorite.textContent="favorite";
        button_favorite.append(span_favorite);

        //btn delete
        let button_delete=document.createElement("button");
        button_delete.className="accion-icons";
        let span_delete=document.createElement("span");
        span_delete.className="material-symbols-outlined icon-btn";
        span_delete.textContent="delete";
        button_delete.append(span_delete);

//___________________________APPEND A ACCIONES__________________________
        acciones.append(button_favorite);
        acciones.append(button_delete);
//____________________________________________________________________
//--------------------------------------------------------------------

//__________________APPEND A PRODUCTO OPTIONS__________________________
        div_producto_options.append(div_details);
        div_producto_options.append(acciones);
//______________________________________________________________________

//___________________APPEND A PRODUCTO__________________________________
        div_producto.append(img);
        div_producto.append(div_producto_options);
        document.getElementById("ProductosComprar").appendChild(div_producto);
    }
 })
//__________________SET PRECIO TOTAL_________________________
 .then(()=>{
        let total=document.getElementById("total");
        total.textContent=nf.format(PrecioTotal);

        let subtotal=document.getElementById("sub-price");
        subtotal.textContent=nf.format(PrecioTotal);
 });