// Parte 4 y Desafíate 
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
 
    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
 
    if (usuario === "" || contraseña === "") {
 
        alert("Por favor, complete ambos campos.");
    } else {
 
        alert("Inicio de sesión exitoso.");
        
 
        localStorage.setItem("usuario", usuario);
 
        window.location.href = "index.html";
    }
 });
 
 // Para verificar si la sesión está activa al cargar la página
 
 if (!localStorage.getItem("sesionIniciada")) {
 
     window.location.href = "login.html";
 }
 
 // Alertas para el login
 function showAlertSuccess() {
 
     document.getElementById("alert-success").classList.add("show");
 }
 
 function showAlertError() {
     document.getElementById("alert-danger").classList.add("show");
 }
 