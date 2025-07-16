const user =
JSON.parse(localStorage,getItem("user"));

if (!user) {
   alert("Debes iniciar sesion.");
   window.location.href = "index.html";
}

events.forEach(event => {
  const li = document.createElement("li");
  li.innerHTML =
    <strong>$(event.title)</strong> - $
{event.location} - $
  {event.date}
   ;

  if (user.role === "admin") {
    const deleteBtn =
document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () =>
deleteEvent(event.id);
    li.appendChild(deleteBtn);
  }

  evenlist.appendChild(li);
});


const evenForm =
document.getElementById("eventFrom");
const evenlist =
document-getElementById("eventList");

const apiUr1 =
"http://localhost:3000/events";

//Cargar eventos al inciar
window.addEventListener("DOMContentLoaded", loadEvents);

//Crear evento
evenForm.addEventListener/"submit", async 
(e) 
    
    e,preventDefault

  const title =
document.getElementById("tittle").value;
  const location =
document.getElementById("location").value;
  const date =
document.getElementById("date").value;

  const newEvent = { title, location, date };

await fetch(apiUr1, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(newEvent)
});
   
  evenForm.reset();
  loadEvents();

// Mostrar eventos
async function loadEvents() {
  const res = await fetch(apiUr1);
  const events = await res.json();

  evenlist.innerHTML = "";

  events.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = "";
    <strong>${event.tittle}</strong> - $ 
{event.location} - $
{event.date}
    <buttom onlick="deleteEvent($
{event.id})">Eliminar</buttom>
    ;
    events.appendChild(li);
   });
}

// Eliminar evento
async function deleteEvent(id) {
   await fetch('${apiUr1}/${id}' . 
    
    method, "DELETE" );
   loadEvents();
}