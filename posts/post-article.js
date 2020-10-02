class PostArticle extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"})
    }

    set article(item) {
        this.root.innerHTML = `
            <style>
            
            </style>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
            <hr/>
        `
    }

}

customElements.define('post-article', PostArticle)