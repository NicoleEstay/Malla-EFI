const cursos = {
  "Habilidades comunicativas": [],
  "Anatomía para el movimiento humano": [],
  "Expresión corporal y creatividad": [],
  "Política educativa ; y fundamento sociológico de la eduación": [],
  "Fundamento de educación física y el juego": [],
  "Vida activa y saludable": [],
  "Análisis del movimiento humano": ["Anatomía para el movimiento humano"],
  "Desarrollo aprendizaje motor": [],
  "Metodología del atletismo": [],
  "Currículum": ["Política educativa ; y fundamento sociológico de la eduación"],
  "Práctica de intervención I": ["Política educativa ; y fundamento sociológico de la eduación", "Estrategias metodológicas y evaluativas I"],
  "Psicología del aprendizaje": [],
  "Electiva formación integral": [],
  "Estrategias metodológicas y evaluativas I": ["Currículum"],
  "Sistemas energéticos y evaluativas I": ["Desarrollo aprendizaje motor"],
  "Metodología balonmano": ["Currículum"],
  "Metodología natación": ["Currículum"],
  "Actividades en el medio acuático": ["Metodología natación"],
  "Investigación educativa": ["Práctica de intervención I"],
  "Estrategias metodológicas y evaluativas II": ["Estrategias metodológicas y evaluativas I"],
  "Gimnasia artística": ["Estrategias metodológicas y evaluativas I"],
  "Metodología del baloncesto": ["Estrategias metodológicas y evaluativas I"],
  "Práctica de intervención II": ["Práctica de intervención I"],
  "Proyectos deportivos, educación y sociales": ["Práctica de intervención II"],
  "Educación para la democracia": [],
  "Fisiología de la actividad física": [],
  "Metodología del hockey": ["Estrategias metodológicas y evaluativas II"],
  "Estrategias metodológicas y evaluativas III": ["Estrategias metodológicas y evaluativas II"],
  "Evaluación de desarrollo de competencias hito I": ["Estrategias metodológicas y evaluativas II"]
};

const estados = {}; // guarda estado de cada ramo

const contenedor = document.getElementById("malla");

function crearCurso(nombre) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.textContent = nombre;
  div.onclick = () => aprobarCurso(nombre, div);
  return div;
}

function estaDesbloqueado(nombre) {
  const prereqs = cursos[nombre];
  return prereqs.every(pr => estados[pr]);
}

function aprobarCurso(nombre, elemento) {
  estados[nombre] = true;
  elemento.classList.remove("bloqueado");
  elemento.classList.add("aprobado");
  actualizarMalla();
}

function actualizarMalla() {
  document.querySelectorAll(".curso").forEach(curso => {
    const nombre = curso.textContent;
    if (estados[nombre]) {
      curso.className = "curso aprobado";
    } else if (estaDesbloqueado(nombre)) {
      curso.className = "curso";
    } else {
      curso.className = "curso bloqueado";
    }
  });
}

// Render inicial
for (const nombre in cursos) {
  estados[nombre] = false;
  const cursoEl = crearCurso(nombre);
  contenedor.appendChild(cursoEl);
}
actualizarMalla();
