// ============================================================
// Preguntas del Quiz Oceánico - Separadas del HTML
// Se pueden mezclar aleatoriamente con shuffleQuestions()
// ============================================================

// ---- HELPER: Shuffle (Fisher-Yates) ----
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- HELPER: Pick N random items ----
function pickRandom(arr, n) {
  return shuffleArray(arr).slice(0, n);
}

// ===== ALL QUESTIONS =====
const ALL_QUESTIONS = [

  // ---- RONDA: Opción Múltiple ----
  // -- Pacífico --
  {
    round: 1, type: 'multiple', icon: '🌏',
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Ártico'],
    answer: 1,
    explanation: '¡El Pacífico es el rey! Cubre más de 165 millones de km², ¡más que todos los continentes juntos!'
  },
  {
    round: 1, type: 'multiple', icon: '🌏',
    question: '¿Cuántos millones de km² cubre aproximadamente el Océano Pacífico?',
    options: ['100 millones', '125 millones', '165 millones', '200 millones'],
    answer: 2,
    explanation: 'El Océano Pacífico cubre más de 165 millones de km². ¡Es enorme!'
  },
  {
    round: 1, type: 'multiple', icon: '🌏',
    question: '¿Qué océano contiene la Fosa de las Marianas?',
    options: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Antártico'],
    answer: 1,
    explanation: 'La Fosa de las Marianas está en el Pacífico y es el lugar más profundo de la Tierra.'
  },
  {
    round: 1, type: 'multiple', icon: '🌏',
    question: '¿Qué océano tiene miles de islas?',
    options: ['Océano Atlántico', 'Océano Ártico', 'Océano Pacífico', 'Océano Antártico'],
    answer: 2,
    explanation: 'El Pacífico contiene miles de islas, incluyendo Hawái, Fiji y muchas más.'
  },
  {
    round: 1, type: 'multiple', icon: '🌏',
    question: '¿En qué océano se encuentra más de la mitad del agua oceánica del planeta?',
    options: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Antártico'],
    answer: 2,
    explanation: 'El Pacífico es tan enorme que contiene más de la mitad del agua de todos los océanos.'
  },

  // -- Atlántico --
  {
    round: 1, type: 'multiple', icon: '🌎',
    question: '¿Cuál es el segundo océano más grande del mundo?',
    options: ['Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Antártico'],
    answer: 2,
    explanation: 'El Océano Atlántico es el segundo más grande, después del Pacífico.'
  },
  {
    round: 1, type: 'multiple', icon: '🌎',
    question: '¿Qué cadena montañosa submarina se encuentra en el Océano Atlántico?',
    options: ['Cordillera de los Andes', 'Cordillera Mesoatlántica', 'Himalaya', 'Montes Urales'],
    answer: 1,
    explanation: 'La Cordillera Mesoatlántica es una gran cadena montañosa bajo el agua en el Atlántico.'
  },
  {
    round: 1, type: 'multiple', icon: '🌎',
    question: '¿Qué océano fue una ruta fundamental para los grandes exploradores?',
    options: ['Océano Pacífico', 'Océano Ártico', 'Océano Atlántico', 'Océano Índico'],
    answer: 2,
    explanation: 'El Atlántico fue la ruta de exploradores como Cristóbal Colón.'
  },
  {
    round: 1, type: 'multiple', icon: '🌎',
    question: '¿Qué océano separa América de Europa y África?',
    options: ['Océano Pacífico', 'Océano Atlántico', 'Océano Índico', 'Océano Ártico'],
    answer: 1,
    explanation: 'El Océano Atlántico separa América de Europa y África.'
  },

  // -- Índico --
  {
    round: 1, type: 'multiple', icon: '🐠',
    question: '¿Qué océano baña las costas de Asia, África y Australia?',
    options: ['Océano Atlántico', 'Océano Pacífico', 'Océano Antártico', 'Océano Índico'],
    answer: 3,
    explanation: '¡El Océano Índico baña las costas de Asia, África y Australia!'
  },
  {
    round: 1, type: 'multiple', icon: '🐠',
    question: '¿Por qué país recibe su nombre el Océano Índico?',
    options: ['Indonesia', 'India', 'Indochina', 'Irak'],
    answer: 1,
    explanation: 'El Océano Índico recibe su nombre por la India.'
  },
  {
    round: 1, type: 'multiple', icon: '🐠',
    question: '¿Qué océano es el tercero más grande del mundo?',
    options: ['Océano Antártico', 'Océano Ártico', 'Océano Índico', 'Océano Atlántico'],
    answer: 2,
    explanation: 'El Océano Índico es el tercero más grande, después del Pacífico y el Atlántico.'
  },
  {
    round: 1, type: 'multiple', icon: '🐠',
    question: '¿Qué océano tiene las aguas más cálidas?',
    options: ['Océano Ártico', 'Océano Antártico', 'Océano Índico', 'Océano Atlántico'],
    answer: 2,
    explanation: 'El Océano Índico tiene aguas cálidas durante gran parte del año.'
  },

  // -- Ártico --
  {
    round: 1, type: 'multiple', icon: '🧊',
    question: '¿Cuál es el océano más pequeño?',
    options: ['Océano Antártico', 'Océano Índico', 'Océano Ártico', 'Océano Pacífico'],
    answer: 2,
    explanation: 'El Océano Ártico es el más pequeño y está en el Polo Norte.'
  },
  {
    round: 1, type: 'multiple', icon: '🧊',
    question: '¿Qué océano se encuentra alrededor del Polo Norte?',
    options: ['Océano Antártico', 'Océano Ártico', 'Océano Atlántico', 'Océano Pacífico'],
    answer: 1,
    explanation: 'El Océano Ártico rodea el Polo Norte y gran parte del año está congelado.'
  },
  {
    round: 1, type: 'multiple', icon: '🧊',
    question: '¿En qué océano vive el oso polar?',
    options: ['Océano Antártico', 'Océano Pacífico', 'Océano Ártico', 'Océano Índico'],
    answer: 2,
    explanation: 'Los osos polares viven en el Ártico, alrededor del Polo Norte.'
  },
  {
    round: 1, type: 'multiple', icon: '🧊',
    question: '¿En qué océano durante parte del año el sol no se oculta?',
    options: ['Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Ártico'],
    answer: 3,
    explanation: 'En el Ártico ocurre el fenómeno del sol de medianoche.'
  },

  // -- Antártico --
  {
    round: 1, type: 'multiple', icon: '🐧',
    question: '¿Qué océano rodea completamente la Antártida?',
    options: ['Océano Ártico', 'Océano Pacífico', 'Océano Antártico', 'Océano Índico'],
    answer: 2,
    explanation: 'El Océano Antártico rodea completamente la Antártida.'
  },
  {
    round: 1, type: 'multiple', icon: '🐧',
    question: '¿Qué océano es uno de los más fríos y sus corrientes regulan el clima mundial?',
    options: ['Océano Ártico', 'Océano Pacífico', 'Océano Antártico', 'Océano Índico'],
    answer: 2,
    explanation: 'El Océano Antártico es muy frío y sus corrientes ayudan a regular el clima del mundo.'
  },
  {
    round: 1, type: 'multiple', icon: '🐧',
    question: '¿Qué océano también se conoce como Océano Austral?',
    options: ['Océano Ártico', 'Océano Antártico', 'Océano Atlántico', 'Océano Índico'],
    answer: 1,
    explanation: 'El Océano Antártico también es llamado Océano Austral.'
  },
  {
    round: 1, type: 'multiple', icon: '🐧',
    question: '¿Dónde viven los pingüinos?',
    options: ['En el Océano Ártico', 'En el Océano Antártico', 'En el Océano Índico', 'En todos los océanos'],
    answer: 1,
    explanation: 'Los pingüinos viven principalmente en el Océano Antártico y sus costas.'
  },

  // ---- RONDA 2: Verdadero o Falso ----
  {
    round: 2, type: 'truefalse', icon: '🧊',
    question: 'El Océano Antártico rodea completamente la Antártida.',
    answer: true,
    explanation: '¡Verdadero! El Océano Antártico rodea toda la Antártida.'
  },
  {
    round: 2, type: 'truefalse', icon: '🐧',
    question: 'El Océano Ártico se encuentra alrededor del Polo Sur.',
    answer: false,
    explanation: '¡Falso! El Ártico está en el Polo Norte. El del Polo Sur es el Antártico.'
  },
  {
    round: 2, type: 'truefalse', icon: '🌊',
    question: 'Más de la mitad del agua oceánica del planeta está en el Océano Pacífico.',
    answer: true,
    explanation: '¡Sí! El Pacífico contiene más de la mitad del agua de todos los océanos.'
  },
  {
    round: 2, type: 'truefalse', icon: '🚢',
    question: 'La Cordillera Mesoatlántica se encuentra en el Océano Índico.',
    answer: false,
    explanation: '¡No! La Cordillera Mesoatlántica está en el Océano Atlántico.'
  },
  {
    round: 2, type: 'truefalse', icon: '🏔️',
    question: 'La Fosa de las Marianas es el lugar más profundo de la Tierra.',
    answer: true,
    explanation: '¡Verdadero! Está en el Pacífico y es más profunda que lo alto del Everest.'
  },
  {
    round: 2, type: 'truefalse', icon: '🧊',
    question: 'El Océano Ártico es el más grande de todos los océanos.',
    answer: false,
    explanation: '¡Falso! El Ártico es el más pequeño. El más grande es el Pacífico.'
  },
  {
    round: 2, type: 'truefalse', icon: '🐻‍❄️',
    question: 'Los osos polares viven en el Océano Antártico.',
    answer: false,
    explanation: '¡No! Los osos polares viven en el Ártico (Polo Norte), no en la Antártida.'
  },
  {
    round: 2, type: 'truefalse', icon: '🌊',
    question: 'El Océano Índico recibe su nombre por la India.',
    answer: true,
    explanation: '¡Correcto! El Océano Índico se llama así por la India.'
  },
  {
    round: 2, type: 'truefalse', icon: '🌊',
    question: 'El Océano Atlántico es el segundo océano más grande.',
    answer: true,
    explanation: '¡Sí! Después del Pacífico, el Atlántico es el más grande.'
  },
  {
    round: 2, type: 'truefalse', icon: '🧊',
    question: 'En el Ártico, durante parte del año, el sol no se oculta.',
    answer: true,
    explanation: '¡Verdadero! Es el fenómeno del sol de medianoche.'
  },
  {
    round: 2, type: 'truefalse', icon: '🌏',
    question: 'El Océano Pacífico cubre aproximadamente 100 millones de km².',
    answer: false,
    explanation: '¡Falso! Cubre más de 165 millones de km².'
  },
  {
    round: 2, type: 'truefalse', icon: '🚢',
    question: 'El Océano Atlántico fue una ruta importante para los exploradores.',
    answer: true,
    explanation: '¡Sí! Exploradores como Colón cruzaron el Atlántico para descubrir nuevos mundos.'
  },
  {
    round: 2, type: 'truefalse', icon: '🐧',
    question: 'Los pingüinos viven en el Océano Ártico.',
    answer: false,
    explanation: '¡No! Los pingüinos viven en el Antártico, no en el Ártico.'
  },
  {
    round: 2, type: 'truefalse', icon: '🧊',
    question: 'El Océano Ártico es el quinto océano más grande (el más pequeño).',
    answer: true,
    explanation: '¡Correcto! El ranking es: 1° Pacífico, 2° Atlántico, 3° Índico, 4° Antártico, 5° Ártico.'
  },

  // ---- RONDA 3: Slider ----
  {
    round: 3, type: 'slider', icon: '📏',
    question: '¿Cuántos millones de km² cubre el Océano Pacífico? ¡Desliza hasta el número!',
    sliderMin: 0, sliderMax: 200, sliderStep: 1, sliderAnswer: 165,
    sliderUnit: 'millones de km²',
    sliderEmojis: ['🐟','🐠','🐡','🐙','🦈'],
    sliderTolerance: 10,
    explanation: 'El Pacífico cubre más de 165 millones de km². ¡Es gigantesco!'
  },
  {
    round: 3, type: 'slider', icon: '🧊',
    question: '¿Qué lugar ocupa el Océano Ártico entre los 5 océanos?\n(1 = más grande, 5 = más pequeño)',
    sliderMin: 1, sliderMax: 5, sliderStep: 1, sliderAnswer: 5,
    sliderUnit: 'lugar',
    sliderEmojis: ['🥇','🥈','🥉','4️⃣','5️⃣'],
    sliderTolerance: 0,
    explanation: 'El Ártico es el 5°, el más pequeño. 1° Pacífico, 2° Atlántico, 3° Índico, 4° Antártico, 5° Ártico.'
  },
  {
    round: 3, type: 'slider', icon: '🌎',
    question: '¿Qué lugar ocupa el Océano Atlántico entre los 5 océanos?\n(1 = más grande, 5 = más pequeño)',
    sliderMin: 1, sliderMax: 5, sliderStep: 1, sliderAnswer: 2,
    sliderUnit: 'lugar',
    sliderEmojis: ['🥇','🥈','🥉','4️⃣','5️⃣'],
    sliderTolerance: 0,
    explanation: 'El Atlántico es el segundo océano más grande. ¡Solo el Pacífico es más grande!'
  },
  {
    round: 3, type: 'slider', icon: '🐠',
    question: '¿Qué lugar ocupa el Océano Índico entre los 5 océanos?\n(1 = más grande, 5 = más pequeño)',
    sliderMin: 1, sliderMax: 5, sliderStep: 1, sliderAnswer: 3,
    sliderUnit: 'lugar',
    sliderEmojis: ['🥇','🥈','🥉','4️⃣','5️⃣'],
    sliderTolerance: 0,
    explanation: 'El Índico es el tercero. Después del Pacífico y el Atlántico.'
  },
  {
    round: 3, type: 'slider', icon: '🧊',
    question: '¿Cuántos millones de km² cubre aproximadamente el Océano Atlántico?',
    sliderMin: 50, sliderMax: 200, sliderStep: 1, sliderAnswer: 106,
    sliderUnit: 'millones de km²',
    sliderEmojis: ['🐟','🐠','🐡','🐙','🦈'],
    sliderTolerance: 15,
    explanation: 'El Océano Atlántico cubre aproximadamente 106 millones de km².'
  },

  // ---- RONDA 4: ¿Qué océano soy? (Adivina) ----
  {
    round: 4, type: 'multiple', icon: '🐻‍❄️',
    question: 'Soy el océano más frío y pequeño. Estoy en el Polo Norte y gran parte de mi superficie está congelada. ¿Quién soy?',
    options: ['Océano Antártico', 'Océano Ártico', 'Océano Atlántico', 'Océano Pacífico'],
    answer: 1,
    explanation: '¡Soy el Océano Ártico! Allí viven osos polares, focas y morsas.'
  },
  {
    round: 4, type: 'multiple', icon: '🐧',
    question: 'Rodeo completamente la Antártida y soy uno de los océanos más fríos. Mis corrientes ayudan a regular el clima del mundo. ¿Quién soy?',
    options: ['Océano Ártico', 'Océano Pacífico', 'Océano Antártico', 'Océano Índico'],
    answer: 2,
    explanation: '¡Soy el Océano Antártico! En mí viven pingüinos, ballenas y focas.'
  },
  {
    round: 4, type: 'multiple', icon: '🦈',
    question: 'Soy el segundo océano más grande. Los exploradores me usaron para descubrir nuevos mundos. ¿Quién soy?',
    options: ['Océano Pacífico', 'Océano Ártico', 'Océano Índico', 'Océano Atlántico'],
    answer: 3,
    explanation: '¡Soy el Océano Atlántico! Fui la ruta de grandes exploradores como Colón.'
  },
  {
    round: 4, type: 'multiple', icon: '🐠',
    question: 'Tengo las aguas más cálidas y me llaman como un país de Asia. Baño las costas de África, Asia y Australia. ¿Quién soy?',
    options: ['Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Antártico'],
    answer: 1,
    explanation: '¡Soy el Océano Índico! Recibo mi nombre por la India.'
  },
  {
    round: 4, type: 'multiple', icon: '🌊',
    question: 'Soy el más grande de todos. Contengo la Fosa de las Marianas y miles de islas. ¿Quién soy?',
    options: ['Océano Índico', 'Océano Atlántico', 'Océano Pacífico', 'Océano Antártico'],
    answer: 2,
    explanation: '¡Soy el Océano Pacífico! El más grande y profundo de todos.'
  },
  {
    round: 4, type: 'multiple', icon: '🧊',
    question: 'Soy el cuarto océano más grande. Rodeo un continente helado y mis aguas ayudan a regular la temperatura del planeta. ¿Quién soy?',
    options: ['Océano Pacífico', 'Océano Ártico', 'Océano Atlántico', 'Océano Antártico'],
    answer: 3,
    explanation: '¡Soy el Océano Antártico! También me llaman Océano Austral.'
  },

  // ---- RONDA: Colorea / Marca ----
  {
    round: 1, type: 'multiple', icon: '🌊',
    question: '¿Qué océano baña las costas de América del Norte, Europa y África?',
    options: ['Océano Pacífico', 'Océano Atlántico', 'Océano Índico', 'Océano Ártico'],
    answer: 1,
    explanation: 'El Océano Atlántico baña las costas de América del Norte, Europa y África.'
  },
  {
    round: 1, type: 'multiple', icon: '🌊',
    question: '¿Qué océano baña las costas de América del Norte, Asia y Oceanía?',
    options: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
    answer: 2,
    explanation: 'El Océano Pacífico baña las costas de América, Asia y Oceanía.'
  },
  {
    round: 1, type: 'multiple', icon: '🧊',
    question: '¿Qué océano baña las costas de Rusia, Canadá y Groenlandia?',
    options: ['Océano Antártico', 'Océano Pacífico', 'Océano Atlántico', 'Océano Ártico'],
    answer: 3,
    explanation: 'El Océano Ártico baña las costas del norte de Rusia, Canadá y Groenlandia.'
  },
  {
    round: 1, type: 'multiple', icon: '🐧',
    question: '¿Qué animal vive en el Océano Antártico?',
    options: ['Oso Polar', 'Morsa', 'Pingüino', 'Reno'],
    answer: 2,
    explanation: 'Los pingüinos viven en el Océano Antártico, alrededor de la Antártida.'
  },
  {
    round: 1, type: 'multiple', icon: '🐻‍❄️',
    question: '¿Qué animal vive en el Océano Ártico?',
    options: ['Pingüino', 'Oso Polar', 'Albatros', 'Coral'],
    answer: 1,
    explanation: 'Los osos polares viven en el Océano Ártico, en el Polo Norte.'
  },
  {
    round: 1, type: 'multiple', icon: '🦈',
    question: '¿Qué océano tiene la Cordillera Mesoatlántica?',
    options: ['Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Ártico'],
    answer: 2,
    explanation: 'La Cordillera Mesoatlántica está en el Océano Atlántico.'
  },
  {
    round: 1, type: 'multiple', icon: '🐠',
    question: '¿Qué océano tiene aguas cálidas ideales para arrecifes de coral?',
    options: ['Océano Ártico', 'Océano Antártico', 'Océano Atlántico', 'Océano Índico'],
    answer: 3,
    explanation: 'El Océano Índico tiene aguas cálidas perfectas para los corales.'
  },
  {
    round: 1, type: 'multiple', icon: '🌊',
    question: '¿Cuál es el orden correcto de mayor a menor de los 5 océanos?',
    options: [
      'Pacífico, Atlántico, Índico, Antártico, Ártico',
      'Pacífico, Índico, Atlántico, Ártico, Antártico',
      'Atlántico, Pacífico, Índico, Antártico, Ártico',
      'Pacífico, Atlántico, Antártico, Índico, Ártico'
    ],
    answer: 0,
    explanation: 'El orden es: 1° Pacífico, 2° Atlántico, 3° Índico, 4° Antártico, 5° Ártico.'
  }
];

