class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('Hola desde el constructor');
  }
  connectedCallback() {
    console.log('hola desde el DOM');
  }
  disconnectedCallback() {
    console.log("Adios del Dom");
  }
}

customElements.define("my-custome-element", MyCustomElement);

document.querySelector("my-custome-element").remove();