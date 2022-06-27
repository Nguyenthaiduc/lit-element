import { LitElement, html } from "lit";

class AppHeader extends LitElement {
    render() {
        return html`
            <h1>Hello World </h1>
        `
    }
}

window.customElements.define('app-header', AppHeader);