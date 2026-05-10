<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>产品中心</h1>
        <p class="sub">光电微流控 · 数字微流控 · 显微镜配件与芯片</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container">
        <div class="cate-row">
          <router-link v-for="c in categories" :key="c.id" class="cate-chip" :to="c.path">{{ c.name }}</router-link>
        </div>
        <div class="card-grid" style="margin-top: 32px">
          <router-link
            v-for="p in products"
            :key="p.slug"
            class="card product-card"
            :to="'/cn/product/show/' + p.slug"
          >
            <div class="thumb">
              <img :src="p.image" :alt="p.name" />
            </div>
            <div class="card-body">
              <h3>{{ p.name }}</h3>
              <p class="cate">{{ p.category }}</p>
              <span class="more">了解详情 →</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCT_CATEGORIES, PRODUCTS_ALL } from '@/data/site';

export default {
  name: 'ProductIndex',
  data() {
    return {
      categories: PRODUCT_CATEGORIES,
      products: PRODUCTS_ALL,
    };
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.cate-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.cate-chip {
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.9rem;
  border: 1px solid rgba(10, 95, 74, 0.15);
}
.cate-chip:hover {
  background: rgba(10, 95, 74, 0.08);
  color: var(--color-primary);
}
.product-card {
  text-decoration: none;
  color: inherit;
  display: block;
}
.thumb {
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #eee;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cate {
  font-size: 0.85rem;
  color: var(--color-muted);
}
.more {
  font-size: 0.85rem;
  color: var(--color-primary);
}
</style>
