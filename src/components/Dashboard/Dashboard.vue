<template>
  <div class="dashboard" v-if="!selectedDistrict">
    <!-- Welcome Message -->
    <div class="dashboard__header">
      <h1>Welcome to Gilgit Tour Guide</h1>
      <p>Explore the beauty of Gilgit-Baltistan with us..!</p>
    </div>

    <!-- Card Grid -->
    <div class="dashboard__cards">
      <div v-for="(card, index) in cards" :key="index" class="dashboard__card">
        <div class="card__header">
          <h3>{{ card.title }}</h3>
          <span :class="['card__change', card.change > 0 ? 'up' : 'down']">
            {{ card.change > 0 ? '+' : '' }}{{ card.change }}%
          </span>
        </div>
        <div class="card__value">{{ card.value }}</div>
        <div class="card__subtitle">{{ card.subtitle }}</div>
      </div>
    </div>

    <!-- Explore Districts Section -->
    <div class="districts__section">
      <h2 class="section__title">Explore Districts</h2>
      <div class="districts__marquee">
        <div class="marquee__track" ref="marquee">
          <div
            v-for="(district, index) in [...districts, ...districts]"
            :key="index"
            class="district__card"
            @mouseenter="pauseMarquee"
            @mouseleave="startMarquee"
          >
            <img :src="district.image" :alt="district.name" />
            <div class="overlay">
              <h3>{{ district.name }}</h3>
              <Button label="Explore" severity="help" @click.stop="openDistrict(district.name)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div>
    <!-- <h2 class="section__title">Unique Products of every District</h2> -->
    <div>

    </div>
   </div>
  <!-- Selected District Component -->
  <Ghizer
    v-if="selectedDistrict === 'Ghizer'"
    @back="selectedDistrict = null"
  />
</template>

<script setup>
import { ref } from 'vue'
import HunzaImg from '../../assets/Hunza.jpg'
import GhizerImg from '../../assets/Ghizer.jpg'
import SkarduIMG from '../../assets/skrdu.webp'
import AstoreImg from '../../assets/astore.jpg'
import NagarImg from '../../assets/Nagar.jpg'
import ShigarImg from '../../assets/shigar.jpg'
import KharmangImg from '../../assets/kharmang.jpg'
import DiamarImg from '../../assets/Diamar.jpg'
import GilgitImg from '../../assets/Gilgit.jpg'
import GhancheImg from '../../assets/Ghanche.jpg'
import Button from 'primevue/button'
import Ghizer from '../Disticts/Ghizer.vue'

const cards = [
  { title: 'Total Tourists', value: '18,450', subtitle: 'This Year', change: 45 },
  { title: 'Picnic Points', value: '15', subtitle: 'Active Now', change: 0 },
  { title: 'Bookings', value: '1,200', subtitle: 'This Month', change: -8 },
  { title: 'Guides Available', value: '45', subtitle: 'Local Experts', change: 4 },
]

const districts = [
  { name: 'Gilgit', image: GilgitImg },
  { name: 'Hunza', image: HunzaImg },
  { name: 'Skardu', image: SkarduIMG },
  { name: 'Ghizer', image: GhizerImg },
  { name: 'Ghanche', image: GhancheImg },
  { name: 'Shigar', image: ShigarImg },
  { name: 'Kharmang', image: KharmangImg },
  { name: 'Astore', image: AstoreImg },
  { name: 'Nagar', image: NagarImg },
  { name: 'Diamer', image: DiamarImg },
]

const marquee = ref(null)
const selectedDistrict = ref(null)

const openDistrict = (districtName) => {
  selectedDistrict.value = districtName
}

const pauseMarquee = () => {
  if (marquee.value) marquee.value.style.animationPlayState = 'paused'
}

const startMarquee = () => {
  if (marquee.value) marquee.value.style.animationPlayState = 'running'
}
</script>

<style scoped>
.dashboard {
  background: #f5f6fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dashboard__header {
  text-align: center;
  margin-bottom: 40px;
}

.dashboard__header h1 {
  font-size: 28px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.dashboard__header p {
  font-size: 16px;
  color: #7f8c8d;
}

.dashboard__cards {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.dashboard__card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease;
  width: 250px;
}

.dashboard__card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.card__header h3 {
  margin: 0;
  font-size: 16px;
  color: #34495e;
}

.card__change {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.card__change.up {
  background-color: #2ecc71;
}

.card__change.down {
  background-color: #e74c3c;
}

.card__value {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
}

.card__subtitle {
  font-size: 14px;
  color: #95a5a6;
  margin-top: 8px;
}

.districts__section {
  margin-top: 40px;
  position: relative;
}

.section__title {
  font-size: 22px;
  text-align: center;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.districts__marquee {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: scroll-left 60s linear infinite;
  animation-play-state: running;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.district__card {
  flex: 0 0 auto;
  width: 300px;
  height: 250px;
  margin-right: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.district__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.4s ease;
}

.district__card:hover img {
  filter: blur(2px) brightness(0.7);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.district__card:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 20px;
  font-weight: bold;
}

.overlay p {
  font-size: 14px;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
