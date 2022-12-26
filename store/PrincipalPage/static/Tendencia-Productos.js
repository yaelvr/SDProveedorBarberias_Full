async function Most-Relevant-Products (){
    let respuesta= await fetch('./most-relevant')
    let productos = respuesta.json()
    console.log(productos)
}