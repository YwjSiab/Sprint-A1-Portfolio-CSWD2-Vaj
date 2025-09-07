class NavSidebar extends HTMLElement {
  constructor() {
    super();
    const r = this.attachShadow({mode:"open"});
    r.innerHTML = `
      <style>
        aside{background:rgb(25,233,247);padding:20px;border-radius:25px}
        nav ul{list-style:none;margin:0;padding:0}
        nav li{margin:8px 0}
        nav a{color:rgb(247,39,25);text-decoration:none;font-size:1.1rem}
        nav a:hover{color:rgb(86,0,179)}
        h2{margin:0 0 12px}
        .asideText{font-style:italic;font-size:.9rem}
      </style>
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

