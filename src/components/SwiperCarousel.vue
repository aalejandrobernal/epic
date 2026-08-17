<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import roofing from '@/assets/roofing.jpeg'
import parking from '@/assets/parking.jpeg'
import facade from '@/assets/facade.jpeg'

const slides = [
  {
    image: roofing,
    title: 'Roofing System Replacement',
    description:
      'Professional removal and replacement of existing roofing systems using high-quality, manufacturer-approved materials. We provide complete installation in accordance with manufacturer specifications and include applicable manufacturer warranties for added protection and long-term performance.'
  },
  {
    image: facade,
    title: 'Construction & Restoration',
    description:
      'We provide complete local Law11/FISP services to help building owners maintain compliance and protect their assets.'
  },
  {
    image: parking,
    title: 'Parking Garage Repairs',
    description:
      'Comprehensive repair and restoration of deteriorated concrete, structural elements, and parking garage surfaces.'
  }
]

const modules = [
  Autoplay,
  Pagination,
  EffectFade
]
</script>

<template>
  <section class="hero-carousel">

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
      class="hero-swiper"
    >

      <SwiperSlide
        v-for="slide in slides"
        :key="slide.title"
      >

        <div class="hero-slide">

          <img
            :src="slide.image"
            :alt="slide.title"
            class="hero-image"
          />

          <div class="hero-overlay"></div>

          <div class="hero-content">

            <h1>
              {{ slide.title }}
            </h1>

            <p>
              {{ slide.description }}
            </p>

            <button class="hero-button">
              CLOSER LOOK
            </button>

          </div>

        </div>

      </SwiperSlide>

    </Swiper>

  </section>
</template>

<style scoped>

.hero-carousel {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-swiper {
  width: 100%;
  height: 500px;
}

.hero-slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.35);
}

.hero-content {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 900px;

  text-align: center;

  color: white;

  z-index: 2;
}

.hero-content h1 {
  margin: 0 0 10px;

  font-size: clamp(30px, 4vw, 52px);

  font-weight: 700;

  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
}

.hero-content p {
  margin: 0 auto 20px;

  max-width: 850px;

  font-size: clamp(16px, 2vw, 21px);

  line-height: 1.4;

  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.hero-button {
  border: none;

  background: transparent;

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  text-decoration: underline;

  text-underline-offset: 5px;
}


/* PAGINACIÓN */

:deep(.swiper-pagination-bullet) {
  width: 9px;
  height: 9px;

  background: white;

  opacity: 0.7;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}


/* RESPONSIVE */

@media (max-width: 768px) {

  .hero-swiper {
    height: 400px;
  }

  .hero-content {
    width: 92%;
  }

}

</style>