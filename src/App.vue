<script setup>
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark  ">
      <div class="container">
        <router-link class="navbar-brand fw-bold text-star" to="/">EPICBUILD <br> CONSTRUCTIONS INC</router-link>
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
    <router-view />
  </div>
  <Footer />
</template>
