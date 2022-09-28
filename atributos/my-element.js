
class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    /* incializamos la variable */
    this.title = this.getAttribute('title');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');
  }
  getTemplate() { //generar etiqueta 
    const template = document.createElement('template');
    template.innerHTML = `
       <section>
        <h2>${this.title/* aplicamos el atributo */}</h2>
        <div>
          <p>${this.parrafo}</p>
          <img src=${this.img}/>
        </div>
       </section>
       ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
    h2 {
        color: green;
        padding: 30px 0;
        border: 2px solid red;
        width: 100%;
        text-align: center;
      }
      .parr{
        padding: 10px
        border: 5px solid gray;
        text-align: center;
        font-size: 20px;
      }
    </style>
    `;
  }
  render() { //Clonar todos los elementos 
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() { //inicializamos en el DOM 
    this.render();
  }
}
customElements.define('my-element', myElement);