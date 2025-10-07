var misPersonajes = JSON.parse(localStorage.getItem("misPersonajes")) || [];

function Aleatorios() {
  document.getElementById("nuevos").innerHTML = "";
  let aleatorios = "";

  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * personajes.length);
    let p = personajes[num];
    if (!p) continue;

    aleatorios += `
      <div class="c-lista-personaje c-un_aleatorio">
        <p>${p.id}</p>
        <img src="${p.image}" alt="${p.name}" width="60" height="60">
        <p>${p.name}</p>
      </div>`;

    if (!misPersonajes.includes(p.id)) {
      misPersonajes.push(p.id);
      localStorage.setItem("misPersonajes", JSON.stringify(misPersonajes));

      const celda = document.getElementById("c-unpersonaje-" + p.id);
      if (celda) {
        celda.innerHTML = `
          <div onclick="Detalle('${p.id}')">
            <img src="${p.image}" width="auto" height="45" loading="lazy" alt="${p.name}">
            <p>${p.name}</p>
          </div>`;
        celda.classList.add("c-mios-personaje");
      }
    }
  }

  document.getElementById("nuevos").innerHTML += aleatorios;
  document.getElementById("contador").innerHTML = `${misPersonajes.length} / ${totalPersonajes}`;
}

function Capturados() {
  document.getElementById("root").innerHTML = "";

  const capturaAleatorea = document.createElement("section");
  capturaAleatorea.classList.add("c-lista");
  capturaAleatorea.id = "nuevos";

  const boton = document.createElement("button");
  boton.textContent = "4 nuevos";
  boton.addEventListener("click", () => {
    Aleatorios();
  });

  const seccioncapturados = document.createElement("section");
  seccioncapturados.classList.add("c-lista");

  let lista = "";
  for (let i = 0; i < personajes.length; i++) {
    let p = personajes[i];
    if (!p) continue;

    if (misPersonajes.includes(p.id)) {
      lista += `
        <div class="c-unpersonaje c-mios-personaje personaje-${p.id}" onclick="Detalle('${p.id}')">
          <img src="${p.image}" width="auto" height="45" loading="lazy" alt="${p.name}">
          <p>${p.name}</p>
        </div>`;
    } else {
      lista += `
        <div class="c-unpersonaje" id="c-unpersonaje-${p.id}">
          <p>${p.id}</p>
        </div>`;
    }
  }

  seccioncapturados.innerHTML = lista;

  const contador = document.createElement("p");
  contador.textContent = `${misPersonajes.length} / ${totalPersonajes}`;
  contador.id = "contador";

  document.getElementById("root").appendChild(contador);
  document.getElementById("root").appendChild(boton);
  document.getElementById("root").appendChild(capturaAleatorea);
  document.getElementById("root").appendChild(seccioncapturados);
}