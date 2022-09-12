<template>
    <div>
        <div class="d-flex flex-column flex-shrink-0  " id="a" style="width: 180px;height:750px ;">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src="PngItem_3786809.png" alt="" />
            </a>
            <br />
            <ul class="nav nav-pills flex-column mb-auto" id="ok">
                <font size="-1">
                    <div id="h">
                        <li class="nav-item">

                            <a href="#" class="nav-link  link-dark " aria-current="page">
                                <svg class="bi pe-none me-2" width="16" height="16" color="#FF8C11">
                                    <use xlink:href="#home" />
                                </svg>
                                <k> Tableau de bord</k>
                            </a>
                        </li>
                    </div>

                    <li>
                        <a href="#" class="nav-link link-dark" id="l">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#table" />
                            </svg>
                            Statistiques
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark" id="gt">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid" />
                            </svg>
                            e-services
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            <svg class="bi pe-none me-2" width="16" height="16" color="">
                                <use xlink:href="#people-circle" />
                            </svg>
                            Info
                        </a>
                    </li>

                </font>
            </ul>
            <hr>
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <svg class="bi pe-none me-2" width="20" height="20">
                    <use xlink:href="#people-circle" />
                </svg>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">se connecter</a></li>

            </ul>
        </div>
        <div class="container col" id="x">
            <nav class="navbar navbar-expand-lg " id="p" aria-label="Tenth navbar example">
                <div class="container-fluid" id="j">
                    <div class="collapse navbar-collapse " id="k">
                        <ul class="navbar-nav">
                            <li>
                                <a href="#" class="nav-link link-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                        class="bi pe-none me-2" width="16" height="16">
                                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="bi pe-none me-2" width="16" height="16">
                                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
                                    </svg>
                                    <svg class="bi pe-none me-2" width="16" height="16">
                                        <use xlink:href="#people-circle" />
                                    </svg>

                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link link-dark dropdown-toggle " href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false"></a>
                                <ul class="dropdown-menu dropdown-menu-left ">
                                    <li><a class="dropdown-item" href="#">Ajouter un compte</a></li>
                                    <li><a class="dropdown-item" href="#">se connecter</a></li>
                                    <li><a class="dropdown-item" href="#">authentification</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr>
            <form class="oc-form   hidden-xs" action="/fr/recherche/" method="get"
                wtx-context="65C3FC7B-BC9B-4684-B6B1-B9F49ED6662B">
                <div class="oc-form__widget  inputGroup  inputGroup--medium">
                    <input type="search" class="oc-form-control inputGroup__input"  placeholder="Rechercher ici"
                        name="search" aria-label="Barre de recherche"
                        wtx-context="A6D34D64-0B90-479C-816E-48146C920B53">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="bi pe-none me-2" width="14"
                        height="14">
                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                    </svg>


                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Dashboard",
    props: {},
};
</script>
<style scoped>
.dropdown-menu-left {
    left: -130px !important;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

img {
    width: 120px;
    height: 40px;
    margin-left: 18px;
}

#a {
    background-image: url("Admin (1).png");
}

#x {
    border: red 2px solid;
    height: 750px;
    margin-left: 10px;
    margin-bottom: 480px;
    width: 1000px;
}

#j {
    border: blue 2px solid;
    padding-left: 10px;
}

#k {
    border: green 2px solid;
    margin-left: 840px;
}

#y {
    width: 400px;
}

#r {
    border: orange 2px solid;
    ;
}

#h {
    border-left: rgb(240, 173, 5) 2px solid;
    height: 28px;
}

k {
    color: #FF8C11;
}
</style>
  