class Greeter extends HTMLElement {
  static get observedAttributes() { return ['username']; }

  connectedCallback() {
    this.updateContent();
  }

  attributeChangedCallback() {
    this.updateContent();
  }

  updateContent() {
    // simple setup for the sake of the example
    const name = this.getAttribute('username');
    this.innerHTML = 
      !name ? 'Welcome!' : `
      <span>Hello ${name}!</span>
      <button onclick='this.parentNode.onAcked()'>Acknowledge</button>
    `;
  }

  onAcked() {
    this.dispatchEvent(new CustomEvent("acked"));
  }
}

window.customElements.define('app-greeter', Greeter);
