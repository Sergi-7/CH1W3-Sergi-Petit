class Componente {
  parent

  constructor(nombre, edad, vivo, serie, comunicado, familia, htmlTag = "div") {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
    this.serie = serie;
    this.htmlTag = "li"
    this.comunicado = comunicado;
    this.familia = familia;
    this.createHtml();
  }

  createHtml() {
    const list = document.querySelector(".characters-list");
    const html = `
      <li class="character col">
        <div class="card character__card">
          <img
            src="img/no-one.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.nombre} ${this.familia}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li class="character__age">${this.edad}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: X</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;
    this.element.innerHtml = html;
  }
}

export default Componente;
