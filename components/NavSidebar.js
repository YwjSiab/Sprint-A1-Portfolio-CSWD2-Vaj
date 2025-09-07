class NavSidebar extends HTMLElement {
  constructor() {
    super();
    const r = this.attachShadow({mode:"open"});
    r.innerHTML = `
      <aside>
        <nav>
          <ul>
            <h2 class="asideText">Links to My</h2>
            <li><a href="index.html"><strong>Home</strong></a></li>
            <li><a href="Resume.html">Resume</a></li>
            <li><a href="Projects.html">Projects</a></li>
            <li><a href="Contact.html">Contact</a></li>
          </ul>
        </nav>
      </aside>`;
  }
}
customElements.define("nav-sidebar", NavSidebar);


