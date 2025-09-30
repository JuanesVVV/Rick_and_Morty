function GenerarLista(arrayPersonajes) {
  let lista = "";

  for (let i = 0; i < arrayPersonajes.length; i++) {
    const personaje = arrayPersonajes[i];
    lista += `
      <div class="c-lista-personaje" onclick="Detalle('${personaje.id}')">
        <p>#${personaje.id}</p>
        <img src="${personaje.image}" width="auto" height="100" loading="lazy" alt="${personaje.name}">
        <p>${personaje.name}</p>
      </div>`;
  }

  return lista;
}
function buscadorfuncion(valor) {
  if (valor.length >= 3) {
    const filtrados = personajes.filter(p => p.name.toLowerCase().includes(valor.toLowerCase()));
    const listaHTML = GenerarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    const listaHTML = GenerarLista(personajes);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}
function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar personaje";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Filtros por especie
  const especies = ["Human", "Alien", "Robot", "Animal", "Mythological Creature", "Unknown"];
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("c-filtros");

  especies.forEach(especie => {
    const btn = document.createElement("button");
    btn.textContent = especie;
    btn.addEventListener("click", () => {
      FiltroConexion(especie);
    });
    contenedorFiltro.appendChild(btn);
  });

  // Lista
  const contenedorLista = document.createElement("section");
  contenedorLista.classList.add("c-lista");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = GenerarLista(personajes);

  // Agregar al DOM
  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorLista);
}