// Añade un evento 'click' al botón con id 'startGame'
document.getElementById('startGame').addEventListener('click', () => {
    // Array con las palabras posibles para el juego
    const palabras = ['moises', 'isais', 'salmos',`pedro`,`daniel`];
    // Selecciona una palabra secreta al azar del array de palabras
    let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    // Crea una cadena con guiones bajos para representar la palabra oculta
    let palabraOculta = '_ '.repeat(palabraSecreta.length).trim();
    // Número de intentos permitidos
    let intentos = 6;

    // Función para actualizar y mostrar el estado del juego
    const mostrarEstadoJuego = () => {
        Swal.fire({
            title: 'Adivina la palabra',
            html: `<p>${palabraOculta}</p><p>Intentos restantes: ${intentos}</p>`,
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return '¡Necesitas escribir algo!';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let letra = result.value;
                let acierto = false;

                // Verifica si la letra está en la palabra secreta
                if (palabraSecreta.includes(letra)) {
                    let nuevaPalabraOculta = '';
                    for (let i = 0; i < palabraSecreta.length; i++) {
                        nuevaPalabraOculta += palabraSecreta[i] === letra ? letra + ' ' : palabraOculta[i * 2] + ' ';
                    }
                    palabraOculta = nuevaPalabraOculta.trim();
                    acierto = true;
                } else {
                    intentos--; // Decrementa los intentos si la letra no está en la palabra secreta
                }

                // Verifica si el juego ha terminado
                if (palabraOculta.replace(/ /g, '') === palabraSecreta) {
                    Swal.fire('¡Ganaste!', `La palabra era: ${palabraSecreta}`, 'success');
                } else if (intentos === 0) {
                    Swal.fire('¡Perdiste!', `La palabra era: ${palabraSecreta}`, 'error');
                } else {
                    if (acierto) {
                        Swal.fire('¡Bien hecho!', 'Has adivinado una letra.', 'success').then(mostrarEstadoJuego);
                    } else {
                        Swal.fire('¡Incorrecto!', 'No has adivinado la letra.', 'error').then(mostrarEstadoJuego);
                    }
                }
            }
        });
    };

    // Inicia el juego mostrando el estado inicial
    mostrarEstadoJuego();
});
