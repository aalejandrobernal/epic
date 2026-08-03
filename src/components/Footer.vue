<template>
  <footer class="text-center text-lg-start text-white ">

    <!-- Social media -->
    <!-- <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block">
        <span>Conéctate con nosotros en redes sociales:</span>
      </div>

      <div>
        <a href="#" class="me-4 text-reset"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
        <a href="#" class="me-4 text-reset"><i class="fab fa-google"></i></a>
        <a href="#" class="me-4 text-reset"><i class="fab fa-instagram"></i></a>
        <a href="#" class="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="me-4 text-reset"><i class="fab fa-github"></i></a>
      </div>
    </section> -->
    <hr>

    <!-- Links -->
    <section>
      <div class="container text-center text-md-start mt-5 pb-3">
        <div class="row mt-3">

          <!-- Company -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Alliance Restoration Group
            </h6>
            <p>
              We build modern and safe solutions for your engineering and architecture projects.
            </p>
          </div>

          <!-- Products -->
          <!-- <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Services</h6>
            <p><a href="#" class="text-reset">Diseño</a></p>
            <p><a href="#" class="text-reset">Construcción</a></p>
            <p><a href="#" class="text-reset">Remodelación</a></p>
            <p><a href="#" class="text-reset">Consultoría</a></p>
          </div> -->

          <!-- Links
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Enlaces</h6>
            <p><a href="#" class="text-reset">Precios</a></p>
            <p><a href="#" class="text-reset">Proyectos</a></p>
            <p><a href="#" class="text-reset">Soporte</a></p>
            <p><a href="#" class="text-reset">Ayuda</a></p>
          </div> -->

          <!-- Contact -->
          <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>

            <p><i class="fas fa-home me-3"></i>New York, EE. UU</p>
            <a href="mailto:info@alliancerestorationgrp.com"><i class="fas fa-envelope me-3"></i> info@alliancerestorationgrp.com</a>
            <p><i class="fas fa-phone me-3"></i> +1 (347) 479-9048</p>
            <p><i class="fas fa-phone me-3"></i> +1 (347) 456 4714</p>            
          </div>

        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="text-center p-1" style="background-color: #04295E">
      © {{ year }} Alliance Restoration Group. All rights reserved. <br>
       <p style="font-size:.7rem">Designed and developed by <strong>James Nuñez</strong></p>
    </div>

  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  margin-top: 50px;
}
</style>