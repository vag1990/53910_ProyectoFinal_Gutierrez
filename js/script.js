function calculadoraPrecio() {

    const mesas = [
        {nombre: 'Mesa H50', precio: 120000},
        {nombre: 'Mesa HH', precio: 240000},
        {nombre: 'Mesa Ft', precio: 360000},
        {nombre: 'Mesa Dualbox', precio: 480000},
    ]
    
    mesas.forEach( (datosM)=> {
       console.log(datosM);
    } )
    const blends = [
        {nombre: 'A1', precio: 100000},
        {nombre: 'A2', precio: 200000},
        {nombre: 'A3', precio: 300000},
        {nombre: 'A4', precio: 400000},
    ]
    
    blends.forEach( (datosB)=> {
       console.log(datosB);
    } )
    
    const cuotas = [
        {nombre: '1', precio: 1},
        {nombre: '3', precio: 1.3},
        {nombre: '6', precio: 1.6},
        
    ]
    
    cuotas.forEach( (datosC)=> {
       console.log(datosC);
    } )
    
    
    let opcionMesa = document.getElementById("opcionMesa").value;
    let opcionBlend = document.getElementById("opcionBlend").value;
    let opcionCuota = document.getElementById("cuotas").value;
    console.log("Mesa elegida:" + opcionMesa);
    console.log("Blend elegido:" + opcionBlend);
    console.log("Cuotas:" + opcionCuota);
    
    const precioMesa = mesas.find(mesa => mesa.nombre === opcionMesa)?.precio || 0;
    const precioBlend = blends.find(blend => blend.nombre === opcionBlend)?.precio || 0;
    const precioCuota = cuotas.find(cuota => cuota.nombre === opcionCuota)?.precio || 0;
    
    let sumaTotal = precioMesa + precioBlend;
    sumaTotal = sumaTotal * precioCuota;
    
    
    
    let sorteo = prompt ("INGRESA NRO DE DEL 1 AL 10 Y PARTICIPA POR 50% DESCUENTO")
         if (sorteo == "5"){
             sumaTotal = sumaTotal = sumaTotal - (sumaTotal*0.5) + "  (50% descuento incluido.)";
             alert ("GANASTE UN 50% DE DESCUENTO EN TU COMPRA!!!")
        } else if (sorteo != "5")
         alert ("Mejor suerte la proxima compra!!");
         console.log("Numero de sorteo:" + sorteo);
    
    
    console.log("El precio total de tu mesa personalizada es:", sumaTotal);
    
    
    document.getElementById("resultado").innerText = "El precio total de tu mesa personalizada es: $" + sumaTotal;
    
    
    }