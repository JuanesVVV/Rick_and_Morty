async function Detalle(id) {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando...</p>";

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();

    root.innerHTML = `
      <section class="c-detalle">
        <img src="${data.image}" alt="${data.name}" height="200" width="auto">
        <h2>${data.name} (#${data.id})</h2>
        <p><strong>Especie:</strong> ${data.species}</p>
        <p><strong>Estado:</strong> ${data.status}</p>
        <p><strong>Género:</strong> ${data.gender}</p>
        <p><strong>Origen:</strong> ${data.origin.name}</p>
        <p><strong>Ubicación actual:</strong> ${data.location.name}</p>
        <button onclick="Home()">Volver</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = `<p>Error al cargar el personaje.</p>`;
    console.error("Error en Detalle:", error);
  }
}