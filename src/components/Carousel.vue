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
        <img src="../assets/diane-picchiottino-xvIEtL3R84Q-unsplash.jpg" class="d-block w-100" />
        <!-- Capa oscura que cubre toda la imagen -->
        <div class="overlay-dark"></div>
        <!-- Texto centrado abajo -->
        <div class="carousel-caption-custom">
          <h1>We are<br>Alliance Restoration Group</h1>
          <p>Discover our vast knowledge in construction</p>
        </div>
      </div>

      <div class="carousel-item position-relative">
        <img src="../assets/diane-picchiottino-22g_IfzvabQ-unsplash.jpg" class="d-block w-100" />
        <div class="overlay-dark"></div>
        <div class="carousel-caption-custom">
          <h2>Durability and aesthetics</h2>
          <p>Every facade tells a story. We help ensure it isn't erased.</p>
        </div>
      </div>

      <div class="carousel-item position-relative">
        <img src="../assets/nick-night-M3FDtkhmMFQ-unsplash.jpg" class="d-block w-100" />
        <div class="overlay-dark"></div>
        <div class="carousel-caption-custom">
          <h2>Structural safety</h2>
          <p>Committed to safety, aesthetics and durability.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No necesitas lógica extra 👍
</script>

<style scoped>

</style>