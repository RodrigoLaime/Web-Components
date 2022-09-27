const template = document.createElement('div');
template.innerHTML = `
<style>
.texto {
  background-color: gray;
}
.texto2 {
  color: red;
}
</style>
<p class="texto">Adios mundo cruel</p>
<p class="texto2">Hola mundo cruel</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super(); //para tener acceso a los metodos que existen en la clase de HTMLElement
    this.p = document.createElement('p');
  }
  connectedCallback() { //para poder visualizar la etiqueta
    this.p.textContent = 'Hola Mundo';//agregamos texto a la etiqueta
    this.appendChild(this.p); //agregar al DOM para poder visualizarlo en el navegador
    this.appendChild(template);
  }
}
/* definir la etiqueta(hacer que esta clase se convierta en una etiqueta de HTML) */
customElements.define('my-element', myElement);//define (nombre, de donde viene)