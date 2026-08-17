<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import Muuri from 'muuri'


import facade from '@/assets/Facade.jpg'
import Roofing from '@/assets/Roofing.jpg'
import Structural from '@/assets/Structural.jpg'
import Parking from '@/assets/Parking.jpeg'

let grid = null

const items = [
  {
    id: 1,
    title: 'Facade restoration',
    address: '_______________________________',
    image: facade
  },
  {
    id: 2,
    title: 'Roofing systems',
    address: '__________________________',
    image: Roofing
  },
  {
    id: 3,
    title: 'Structural repairs',
    address: '____________________________',
    image: Structural
  },
  {
    id: 4,
    title: 'Parking garage restaurations',
    address: '________________________________________________',
    image: Parking
  }
]

function customLayout(
  grid,
  layoutId,
  items,
  width,
  height,
  callback
) {
  const gap = 10
  const slots = []

  // ============================
  // MOBILE
  // ============================

  if (width < 768) {

    const itemHeight = 300

    items.forEach((item, index) => {

      slots.push(
        0,
        index * (itemHeight + gap)
      )

    })

    callback({
      id: layoutId,
      items: items,
      slots: slots,

      styles: {
        width: `${width}px`,
        height: `${items.length * (itemHeight + gap)}px`
      }
    })

    return
  }


  // ============================
  // DESKTOP
  // ============================

  const leftWidth = width * 0.40
  const rightWidth = width * 0.60
  const topHeight = height * 0.44
  const topItemWidth = (rightWidth - gap) / 2

  items.forEach((item) => {

    const id = Number(item.getElement().dataset.id)

    switch (id) {

      case 1:

        slots.push(
          0,
          0
        )

        break


      case 2:

        slots.push(
          leftWidth + gap,
          0
        )

        break


      case 3:

        slots.push(
          leftWidth + gap + topItemWidth + gap,
          0
        )

        break


      case 4:

        slots.push(
          leftWidth + gap,
          topHeight + gap
        )

        break
    }
  })

  callback({
    id: layoutId,
    items: items,
    slots: slots,

    styles: {
      width: `${width}px`,
      height: `${height}px`
    }
  })
}

onMounted(async () => {
  await nextTick()

  const element = document.querySelector('.muuri-grid')

  if (!element) {
    console.error('No se encontró .muuri-grid')
    return
  }

  grid = new Muuri(element, {

    items: '.muuri-item',
    layout: customLayout,
    dragEnabled: false,
    layoutDuration: 400,
    layoutEasing: 'ease',
    layoutOnResize: 150,
    showDuration: 300,
    hideDuration: 300
  })
})

onBeforeUnmount(() => {
  if (grid) {
    grid.destroy()
    grid = null
  }
})
</script>


<template>

  <div class="muuri-wrapper">

    <div class="muuri-grid">

      <div
        v-for="item in items"
        :key="item.id"
        class="muuri-item"
        :data-id="item.id"
      >

        <div class="item-content">

          <img
            :src="item.image"
            :alt="item.title"
          />

          <div class="overlay"></div>

          <div class="info">

            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

.muuri-wrapper {
  width: 100%;
  height: 800px;
}

.muuri-grid {
  position: relative;
  width: 100%;
  height: 100%;
}


/* =========================
   ITEMS
========================= */

.muuri-item {
  position: absolute;
}


/* GRANDE IZQUIERDA */

.muuri-item:nth-child(1) {
  width: 40%;
  height: 100%;
}


/* SUPERIOR IZQUIERDA */

.muuri-item:nth-child(2) {
  width: calc(30% - 5px);
  height: 44%;
}


/* SUPERIOR DERECHA */

.muuri-item:nth-child(3) {
  width: calc(30% - 5px);
  height: 44%;
}


/* INFERIOR */

.muuri-item:nth-child(4) {
  width: calc(60% - 5px);
  height: 56%;
}


/* =========================
   CONTENIDO
========================= */

.item-content {
  position: absolute;

  inset: 5px;

  overflow: hidden;

  background: #ddd;
}


/* =========================
   IMAGEN
========================= */

.item-content img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.5s ease;
}


/* =========================
   HOVER
========================= */

.item-content:hover img {
  transform: scale(1.05);
}


/* =========================
   OSCURECER IMAGEN
========================= */

.overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0)
  );
}


/* =========================
   TEXTO
========================= */

.info {
  position: absolute;

  left: 18px;
  bottom: 18px;

  color: white;

  z-index: 2;
}

.info h3 {
  margin: 0;

  font-size: 21px;

  font-weight: 700;
}

.info p {
  margin: 3px 0 0;

  font-size: 15px;

  opacity: 0.8;
}

@media (max-width: 767px) {

  .muuri-wrapper {
    height: 1240px;
  }

  .muuri-grid {
    width: 100%;
  }

  .muuri-item {
    width: 100% !important;
    height: 300px !important;
  }

  .item-content {
    inset: 0;
  }

  .info {
    left: 18px;
    bottom: 18px;
  }

  .info h3 {
    font-size: 20px;
  }

  .info p {
    font-size: 14px;
  }
}

</style>