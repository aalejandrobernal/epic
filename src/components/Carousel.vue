<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    
    <!-- Indicadores -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
    </div>

    <!-- Slides -->
    <div class="carousel-inner">
      <div class="carousel-item active position-relative">
        <img src="../assets/WhatsApp Image 2025-12-09 at 5.24.45 PM (6).jpg" class="d-block w-100" />
        <!-- Capa oscura que cubre toda la imagen -->
        <div class="overlay-dark"></div>
        <!-- Texto centrado abajo -->
        <div class="carousel-caption-custom">
          <h1>We are<br>EPICBUILD CONSTRUCTIONS INC</h1>
          <p>Descubre nuestro vasto conocimiento marítimo</p>
        </div>
      </div>

      <div class="carousel-item position-relative">
        <img src="../assets/WhatsApp Image 2025-12-09 at 5.24.45 PM (3).jpg" class="d-block w-100" />
        <div class="overlay-dark"></div>
        <div class="carousel-caption-custom">
          <h2>Recursos especializados</h2>
          <p>Accede a documentos técnicos y publicaciones</p>
        </div>
      </div>

      <div class="carousel-item position-relative">
        <img src="../assets/WhatsApp Image 2025-12-09 at 5.24.47 PM (3).jpg" class="d-block w-100" />
        <div class="overlay-dark"></div>
        <div class="carousel-caption-custom">
          <h2>Innovación y desarrollo</h2>
          <p>Impulsando el futuro del sector portuario</p>
        </div>
      </div>
    </div>

 
   

  </div>
</template>

<script setup>
// No necesitas lógica extra 👍
</script>

<style scoped>
/* Contenedor relativo para posicionar la capa oscura */
.position-relative {
  position: relative;
}

/* Capa oscura que cubre toda la imagen */
.overlay-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Ajusta la opacidad: 0.5 = 50%, 0.8 = 80% */
  z-index: 1;
}

/* Contenedor del texto centrado en la parte inferior */
.carousel-caption-custom {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  z-index: 2;
  padding: 20px;
}

/* Estilos del texto */
.carousel-caption-custom h1,
.carousel-caption-custom h2 {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.carousel-caption-custom p {
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Para móviles */
@media (max-width: 768px) {
  .carousel-caption-custom {
    bottom: 5%;
    padding: 10px;
  }
  
  .carousel-caption-custom h1 {
    font-size: 1.2rem;
  }
  
  .carousel-caption-custom h2 {
    font-size: 1rem;
  }
  
  .carousel-caption-custom p {
    font-size: 0.8rem;
  }
}
</style>