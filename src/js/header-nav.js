class UMKCNavigation extends HTMLElement {
  constructor() {
    super();
    this.links = {};
    this.class = "";
  }
  connectedCallback() {
    this.class = this.class;
    this.links = JSON.parse(this.getAttribute("links"));
    this.innerHTML = this.links;
    // Custom function to render the component!
    this.renderComponent();
  }

  renderComponent() {
    this.innerHTML = `
      <nav class="${this.class}">
        <ul>
          ${this.links.map(function(link){
            let fullLink = (link.href !== "" ? '<a href="'+link.href+'">' + link.title + '</a>' : '<span>'+link.title+'</span>' );
            return '<li>'+fullLink+'</li>'
          }).join('')}
        </ul>
      </nav>
    `
  }
}
customElements.define('umkc-navigation', UMKCNavigation);
