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
