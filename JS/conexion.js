let personajes = [];
let totalPersonajes = 826; // número actual aproximado

// Conexión para obtener personajes
async function Conexion(filtro) {
  try {
    if (filtro === "All") {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await res.json();
      return data.results;
    } else {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?species=${filtro}`);
      const data = await res.json();
      return data.results;
    }
  } catch (error) {
    console.error("Error en la conexión:", error);
    return [];
  }
}

// Cargar todos los personajes al iniciar
async function General() {
  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }
  Home(personajes);
  console.log(personajes[2].name);
}

General();

async function FiltroConexion(filtroElegido) {
  const filtrados = await Conexion(filtroElegido);
  document.getElementById("la-lista").innerHTML = "";
  const listaHTML = GenerarLista(filtrados);
  document.getElementById("la-lista").innerHTML = listaHTML;
}