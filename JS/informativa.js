export function renderInformativa() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section class="c-informativa">
      <h2>Rick and Morty Explorer</h2>
      <img src="./Imagenes/rick_and_morty.jpg" alt="Rick and Morty portal" class="informativa-img">
      <p>Esta aplicación te permite explorar el universo de Rick and Morty usando la API oficial.</p>
      <ul>
        <li>🔍 Buscar personajes por nombre</li>
        <li>⭐ Guardar tus favoritos</li>
        <li>🎲 Capturar personajes aleatorios en modo Gacha</li>
        <li>📦 Ver tu colección personal</li>
      </ul>
      <p>Todo se guarda localmente en tu navegador, sin necesidad de registro.</p>
      <p>Inspirado en la estética interdimensional de la serie, con un toque retro y modular para que puedas integrarlo fácilmente en Android WebView o escalarlo como PWA.</p>
    </section>
  `;
}