function Favoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritosRM")) || [];
  const root = document.getElementById("root");
  root.innerHTML = favoritos.length === 0
    ? "<p>No hay favoritos</p>"
    : GenerarLista(favoritos);
}