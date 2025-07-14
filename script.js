// Lista de ramos y sus prerrequisitos simplificados desde tu PDF
const ramos = [
    { nombre: "Habilidades comunicativas", requisitos: [] },
    { nombre: "Anatomía para el movimiento humano", requisitos: [] },
    { nombre: "Expresión corporal y creatividad", requisitos: [] },
    { nombre: "Fundamento sociológicos de la educación", requisitos: [] },
    { nombre: "Política educativa", requisitos: [] },
    { nombre: "Fundamento de educación física y el juego", requisitos: [] },

    { nombre: "Vida activa y saludable", requisitos: [] },
    { nombre: "Análisis del movimiento humano", requisitos: ["Anatomía para el movimiento humano"] },
    { nombre: "Desarrollo aprendizaje motor", requisitos: [] },
    { nombre: "Metodología del atletismo", requisitos: [] },
    { nombre: "Currículum", requisitos: ["Fundamento sociológicos de la educación", "Política educativa"] },
    { nombre: "Práctica de intervención I", requisitos: ["Fundamento sociológicos de la educación", "Política educativa"] },
    { nombre: "Psicología del aprendizaje", requisitos: [] },

    // Agrega el resto de los ramos siguiendo el mismo formato...
];

let aprobados = [];

const contenedor = document.getElementById("malla");

function crearBotones() {
    contenedor.innerHTML = "";
    ramos.forEach(ramo => {
        const btn = document.createElement("div");
        btn.classList.add("ramo");

        if (!requisitosCumplidos(ramo)) {
            btn.classList.add("bloqueado");
        } else if (aprobados.includes(ramo.nombre)) {
            btn.classList.add("aprobado");
        }

        btn.innerText = ramo.nombre;

        btn.addEventListener("click", () => {
            if (!btn.classList.contains("bloqueado")) {
                if (aprobados.includes(ramo.nombre)) {
                    aprobados = aprobados.filter(nombre => nombre !== ramo.nombre);
                } else {
                    aprobados.push(ramo.nombre);
                }
                crearBotones();
            }
        });

        contenedor.appendChild(btn);
    });
}

function requisitosCumplidos(ramo) {
    return ramo.requisitos.every(req => aprobados.includes(req));
}

crearBotones();
