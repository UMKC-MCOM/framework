class UMKCNavigation extends HTMLElement {
  constructor() {
    super();
    this.links = {};
    this.class = "";
    this.label = "";
  }
  connectedCallback() {
    this.class = this.getAttribute("kClass");
    this.links = JSON.parse(this.getAttribute("links"));
    this.label = this.getAttribute("label");
    this.innerHTML = this.links;
    // Custom function to render the component!
    this.renderComponent();
  }

  renderComponent() {
    this.innerHTML = `
      <nav class="${this.class}" ${ this.label !== "" ? 'aria-label="'+this.label+'"' : ''} >
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
