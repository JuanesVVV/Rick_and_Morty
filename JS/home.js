function GenerarLista(arraypersonajes) {
  let lista = "";
  for (let i = 0; i < arraypersonajes.length; i++) {
    let p = arraypersonajes[i];
    lista += `
      <div class="c-lista-personaje personaje-${p.id}" onclick="Detalle('${p.id}')">
        <p>#${p.id}</p>
        <img src="${p.image}" width="auto" height="60" loading="lazy" alt="${p.name}">
        <p>${p.name}</p>
      </div>`;
  }
  return lista;
}

function buscadorfuncion(valor) {
  const filtrados = valor.length >= 3
    ? personajes.filter(p => p.name.toLowerCase().includes(valor.toLowerCase()))
    : personajes;
  document.getElementById("la-lista").innerHTML = GenerarLista(filtrados);
}

function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const buscador = document.createElement("input");
  buscador.type = "text";
  buscador.placeholder = "Buscar personaje";
  buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

  const contenedorLista = document.createElement("section");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = GenerarLista(personajes);

  root.appendChild(buscador);
  root.appendChild(contenedorLista);
}