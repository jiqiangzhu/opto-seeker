<template>
  <div class="home">
    <HeroCarousel />

    <section class="intro section">
      <div class="container intro-inner">
        <div class="intro-text">
          <p class="brand">{{ site.brand }}</p>
          <h2>{{ site.slogan }}</h2>
          <p>{{ site.intro }}</p>
          <router-link class="btn btn-primary" to="/cn/about">了解我们</router-link>
        </div>
      </div>
    </section>

    <section class="section bg">
      <div class="container">
        <p class="en-label">Products</p>
        <h2 class="section-title">产品中心</h2>
        <p class="section-sub">高端生命科学仪器与微流控平台</p>
        <div class="card-grid">
          <router-link
            v-for="p in products"
            :key="p.id"
            class="card product-card"
            :to="'/cn/product/show/' + p.id"
          >
            <div class="thumb">
              <img :src="p.image" :alt="p.name" />
            </div>
            <div class="card-body">
              <h3>{{ p.name }}</h3>
              <p class="cate">{{ p.cate }}</p>
              <span class="more">了解详情 →</span>
            </div>
          </router-link>
        </div>
        <div class="center">
          <router-link class="btn btn-outline" to="/cn/product">查看更多</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="en-label">Areas of interest</p>
        <h2 class="section-title">解决方案</h2>
        <p class="section-sub">面向生物医药与前沿科研的应用场景</p>
        <div class="sol-grid">
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
              <h3>{{ s.title }}</h3>
              <p>{{ s.excerpt }}</p>
              <span class="more">了解更多 →</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section bg">
      <div class="container">
        <p class="en-label">News</p>
        <h2 class="section-title">新闻中心</h2>
        <div class="news-grid">
          <router-link
            v-for="n in newsPreview"
            :key="n.id"
            class="news-card"
            :to="'/cn/news/show/' + n.id"
          >
            <div class="news-thumb">
              <img :src="n.image" :alt="n.title" />
            </div>
            <div class="news-body">
              <time>{{ n.date }}</time>
              <h3>{{ n.title }}</h3>
              <p>{{ n.excerpt }}</p>
              <span class="more">了解更多</span>
            </div>
          </router-link>
        </div>
        <div class="center">
          <router-link class="btn btn-outline" to="/cn/news/index">更多新闻</router-link>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container cta-inner">
        <div>
          <h2>预约试用与方案咨询</h2>
          <p>工作日 {{ site.phoneHours.replace('（', '').replace('）', '') }} 热线 {{ site.phone }}</p>
        </div>
        <router-link class="btn btn-primary" to="/cn/contact">联系我们</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeroCarousel from '@/components/HeroCarousel.vue';
import { SITE, PRODUCTS_HOME, SOLUTIONS, NEWS_ITEMS } from '@/data/site';

export default {
  name: 'Home',
  components: { HeroCarousel },
  data() {
    return {
      site: SITE,
      products: PRODUCTS_HOME,
      solutions: SOLUTIONS,
      newsPreview: NEWS_ITEMS.slice(0, 4),
    };
  },
};
</script>

<style scoped>
.section {
  padding: 64px 0;
}
.section.bg {
  background: var(--color-bg);
}
.intro-inner {
  text-align: center;
  max-width: 900px;
}
.brand {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 8px;
}
.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.intro-text p {
  color: var(--color-muted);
  text-align: justify;
  text-align-last: center;
}
.en-label {
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 4px;
}
.product-card {
  text-decoration: none;
  color: inherit;
  display: block;
}
.thumb {
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #f0f0f0;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card h3 {
  font-size: 1rem;
  margin-bottom: 6px;
}
.cate {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 10px;
}
.more {
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 500;
}
.center {
  text-align: center;
  margin-top: 36px;
}
.sol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}
.sol-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 16px;
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-decoration: none;
  color: inherit;
  align-items: start;
  transition: transform 0.2s;
}
.sol-card:hover {
  transform: translateY(-3px);
}
.sol-cover {
  border-radius: 6px;
  overflow: hidden;
  height: 100px;
}
.sol-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sol-body h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}
.sol-body p {
  font-size: 0.88rem;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.news-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  text-decoration: none;
  color: inherit;
}
.news-thumb {
  aspect-ratio: 16/9;
  overflow: hidden;
}
.news-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-body {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.news-body time {
  font-size: 0.8rem;
  color: var(--color-muted);
}
.news-body h3 {
  font-size: 1rem;
  margin: 8px 0;
  line-height: 1.4;
}
.news-body p {
  font-size: 0.88rem;
  color: var(--color-muted);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cta {
  background: linear-gradient(135deg, var(--color-primary), #063d30);
  color: #fff;
  padding: 48px 0;
}
.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.cta h2 {
  color: #fff;
  margin-bottom: 8px;
}
.cta .btn-primary {
  box-shadow: none;
}

@media (max-width: 600px) {
  .sol-card {
    grid-template-columns: 1fr;
  }
  .sol-cover {
    height: 160px;
  }
}
</style>
