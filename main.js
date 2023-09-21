/**
SEGUNDA PREENTREGA JS

- OBJETIVOS:

1 - Estructura HTML SIMPLE
2 - FUNCIONES
3 - OBJETOS
4 - ARRAYS
5 - FUNCION DE ORDEN SUPERIOR 

 */

// Molde de las canciones

class Cancion {
  constructor(nombre, artista, genero, duracion) {
    this.nombre = nombre;
    this.artista = artista;
    this.genero = genero;
    this.duracion = duracion;
  }
}

// Cada una de las canciones

const corazonVacio = new Cancion(
  "Corazón Vacío",
  "Maria Becerra",
  "Reggaetón",
  3
);
const oyeMujer = new Cancion("Oye Mujer", "Ke Personajes", "Cumbia", 2);
const besameBonito = new Cancion(
  "Bésame Bonito",
  "Eugenia Quevedo",
  "Cuarteto",
  4
);
const lover = new Cancion("Lover", "Taylor Swift", "Pop", 4);
const dontStartNow = new Cancion("Dont Start Now", "Dua Lipa", "Pop", 3);
const vasABailar = new Cancion("Vas A Bailar", "Ciro y los Persas", "Rock", 5);
const chau = new Cancion("Chau", "No Te Va Gustar", "Rock", 4);
const fragil = new Cancion("Frágil", "Q'lokura", "Cuarteto", 3);
const ahiAhi = new Cancion("Ahí Ahí", "El Negro Tecla", "Cumbia", 3);
const titan = new Cancion("Titán", "Callejero Fino", "RKT", 3);
const ojosDeDragon = new Cancion(
  "Ojos de Dragón",
  "Las Pastillas del Abuelo",
  "Rock",
  4
);
const rompecabezasDeAmor = new Cancion(
  "Rompecabezas De Amor",
  "Las Pastillas del Abuelo",
  "Rock",
  5
);
const rocanrolesSinDestino = new Cancion(
  "Rocanroles Sin Destino",
  "Callejeros",
  "Rock",
  4
);
const jijiji = new Cancion("Ji Ji Ji", "Indio", "Rock", 5);
const laLlave = new Cancion("La Llave", "Abel Pintos", "Balada", 4);
const givenchy = new Cancion("Givenchy", "Duki", "Reggaetón", 3);
const tamoChelo = new Cancion("Tamo Chelo", "El Noba", "RKT", 2);
const butakera = new Cancion("Butakera", "La Joaqui", "RKT", 2);
const mission11 = new Cancion("Mission 11", "Peipper", "RKT", 2);
const soyCordobes = new Cancion("Soy Cordobés", "Rodrigo", "Cuarteto", 4);

// Array playlist donde se almacenan las canciones

const playlist = [];

// Minutos disponibles en la playlist

let minutos = 20;

// Función para agregar canciones a la playlist

function agregarCanciones(cancionSelecta) {
  //Vemos que todavía tenga minutos disponibles para agregar canciones
  if (minutos - cancionSelecta.duracion >= 0) {
    playlist.push(cancionSelecta);
    //A continuación restamos los minutos de la cancion que se agregó
    minutos -= cancionSelecta.duracion;
    actualizaHTML();
  } else {
    alert(
      `La duración de ${cancionSelecta.nombre} excede los 20 minutos disponibles de tu playlist. 
Quita una canción para poder agregarla.`
    );
  }
}

// Función para quitar canciones de la playlist

function quitarCanciones(cancionSelecta) {
  // Se busca la canción en la Playlist
  const cancionEncontrada = playlist.find(
    (cancion) => cancion.nombre == cancionSelecta
  );

  //Si está en la playlist, la sacamos y volvemos a actualizar los minutos
  if (cancionEncontrada) {
    minutos += cancionEncontrada.duracion;
    // La quitamos de la playlist
    const indiceCancion = playlist.indexOf(cancionEncontrada);
    playlist.splice(indiceCancion, 1);
    actualizaHTML();
  }
}

// Seleccionamos elementos del HTML mediante QuerySelector y getElementById.
const losMinutos = document.querySelector("#minutosDisponibles span");
losMinutos.innerText = minutos;
const laPlaylist = document.getElementById("playlist");

// Funcion para agregar canciones a la playlist y vender con onclick a través de DOM.
function actualizaHTML() {
  laPlaylist.innerHTML = "";
  for (i of playlist) {
    const li = `<li onclick= "quitarCanciones('${i.nombre}')"> "${i.nombre}" - ${i.artista} (${i.duracion} minutos). </li>`;
    laPlaylist.innerHTML += li;
  }
  losMinutos.innerText = minutos;
}
