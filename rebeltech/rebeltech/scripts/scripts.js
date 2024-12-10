

document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector('form');
    
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let valid = true;
        
       
        if (name.value.trim() === "") {
            valid = false;
            alert("El campo Nombre es obligatorio.");
            name.focus(); 
        }
        
        
        if (email.value.trim() === "") {
            valid = false;
            alert("El campo Correo Electrónico es obligatorio.");
            email.focus(); 
        } else if (!validateEmail(email.value)) {
            valid = false;
            alert("Por favor, ingrese un correo electrónico válido.");
            email.focus(); 
        }
        
        if (message.value.trim() === "") {
            valid = false;
            alert("El campo Mensaje es obligatorio.");
            message.focus(); 
        }
        
        
        if (valid) {
            form.submit();  
        }
    });

    
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});
