<script setup>
import Carousel from '@/components/Carousel.vue'
</script>

<template>

  <!-- <div>
    <section class="text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Welcome<br> EPICBUILD CONSTRUCTIONS INC</h1>
        <p class="lead">Soluciones eficientes para tu vida</p>
        <router-link to="/servicios" class="btn btn-light btn-lg mt-3">Ver servicios</router-link>
      </div>
    </section>
  </div> -->
  <div class="container">
    <Carousel />
  </div>

  <div class="container home">
    <div class="row my-5">
      <div class="col-12 text-start text-white ">
        <p class=" text-start ">We are a competitive restoration company with a highly trained staff. This
          allows us to offer customized solutions for small, medium, and large projects in the construction and
          maintenance of facades and buildings.
        </p>
        <br>
        <ul class=" list-group-flush">
          <li class="list-group-item">Innovation and development</li>
          <li class="list-group-item">Specialized resources</li>
          <li class="list-group-item">Structural safety</li>
          <li class="list-group-item">Comprehensive rehabilitation</li>
        </ul>

        <p>
          We work with technical skill, expertise, and commitment to preserve the lifespan of each building.
        </p>
      </div>
      

    </div>
    <div class="row mt-3">
  <div class="col-md-4 col-6">
    <div class="card">
      <img class="card-img-top" src="/src/assets/terraza.jpeg" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Our workforce is trained and qualified to perform every stage of a roofing project.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-6">
    <div class="card">
      <img class="card-img-top" src="/src/assets/fachada2.jpeg" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Specialized in facade maintenance and restoration.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-6 m-auto mt-5 mt-md-0">
    <div class="card">
      <img class="card-img-top" src="/src/assets/grua.jpeg" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Innovation and development for small, medium and large projects.</p>
      </div>
    </div>
  </div>
</div>
  </div>

</template>
