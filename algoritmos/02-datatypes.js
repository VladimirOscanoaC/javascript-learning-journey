let nombre = "FC Barcelona"; // -> Representa String.
let fundacion = 1899; // -> Representa un number.
let campeonato = true; // -> Representa un boolean.
let plantilla = null; // -> Representa un null.
let presupuesto = undefined; // -> Representa un undefined, la variable no tiene valor
let trofeos = {
  liga: 27,
  copa_del_rey: 31,
  champions_league: 5,
  mundiales_clubes: 3,
  supercopas_europa: 5,
  supercopas_espana: 14,
}; // -> Representa un objeto con varias propiedades. Tener en cuenta que un objeto tiene una CLAVE: VALOR
let escudo = Symbol("escudo"); // -> Representa un identificador único.

console.log(trofeos);

// ARARYS
let equipos_espana = ["Barcelona", "Real Madrid", "Atletico Madrid"];

// FUNCTIONS
function verificarEquipo(equipo) {
  // Comprobar si el equipo está en el array
  if (equipos_espana.includes(equipo)) {
    return `${equipo} está en la lista de equipos de España.`;
  } else {
    return `${equipo} no está en la lista de equipos de España.`;
  }
}

// Ejemplos de uso:
console.log(verificarEquipo("Barcelona")); // "Barcelona está en la lista de equipos de España."
console.log(verificarEquipo("Sevilla")); // "Sevilla no está en la lista de equipos de España."
