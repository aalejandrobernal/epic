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
  <div>
    <Carousel />
  </div>

  <div class="container home">
    <div class="row mt-5">
      <div class="col-7 text-start text-white ">
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
      <div class="col-5">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" src="/src/assets/terraza.jpeg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Our workforce is trained and qualified to perform every stage of a roofing project.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
