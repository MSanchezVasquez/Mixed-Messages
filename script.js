const equipos = [
  "FC Barcelona",
  "Real Madrid CF",
  "Bayern de Múnich",
  "Manchester City",
  "Paris Saint-Germain",
  "Manchester United",
  "AC Milan",
];

const jugadores = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Robert Lewandowski",
  "Kevin De Bruyne",
  "Kylian Mbappé",
  "David de Gea",
  "Ronaldinho",
];

const habilidades = [
  "Versatilidad en el campo",
  "Instinto goleador",
  "Máquina de goles",
  "Maestro de asistencias",
  "Reflejos felinos en la portería",
  "Dominio bajo los palos",
  "Genio del regate",
];

// Arte ASCII
const arteASCII = [
  `
   ______
  /      \\
 |        |
 |  O   O |
 |    <>  |
 |   ---  |
  \\______/
  `,
  `
     ____
   /      \\
  |  O  O  |
  |    |   |
  |  \\__/  |
   \\______/
  `,
  `
    (__)     
   /    \\    
  |      |   
  |  O   |   
  |  O   |   
   \\____/    
  `,
  `
     ______
    /      \\
   |  O   O |
   |   \\_/  |
   |   |    |
   |  / \\   |
    \\______/
  `,
];

// Función para generar un número aleatorio
const generarNumeroAleatorio = (max) => Math.floor(Math.random() * max);

// Función para generar el mensaje
const generarMensaje = () => {
  // Verificación de que los arrays no están vacíos
  if (!equipos.length || !jugadores.length || !habilidades.length) {
    return "Error: uno de los arrays está vacío.";
  }

  // Se seleccionan aleatoriamente un equipo, un jugador y una habilidad
  const equipo = equipos[generarNumeroAleatorio(equipos.length)];
  const jugador = jugadores[generarNumeroAleatorio(jugadores.length)];
  const habilidad = habilidades[generarNumeroAleatorio(habilidades.length)];
  const arte = arteASCII[generarNumeroAleatorio(arteASCII.length)];

  // Uso de template literals
  return `
  Eres parte del equipo del: ${equipo}
  Te tocó al jugador: ${jugador}
  Con la habilidad de: ${habilidad}
  ${arte}
  `;
};

console.log(generarMensaje());
