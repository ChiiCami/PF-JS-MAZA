const modelos = ["Gilera Smash 110", "Motomel Blitz 110", "Corven Energy 110", "Honda Wave 110", "Yamaha Crypton 110"];
const precios = [1148000, 1334000, 1198000, 1800000, 2198888];

function mostrarModelos() {
    modelos.forEach(function(modelo, index) {
        console.log((index + 1) + ". " + modelo + " - $" + precios[index]);
    });
    console.log((modelos.length + 1) + ". Salir");
}

function seleccionarModelo() {
    const seleccion = parseInt(prompt("Elija el modelo para conocer más detalles: \n 1-Gilera Smash 110 \n 2-Motomel Blitz 110 \n 3-Corven Energy 110 \n 4-Honda Wave 110 \n 5-Yamaha Crypton 110 \n 6-Salir"), 10);
    if (seleccion >= 1 && seleccion <= modelos.length) {
        return seleccion - 1;
    } else if (seleccion === modelos.length + 1) {
        return null;
    } else {
        console.log("Selección no válida. Intente nuevamente.");
        return seleccionarModelo();
    }
}

function seleccionarTipoCotizacion() {
    const tipoCotizacion = prompt("Seleccione el tipo de cotización: \n1. Efectivo \n2. Financiado (12 meses, 30% interés):");
    if (tipoCotizacion === '1' || tipoCotizacion === '2') {
        return tipoCotizacion;
    } else {
        console.log("Selección no válida. Intente nuevamente.");
        return seleccionarTipoCotizacion();
    }
}

function calcularCotizacion() {
    mostrarModelos();
    const modeloIndex = seleccionarModelo();
    if (modeloIndex === null) {
        alert("Ha salido del algoritmo.");
        return;
    }
    const tipoCotizacion = seleccionarTipoCotizacion();
    const precioMoto = precios[modeloIndex];

    let cotizacion;

    if (tipoCotizacion === '1') {
        cotizacion = "El precio en efectivo es $" + parseInt(precioMoto);
    } else if (tipoCotizacion === '2') {
        const interes = 0.30;
        const meses = 12;
        const precioFinanciado = precioMoto * (1 + interes);
        const cuotaMensual = precioFinanciado / meses;
        cotizacion = "El precio financiado es $" + parseInt(precioFinanciado) + ", en 12 cuotas mensuales de $" + parseInt(cuotaMensual);
    }

    alert(cotizacion);
}

calcularCotizacion();
