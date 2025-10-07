let personajes = [];
let totalPersonajes = 826; // según la API

async function Conexion() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=1`);
    const data = await res.json();
    personajes = data.results;
  } catch (error) {
    console.error("Error en la conexión:", error);
    personajes = [];
  }
}

async function General() {
  await Conexion();
  Home();
}

General(); // Mostrar personajes desde el inicio