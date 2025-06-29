// Manejar el envío del formulario en consulta.html
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-cita');
    
    if(formulario) { // Solo ejecuta en la página de consulta
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            
            if(nombre && email) {
                alert(`Gracias ${nombre}, hemos recibido tu solicitud.\nTe contactaremos al correo ${email} en menos de 24 horas.`);
                formulario.reset();
                
                // Redirigir después de 3 segundos (opcional)
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 3000);
            } else {
                alert("Por favor complete los campos requeridos (*)");
            }
        });
    }
});