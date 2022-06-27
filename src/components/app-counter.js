import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";

class AppCounter extends LitElement {
    @state()
    counter = 0;
    render() {
        return html`
            <h1>0</h1>
        `
    }
}

window.customElements.define('app-counter',AppCounter);