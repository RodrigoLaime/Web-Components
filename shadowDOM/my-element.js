
class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  getTemplate() { //generar etiqueta 
    const template = document.createElement('template');
    template.innerHTML = `
       <section>
        <h2 class="title">mundo</h2>
        <div>
          <p>soy texto</p>
        </div>
       </section>
       ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      .title {
        color: green
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