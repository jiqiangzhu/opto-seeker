<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>解决方案</h1>
        <p class="sub">抗体药、细胞株、CGT、光遗传学、微纳操控与化学分析</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container sol-grid">
        <router-link
          v-for="s in solutions"
          :key="s.slug"
          class="sol-card"
          :to="'/cn/solution/' + s.slug"
        >
          <div class="sol-cover">
            <img :src="s.cover" :alt="s.title" />
          </div>
          <div class="sol-body">
            <h2>{{ s.title }}</h2>
            <p>{{ s.excerpt }}</p>
            <span class="more">了解更多 →</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { SOLUTIONS } from '@/data/site';

export default {
  name: 'SolutionIndex',
  data() {
    return { solutions: SOLUTIONS };
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.sol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}
.sol-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}
.sol-card:hover {
  transform: translateY(-4px);
}
.sol-cover {
  aspect-ratio: 16/9;
  overflow: hidden;
}
.sol-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sol-body {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sol-body h2 {
  font-size: 1.2rem;
  margin-bottom: 12px;
}
.sol-body p {
  font-size: 0.92rem;
  color: var(--color-muted);
  flex: 1;
  line-height: 1.65;
}
.more {
  margin-top: 14px;
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
