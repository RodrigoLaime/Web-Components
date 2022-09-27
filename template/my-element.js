
class myElement extends HTMLElement {
  constructor() {
    super();
  }
  getTeemplate() { //generar etiqueta 
    const template = document.createElement('template');
    template.innerHTML = `
       <section>
        <h2>Pero la republica argentina</h2>
        <div>
          <p> y la rreconstitucion nacinal argentina</p>
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
        color: green
      }
    </style>
    `;
  }
  render() { //Clonar todos los elementos 
    this.appendChild(this.getTeemplate().content.cloneNode(true));
  }
  connectedCallback() { //inicializamos en el DOM 
    this.render();
  }
}
customElements.define('my-element', myElement);