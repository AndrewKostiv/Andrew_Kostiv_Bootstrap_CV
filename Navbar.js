class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
  <nav class="w-100 p-2 navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style="position: fixed;">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="gallery.html">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="projects.html">projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="contact.html">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
