// Verificar si hay sesion activa
const userData =
JSON.parse(localStorage.getItem("user"));

if (!userData) {
 alert("No tienes sesion activa.redirigiendo al loginForm...");
 window.locaction.href = "index.html";   
} else {
  // Mostrar informacion
  const info =
document.getElementById("infoUsuario");
  info.innerHTML =
    <p><strong>Usuario:</strong> $
{userData.username}</p>
 ;
}

// Cerrar sesion
const logoutBtn =
document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("sesion cerrada");
  window.location.href = "index.html";
});

