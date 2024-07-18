// Seleccionar el boton por su ID
const alertButton = document.getElementById('alertButton');

// Añadir un event listener al boton para que se ejecute al hacer click
alertButton.addEventListener('click' , () => {
    // Mostrar una alerta con la libreria de SweetAlert2
    Swal.fire({
        title: 'Bienvenidos',
        text: 'Esta es la clase de práctica para el DOM',
        icon: 'success'
    });
});