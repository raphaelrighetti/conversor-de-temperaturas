function converteF() {
    var valor = parseFloat(document.getElementById("cValor").value);
    var valorConvertido = (valor * 9/5) + 32;
    var elementoConvertido = document.getElementById("convertido");
    var Convertido = valor + "&deg; Celsius equivalem a " + valorConvertido + "&deg; Fahrenheit.";
    elementoConvertido.innerHTML = Convertido;
}
function converteK() {
    var valor = parseFloat(document.getElementById("cValor").value);
    var valorConvertido = valor + 273.15;
    var elementoConvertido = document.getElementById("convertido");
    var Convertido = valor + "&deg; Celsius equivalem a " + valorConvertido + " Kelvin";
    elementoConvertido.innerHTML = Convertido;
}