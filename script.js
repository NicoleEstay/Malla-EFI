const cursos = {
  "1° año - 1er semestre": {
    "Habilidades comunicativas": [],
    "Anatomía para el movimiento humano": [],
    "Expresión corporal y creatividad": [],
    "Fundamento sociológicos de la educación": [],
    "Política educativa": [],
    "Fundamento de educación física y el juego": []
  },
  "1° año - 2do semestre": {
    "Vida activa y saludable": [],
    "Análisis del movimiento humano": ["Anatomía para el movimiento humano"],
    "Desarrollo aprendizaje motor": [],
    "Metodología del atletismo": [],
    "Currículum": ["Fundamento sociológicos de la educación", "Política educativa"],
    "Práctica de intervención I": ["Fundamento sociológicos de la educación", "Política educativa"],
    "Psicología del aprendizaje": []
  },
  "2° año - 1er semestre": {
    "Electivo formación integral": [],
    "Estrategías metodológicas y evaluativas I": ["Currículum"],
    "Sistemas energéticos y control motor": ["Desarrollo aprendizaje motor"],
    "Metodología balón mano": ["Currículum"],
    "Metodología natación": ["Currículum"],
    "Investigación educativa": ["Práctica de intervención I"]
  },
  "2° año - 2do semestre": {
    "Práctica de intervención II": ["Estrategías metodológicas y evaluativas I", "Práctica de intervención I"],
    "Educación para la democracia": [],
    "Estrategías metodológicas y evaluativas II": ["Estrategías metodológicas y evaluativas I"],
    "Gimnasia artística": ["Estrategías metodológicas y evaluativas I"],
    "Fisiología de la actividad física": ["Sistemas energéticos y control motor"],
    "Metodología del baloncesto": ["Estrategías metodológicas y evaluativas I"]
  },
  "3° año - 1er semestre": {
    "Integración curricular de TIC": [],
    "Taller de orientación": ["Currículum"],
    "Estrategías metodológicas y evaluativas III": ["Estrategías metodológicas y evaluativas II"],
    "Evaluación de desarrollo de competencias hito I": ["Estrategías metodológicas y evaluativas II"],
    "Metodología del hockey": ["Estrategías metodológicas y evaluativas II"],
    "Actividades físico recreativas": ["Currículum", "Vida activa y saludable"],
    "Educación postural y antropometría": ["Análisis del movimiento humano"]
  },
  "3° año - 2do semestre": {
    "Práctica de intervención III": ["Estrategías metodológicas y evaluativas III", "Evaluación de desarrollo de competencias hito I"],
    "Actividades en el medio acuático": ["Estrategías metodológicas y evaluativas III", "Metodología natación"],
    "Deportes de raqueta": ["Estrategías metodológicas y evaluativas III"],
    "Danzas tradicionales y latinoamericanas": ["Estrategías metodológicas y evaluativas III"],
    "Implementación de estrat. Didácticas y eval. I": ["Estrategías metodológicas y evaluativas III", "Evaluación de desarrollo de competencias hito I"]
  },
  "4° año - 1er semestre": {
    "Implementación de estrat. Didácticas y eval. II": ["Implementación de estrat. Didácticas y eval. I"],
    "Inclusión y diversidd de eduación física": ["Implementación de estrat. Didácticas y eval. I"],
    "Proyectos deportivos, educativos y sociales": ["Práctica de intervención II"],
    "Metodología del voleibol": ["Implementación de estrat. Didácticas y eval. I"],
    "Teoría, planificación y eval. Del entrenamiento": ["Análisis del movimiento humano", "Fisiología de la actividad física"],
    "Electivo formación integral": []
  },
  "4° año - 2do semestre": {
    "Práctica de intervención IV": ["Práctica de intervención III", "Inclusión y diversidd de eduación física", "Implementación de estrat. Didácticas y eval. II"],
    "Implementación de estrat. Didácticas y eval. III": ["Implementación de estrat. Didácticas y eval. II", "Inclusión y diversidd de eduación física", "Práctica de intervención III"],
    "Metodología del futbol": ["Implementación de estrat. Didácticas y eval. II"],
    "Gestión de la actividad física y el deporte": ["Proyectos deportivos, educativos y sociales"]
  },
  "5° año - 1er semestre": {
    "Seminarios de profundización I": [],
    "Seminarios de profundización II": [],
    "Evaluación de desarrollo de competencias Hito II": ["Evaluación de desarrollo de competencias hito I", "Taller de orientación", "Deportes de raqueta", "Metodología balón mano", "Práctica de intervención III", "Implementación de estrat. Didácticas y eval. I"],
    "Actividades físicas en el medio desertico y costero": ["Evaluación de desarrollo de competencias hito I"],
    "Metodología del rugby": ["Implementación de estrat. Didácticas y eval. III"],
    "Investigación aplicada a la act. Física y el deporte": ["Investigación educativa", "Práctica de intervención IV"],
    "AFI: Primeros auxilios, salvatajes y lesiones deportivos": ["Anatomía para el movimiento humano", "Metodología natación"]
  },
  "5° año - 2do semestre": {
    "Práctica V (Profesional)": ["Seminarios de profundización I", "Seminarios de profundización II", "Práctica de intervención IV", "Tesis de grado"],
    "Tesis de grado": ["Seminarios de profundización I", "Seminarios de profundización II"]
  }
};

const estados = {};

const contenedor = document.getElementById("contenedor");

function crearCurso(nombre, nivel) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.textContent = nombre;
  div.onclick = () => aprobarCurso(nombre, div);
  return div;
}

function estaDesbloqueado(nombre) {
  for (const nivel in cursos) {
    if (cursos[nivel][nombre]) {
      return cursos[nivel][nombre].every(pr => estados[pr]);
    }
  }
  return false;
}

function aprobarCurso(nombre, elemento) {
  estados[nombre] = true;
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
for (const nivel in cursos) {
  const seccion = document.createElement("div");
  seccion.className = "seccion";
  const titulo = document.createElement("h2");
  titulo.textContent = nivel;
  const grid = document.createElement("div");
  grid.className = "grid";

  for (const curso in cursos[nivel]) {
    estados[curso] = false;
    const cursoEl = crearCurso(curso);
    grid.appendChild(cursoEl);
  }

  seccion.appendChild(titulo);
  seccion.appendChild(grid);
  contenedor.appendChild(seccion);
}

actualizarMalla();
