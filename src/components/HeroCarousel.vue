<template>
  <section class="hero">
    <div class="slides" @mouseenter="pause" @mouseleave="resume">
      <transition-group name="fade">
        <div v-for="(s, i) in slides" v-show="i === index" :key="s.id" class="slide">
          <div class="slide-bg" :style="{ backgroundImage: `url(${s.image})` }" />
          <div class="slide-content container">
            <p class="series">{{ s.title }}</p>
            <h2>{{ s.subtitle }}</h2>
            <router-link class="btn btn-primary" :to="s.link">了解详情</router-link>
          </div>
        </div>
      </transition-group>
    </div>
    <button type="button" class="arrow prev" aria-label="上一张" @click="prev">‹</button>
    <button type="button" class="arrow next" aria-label="下一张" @click="next">›</button>
    <div class="dots">
      <button
        v-for="(s, i) in slides"
        :key="'d' + s.id"
        type="button"
        :class="{ active: i === index }"
        :aria-label="'第' + (i + 1) + '张'"
        @click="index = i"
      />
    </div>
  </section>
</template>

<script>
import { BANNER_SLIDES } from '@/data/site';

export default {
  name: 'HeroCarousel',
  data() {
    return {
      slides: BANNER_SLIDES,
      index: 0,
      timer: null,
    };
  },
  mounted() {
    this.resume();
  },
  beforeDestroy() {
    this.pause();
  },
  methods: {
    next() {
      this.index = (this.index + 1) % this.slides.length;
    },
    prev() {
      this.index = (this.index - 1 + this.slides.length) % this.slides.length;
    },
    pause() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    resume() {
      this.pause();
      this.timer = setInterval(this.next, 5500);
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  height: min(72vh, 560px);
  background: #0a1f1a;
  overflow: hidden;
}
.slides,
.slide {
  position: absolute;
  inset: 0;
}
.slide-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.45;
}
.slide-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
}
.series {
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  opacity: 0.95;
  margin-bottom: 8px;
}
.slide-content h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  max-width: 520px;
  margin-bottom: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}
.arrow:hover {
  background: rgba(255, 255, 255, 0.35);
}
.prev {
  left: 16px;
}
.next {
  right: 16px;
}
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 8px;
}
.dots button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  padding: 0;
}
.dots button.active {
  background: #fff;
  transform: scale(1.2);
}
</style>
