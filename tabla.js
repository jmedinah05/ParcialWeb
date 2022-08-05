let parametros = new URLSearchParams(location.search);
var gusto = parametros.get("gusto");
var telefono = parametros.get("telefono");
var porcentaje = parametros.get("porcentaje");
var nombre = parametros.get("name");
var email = parametros.get("email");

document.getElementById("titulo").innerHTML += " " + nombre;
document.getElementById("email").innerHTML = email;
document.getElementById("tel").innerHTML = telefono;
document.getElementById("gusto").innerHTML = gusto;
document.getElementById("porcentaje").innerHTML = porcentaje;

// document.write(gusto,'<br/>',porcentaje,'<br/>',nombre,'<br/>',email);

console.log(gusto, porcentaje, nombre, email);