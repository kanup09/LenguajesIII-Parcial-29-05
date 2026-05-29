const formulario = document.getElementById('formulario');
const btnPreguntas = document.getElementById('btn-preguntas');

function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    const error = document.getElementById('error-nombre');
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    if (nombre.length >= 3 && soloLetras.test(nombre)) {
        error.innerHTML = "";
        return true;
    } else {
        error.innerHTML = "Nombre inválido: minimo 3 caracteres y solo letras.";
        return false;
    }
}

function validarDni() {
    const dni = document.getElementById('dni').value;
    const error = document.getElementById('error-dni');
    
    if (dni.length === 8 && !isNaN(dni)) {
        error.innerHTML = "";
        return true;
    } else {
        error.innerHTML = "DNI invalido: debe tener 8 números.";
        return false;
    }
}

function validarEdad() {
    const fechaValor = document.getElementById('fechaNac').value;
    const error = document.getElementById('error-fecha');
    
    if (!fechaValor) {
        error.innerHTML = "Seleccione una fecha.";
        return false;
    }
    
    const fechaNac = new Date(fechaValor);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    if (edad >= 18) {
        error.innerHTML = "";
        return true;
    } else {
        error.innerHTML = "Debe ser mayor de 18 años.";
        return false;
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const v1 = validarNombre();
    const v2 = validarDni();
    const v3 = validarEdad();
    const mensajeExito = document.getElementById('mensajeExito');

    if (v1 && v2 && v3) {
        mensajeExito.innerHTML = "Formulario Enviado con exito";
        mensajeExito.style.color = "green";
    } else {
        mensajeExito.innerHTML = "";
    }
});

btnPreguntas.addEventListener('click', () => {
    const preguntas = [
        "¿Cual es tu nacionalidad?",
        "¿Cual es tu nivel de conocimiento en programacion? (Basico / Intermedio / Avanzado)",
        "¿Por que elegiste esta carrera?"
    ];
    let respuestas = [];

    for (let i = 0; i < preguntas.length; i++) {
        let r = prompt(preguntas[i]);
        if (r === null || r.trim() === "") {
            respuestas.push("No respondio");
        } else {
            respuestas.push(r);
        }
    }

    const contenedor = document.getElementById('respuestas-preguntas');
    contenedor.innerHTML = `
        <h3>Respuestas:</h3>
        <p>Pregunta 1: ${respuestas[0]}</p>
        <p>Pregunta 2: ${respuestas[1]}</p>
        <p>Pregunta 3: ${respuestas[2]}</p>
    `;
});