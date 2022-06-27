import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";

class AppContent extends LitElement {
    render() {
        return html`
         <h1><slot></slot>${this.data}</h1>
        `
    }
}

window.customElements.define('app-content',AppContent);