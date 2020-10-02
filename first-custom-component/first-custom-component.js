class FirstCustomComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h1>Hello world</h1><p>this is first custom component</p>`
    }
}

customElements.define('first-custom-component', FirstCustomComponent)