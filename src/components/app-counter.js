import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import './app-content';

class AppCounter extends LitElement {
    @state()
    counter = 0;

    // constructor(){
    //     super();
    //     this.counter = 0;
    // }
    handleClick = () => {
        this.counter++;
    }
   
    render() {
        return html`
            
            <app-content .data="${this.counter}">${this.counter}</app-content>
            <button @click="${this.handleClick}">Click me</button>
        `
    }
}

window.customElements.define('app-counter',AppCounter);