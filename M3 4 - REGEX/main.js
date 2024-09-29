function validarTelefono() {
    
    let telefono = document.getElementById('telefono').value;

    let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    
    if (regex.test(telefono)) {
        document.getElementById('resultado').textContent = "OK";
    } else {
        document.getElementById('resultado').textContent = "No OK";
    }
}