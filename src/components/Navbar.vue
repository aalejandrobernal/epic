<template>
    <nav class="navbar navbar-expand-lg navbar-dark  ">
        <div class="container">
            
            <router-link class=" fw-bold text-star title" to="/">
                <img class="logo2" src="/src/assets/aliance vertical2.png" alt="">
                <!-- <img class="logo2" src="/src/assets/logo2.png" alt="">
            <img class="logo_title" src="/src/assets/logo_title.png" alt=""> -->
                <!-- <h1>EPICBUILD</h1>  
                <h2 class="title2">CONSTRUCTIONS INC</h2> -->
            </router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Start</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/servicios">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacto">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>