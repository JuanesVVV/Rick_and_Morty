async function Conexion() {
  personajes = [];
  let pagina = 1;
  let siguiente = true;

  while (siguiente) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await res.json();

    personajes = personajes.concat(data.results);
    pagina++;
    siguiente = data.info.next !== null;
  }

  totalPersonajes = personajes.length;
}

async function General() {
  await Conexion();
  Home();
}

General();