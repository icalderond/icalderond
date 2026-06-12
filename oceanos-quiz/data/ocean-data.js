// ============================================================
// Datos extraídos de las hojas del libro "Los 5 Océanos"
// Fuente: fotos-libro/ (IMG_5927 - IMG_5931)
// ============================================================
const OCEAN_DATA = {
  pacifico: {
    id: "pacifico",
    nombre: "Pacífico",
    emoji: "🌊",
    color: "#1565c0",
    ranking: 1,
    tamano: "más grande del mundo",
    superficie: "165 millones de km²",
    datosImportantes: [
      "Es el océano más grande del mundo.",
      "Cubre más de 165 millones de km².",
      "Contiene miles de islas.",
      "Alberga la Fosa de las Marianas, el punto más profundo de la Tierra."
    ],
    sabiasQue: "Más de la mitad del agua oceánica del planeta se encuentra en el Océano Pacífico.",
    animales: ["Ballena", "Delfín", "Tortuga Marina", "Tiburón"],
    continentes: ["Asia", "América del Norte", "Oceanía", "América del Sur", "Antártida"],
    curiosidad: "Es tan grande que podrías meter todos los continentes dentro de él."
  },
  atlantico: {
    id: "atlantico",
    nombre: "Atlántico",
    emoji: "🌎",
    color: "#1e88e5",
    ranking: 2,
    tamano: "segundo más grande",
    superficie: "106 millones de km²",
    datosImportantes: [
      "Es el segundo océano más grande.",
      "Une numerosos países mediante rutas marítimas.",
      "Alberga una gran diversidad de vida marina.",
      "Contiene la Cordillera Mesoatlántica."
    ],
    sabiasQue: "Fue una ruta fundamental para los grandes exploradores como Cristóbal Colón.",
    animales: ["Tiburón", "Ballena", "Banco de Peces", "Delfín"],
    continentes: ["América del Norte", "Europa", "África", "América del Sur"],
    curiosidad: "Su nombre viene del Atlas, un titán de la mitología griega."
  },
  indico: {
    id: "indico",
    nombre: "Índico",
    emoji: "🐠",
    color: "#00acc1",
    ranking: 3,
    tamano: "tercero más grande",
    superficie: "70 millones de km²",
    datosImportantes: [
      "Es el tercer océano más grande.",
      "Baña las costas de Asia, África y Australia.",
      "Tiene aguas cálidas durante gran parte del año.",
      "Es importante para el comercio marítimo."
    ],
    sabiasQue: "Recibe su nombre por la India.",
    animales: ["Coral", "Delfín", "Tortuga Marina", "Pez Tropical"],
    continentes: ["Asia", "África", "Australia"],
    curiosidad: "Sus aguas cálidas son ideales para los arrecifes de coral."
  },
  artico: {
    id: "artico",
    nombre: "Ártico",
    emoji: "🧊",
    color: "#e0e0e0",
    ranking: 5,
    tamano: "más pequeño",
    superficie: "14 millones de km²",
    datosImportantes: [
      "Es el océano más pequeño.",
      "Se encuentra alrededor del Polo Norte.",
      "Gran parte de su superficie permanece congelada.",
      "Alberga especies adaptadas al frío extremo."
    ],
    sabiasQue: "Durante parte del año el sol no se oculta en el Ártico (sol de medianoche).",
    animales: ["Oso Polar", "Foca", "Morsa", "Reno"],
    continentes: ["América del Norte", "Europa", "Asia"],
    curiosidad: "El hielo del Ártico está disminuyendo debido al cambio climático."
  },
  antartico: {
    id: "antartico",
    nombre: "Antártico",
    emoji: "🐧",
    color: "#4fc3f7",
    ranking: 4,
    tamano: "cuarto más grande",
    superficie: "20 millones de km²",
    datosImportantes: [
      "Rodea completamente la Antártida.",
      "Es uno de los océanos más fríos.",
      "Sus corrientes influyen en el clima mundial.",
      "Alberga una gran variedad de fauna marina."
    ],
    sabiasQue: "Sus aguas ayudan a regular la temperatura del planeta.",
    animales: ["Pingüino", "Ballena", "Foca", "Albatros"],
    continentes: ["Antártida"],
    curiosidad: "El Océano Antártico también es conocido como Océano Austral."
  }
};

// Actividades del libro
const OCEAN_ACTIVITIES = [
  {
    oceanId: "antartico",
    tipo: "relacionar",
    instruccion: "Relaciona cada animal con su hábitat.",
    pares: [
      { animal: "Pingüino", habitat: "Habita en colonias sobre el hielo y cerca del mar." },
      { animal: "Ballena", habitat: "Vive en el océano abierto." },
      { animal: "Foca", habitat: "Descansa sobre el hielo y nada en aguas frías." },
      { animal: "Albatros", habitat: "Vuela sobre el océano en busca de alimento." }
    ]
  },
  {
    oceanId: "artico",
    tipo: "identificar",
    instruccion: "Identifica los animales polares.",
    animales: ["Oso Polar", "Foca", "Morsa", "Reno", "Delfín"]
  },
  {
    oceanId: "pacifico",
    tipo: "colorear",
    instruccion: "Colorea el océano y señala los continentes que lo rodean.",
    continentes: ["Asia", "América del Norte", "Oceanía", "América del Sur", "Antártida"]
  },
  {
    oceanId: "atlantico",
    tipo: "identificar",
    instruccion: "Identifica los continentes que rodean este océano.",
    continentes: ["América del Norte", "Europa", "África", "América del Sur"]
  },
  {
    oceanId: "indico",
    tipo: "colorear",
    instruccion: "Localiza los países o continentes que rodean el Índico.",
    lugares: ["África", "Asia", "Australia", "Madagascar", "India", "Indonesia"]
  }
];

const OCEAN_RANKING = [
  { lugar: 1, nombre: "Pacífico", superficie: "165 millones de km²" },
  { lugar: 2, nombre: "Atlántico", superficie: "106 millones de km²" },
  { lugar: 3, nombre: "Índico", superficie: "70 millones de km²" },
  { lugar: 4, nombre: "Antártico", superficie: "20 millones de km²" },
  { lugar: 5, nombre: "Ártico", superficie: "14 millones de km²" }
];
