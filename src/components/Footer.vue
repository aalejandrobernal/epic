<template>
  <footer class="text-center text-lg-start text-white">

    <!-- Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
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
    </section>

    <!-- Links -->
    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">

          <!-- Company -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Constructora XYZ
            </h6>
            <p>
              Construimos soluciones modernas y seguras para tus proyectos de ingeniería y arquitectura.
            </p>
          </div>

          <!-- Products -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Services</h6>
            <p><a href="#" class="text-reset">Diseño</a></p>
            <p><a href="#" class="text-reset">Construcción</a></p>
            <p><a href="#" class="text-reset">Remodelación</a></p>
            <p><a href="#" class="text-reset">Consultoría</a></p>
          </div>

          <!-- Links -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Enlaces</h6>
            <p><a href="#" class="text-reset">Precios</a></p>
            <p><a href="#" class="text-reset">Proyectos</a></p>
            <p><a href="#" class="text-reset">Soporte</a></p>
            <p><a href="#" class="text-reset">Ayuda</a></p>
          </div>

          <!-- Contact -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>

            <p><i class="fas fa-home me-3"></i> Bogotá, Colombia</p>
            <p><i class="fas fa-envelope me-3"></i> contacto@constructora.com</p>
            <p><i class="fas fa-phone me-3"></i> +57 300 123 4567</p>
            <p><i class="fas fa-print me-3"></i> +57 601 000 0000</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © {{ year }} Constructora XYZ
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