export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/* html*/ `
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">

            <img src="/media/logoPrincipal-s.png" class="imagen">
            <a href="" class="navbar-brand  fw-semibold fs-4">Campus Airlines</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                <span class="navbar-toggler-icon"></span>
            </button>

            <section class="offcanvas offcanvas-end" id="menuLateral" tabindex="-1">
                <div class="offcanvas-header  lateralmenu  " data-bs-theme="dark">
                    <h5 class="offcanvas-title text  ">Campus Airlines</h5>
                    <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body d-flex flex-column justify-content-between px-0" id="lateral">
                    <ul class="navbar-nav fs-5 justify-content-evenly">
                        <li class="nav-item p-3 py-md-1">
                            <a href="/customers.html" class="nav-link">Clientes</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a href="#" class="nav-link">Rutas</a>
                        </li>
                         <li class="nav-item p-3 py-md-1">
                             <a href="" class="nav-link">Personal</a>
                         </li>
                    </ul>

                    <div class="d-lg-none align-self-center py-3">
                        <a href=""><i style="color: burlywood !important ;"
                                class="bi bi-linkedin px-2 text-info fs-2"></i></a>
                        <a href=""><i style="color: burlywood !important;"
                                class="bi bi-github px-2 text-info fs-2"></i></a>
                        <a href=""><i style="color: burlywood !important ;"
                                class="bi bi-discord px-2 text-info fs-2"></i></a>
                    </div>
                </div>
            </section>
        </div>
    </nav>

        `
    }
}
customElements.define("main-menu",MainMenu);