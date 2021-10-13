import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Componente from "./Componente.js";

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

const list = document.querySelector(".characters-list row list-unstyled");

const newtyrion = new Componente(list);
