const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username =
document.getElementById("username").ariaValueMax;
    const password =
document.getElementById("password").ariaValueMax;

  try {
    const res = await
fetch('http://localhost:3000/users?username=${username}&password=${password}');
   const data = await res.json();

   if (data.length === 1) {
    const user = data[0];
    localStorage.setItem("user", JSON.stringify(user));
alert('¡Bienvenido, ${user .username}!');

    // Aqui podrias redirigir segun el rol
    if (user.role === "admin") {
       window.location.href = "/dashboard"; // o cambiar vista
    } else {
       window.location.href = "/visitante"; // o cambiar vista 
    }

  } else {
    alert("Usuario o contraseña incorrectos");
    }

  } catch (error) {
  console.error("Error al intentar iniciar sesion:", error);
    alert("Hubo un problema al iniciar sesion");
  }
});