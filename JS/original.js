var esFavorito = false;

async function Detalle(id) {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando...</p>";

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();

    // Traducciones
    const estadoTraducido = {
      Alive: "Vivo",
      Dead: "Muerto",
      unknown: "Desconocido"
    }[data.status] || data.status;

    const generoTraducido = {
      Male: "Masculino",
      Female: "Femenino",
      Genderless: "Sin género",
      unknown: "Desconocido"
    }[data.gender] || data.gender;

    const especieTraducida = {
      Human: "Humano",
      Alien: "Alienígena",
      Robot: "Robot",
      Animal: "Animal",
      "Mythological Creature": "Criatura mitológica",
      Disease: "Enfermedad",
      Poopybutthole: "Poopybutthole",
      Cronenberg: "Cronenberg",
      unknown: "Desconocida"
    }[data.species] || data.species;

    const favoritos = JSON.parse(localStorage.getItem("favoritosRM")) || [];
    esFavorito = favoritos.some(p => p.id === data.id);

    root.innerHTML = `
      <section class="c-detalle">
        <img src="${data.image}" alt="${data.name}" height="120" width="auto">
        <h2>${data.name} (#${data.id})</h2>
        <p><strong>Estado:</strong> ${estadoTraducido}</p>
        <p><strong>Especie:</strong> ${especieTraducida}</p>
        <p><strong>Género:</strong> ${generoTraducido}</p>
        <p><strong>Origen:</strong> ${data.origin.name}</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Tipo: ${data.type || "Desconocido"}</li>
          <li>Ubicación actual: ${data.location.name}</li>
        </ul>
        <button onclick="toggleFavorito(${data.id}, '${data.name}', '${data.image}')">
          <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
        </button>
        <button onclick="Home()">Volver</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = `<p>Error al cargar el personaje.</p>`;
    console.error("Error en Detalle:", error);
  }
}

function toggleFavorito(id, name, image) {
  let favoritos = JSON.parse(localStorage.getItem("favoritosRM")) || [];
  const index = favoritos.findIndex(p => p.id === id);

  if (index !== -1) {
    favoritos.splice(index, 1);
    esFavorito = false;
  } else {
    favoritos.push({ id, name, image, url: `https://rickandmortyapi.com/api/character/${id}` });
    esFavorito = true;
  }

  localStorage.setItem("favoritosRM", JSON.stringify(favoritos));

  const boton = document.querySelector(`#corazon-${id}`);
  if (boton) {
    boton.textContent = esFavorito ? "❤️" : "🤍";
  }
}