import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

const joffrey = new Rey("Joffrey", Personaje.familia.arryn, 17, 2);
const jaime = new Luchador("Jaime", Personaje.familia.stark, 30, "Espada", 9);
const daenerys = new Luchador(
  "Daenerys",
  Personaje.familia.stark,
  20,
  "Dragones",
  7
);
const tyrion = new Asesor("Tyirion", Personaje.familia.stark, 28, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.stark, 28, jaime, 8);
const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

const list = document.querySelector(".characters-list");
const character = document.querySelector(".character");
const imgList = [
  "./img/joffrey.jpg",
  "./img/jaime.jpg",
  "./img/daenerys.jpg",
  "./img/tyrion.jpg",
  "./img/bronn.jpg",
];

function addCharacters(personajesArray) {
  character.remove();
  for (let i = 0; i < personajesArray.length; i++) {
    const newcharacter = character.cloneNode(true);
    const h2 = newcharacter.querySelector(".character__name");
    const img = newcharacter.querySelector(".character__picture");
    const edad = newcharacter.querySelector(".character__age");
    h2.innerText = personajesArray[i].nombre;
    img.src = imgList[i];
    edad.innerText = personajesArray[i].edad;
    list.appendChild(newcharacter);
  }
}
addCharacters(personajes);
