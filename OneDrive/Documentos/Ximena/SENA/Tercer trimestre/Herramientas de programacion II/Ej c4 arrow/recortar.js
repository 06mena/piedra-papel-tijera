const recortarPalabra = (cantidadLetras,palabras) =>{
    let recorte = palabras.map(palabras =>{
        return palabras.slince(0,cantidadLetras)
    })
    console.log(recorte)
}
recortarPalabra(12,["hola","adios","carlos"])