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

const arteASCII = [
  `\n   ______\n  /      \\\n |        |\n |  O   O |\n |    <>  |\n |   ---  |\n  \\______/\n`,
  `\n     ____\n   /      \\\n  |  O  O  |\n  |    |   |\n  |  \\__/  |\n   \\______/\n`,
  `\n    (__)     \n   /    \\    \n  |      |   \n  |  O   |   \n  |  O   |   \n   \\____/    \n`,
  `\n     ______\n    /      \\\n   |  O   O |\n   |   \\_/  |\n   |   |    |\n   |  / \\   |\n    \\______/\n`,
];

const generarNumeroAleatorio = (max) => Math.floor(Math.random() * max);

const generarMensaje = () => {
  const equipo = equipos[generarNumeroAleatorio(equipos.length)];
  const jugador = jugadores[generarNumeroAleatorio(jugadores.length)];
  const habilidad = habilidades[generarNumeroAleatorio(habilidades.length)];
  const arte = arteASCII[generarNumeroAleatorio(arteASCII.length)];

  return `
  ${arte}
  Eres parte del equipo del: ${equipo}
  Te tocó al jugador: ${jugador}
  Con la habilidad de: ${habilidad}
  `;
};

let boton = document.getElementById("button");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  // Limpiar resultados previos
  resultado.innerHTML = generarMensaje();
});