// ===== MATCHING QUESTION (siempre incluida al final) =====
const MATCHING_QUESTION = {
  round: 5, type: 'matching', icon: '🐾',
  question: 'Relaciona cada animal con el océano donde vive:',
  pairs: [
    { animal: '🐧 Pingüino', ocean: 'Antártico' },
    { animal: '🐻‍❄️ Oso Polar', ocean: 'Ártico' },
    { animal: '🐠 Pez Tropical', ocean: 'Índico' },
    { animal: '🐋 Ballena', ocean: 'Pacífico' },
    { animal: '🦈 Tiburón', ocean: 'Atlántico' }
  ],
  answer: ['Antártico', 'Ártico', 'Índico', 'Pacífico', 'Atlántico'],
  options: ['Antártico', 'Ártico', 'Índico', 'Pacífico', 'Atlántico'],
  explanation: 'Cada océano tiene animales especiales adaptados a vivir allí. ¿Sabías que las ballenas viajan por todos los océanos?'
};

// ===== CONFIG =====
const QUIZ_CONFIG = {
  // Cuántas preguntas tomar de ALL_QUESTIONS (sin contar matching)
  // -1 significa usar todas
  questionsPerGame: 15,

  // Si las preguntas deben salir en orden aleatorio
  shuffleQuestions: true,

  // Cuántas preguntas de opción múltiple incluir
  // (se mezclan tipos dentro del límite total)
  preferMoreTypes: true
};

// ===== SELECTOR DE PREGUNTAS =====
function buildQuizQuestions() {
  let pool = [...ALL_QUESTIONS];
  let count = QUIZ_CONFIG.questionsPerGame > 0
    ? Math.min(QUIZ_CONFIG.questionsPerGame, pool.length)
    : pool.length;

  if (QUIZ_CONFIG.shuffleQuestions) {
    pool = shuffleArray(pool);
  }

  let selected = pool.slice(0, count);

  // Ordenar por round para mantener variedad
  selected.sort((a, b) => a.round - b.round);

  return selected;
}
