function renderInformativa() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section class="c-informativa">
      <h2>Rick and Morty Explorer</h2>
      <img src="Imagenes/rick_and_morty.jpg" alt="Rick and Morty portal" class="informativa-img">
      <p>Esta aplicación te permite explorar el universo de Rick and Morty usando la API oficial.</p>
      <p>Funciones disponibles:</p>
      <p>– Buscar personajes por nombre</p>
      <p>– Guardar tus favoritos</p>
      <p>– Capturar personajes aleatorios en modo Gacha</p>
      <p>– Ver tu colección personal</p>
      <p>Todo se guarda localmente en tu navegador, sin necesidad de registro.</p>
      <p>Inspirado en la estética interdimensional de la serie, con un toque retro y modular para que puedas integrarlo fácilmente en Android WebView o escalarlo como PWA.</p>
    </section>
  `;
}