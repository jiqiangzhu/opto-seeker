<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>公司新闻</h1>
        <p class="sub">追光生物动态与媒体报道</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container list">
        <article v-for="n in news" :key="n.id" class="item">
          <router-link :to="'/cn/news/show/' + n.id" class="thumb">
            <img :src="n.image" :alt="n.title" />
          </router-link>
          <div class="body">
            <time>{{ n.date }}</time>
            <h2>
              <router-link :to="'/cn/news/show/' + n.id">{{ n.title }}</router-link>
            </h2>
            <p>{{ n.excerpt }}</p>
            <router-link class="more" :to="'/cn/news/show/' + n.id">了解更多 →</router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { NEWS_ITEMS } from '@/data/site';

export default {
  name: 'NewsIndex',
  data() {
    return { news: NEWS_ITEMS };
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.list {
  max-width: 900px;
  margin: 0 auto;
}
.item {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid #eee;
}
.thumb {
  border-radius: var(--radius);
  overflow: hidden;
  display: block;
  aspect-ratio: 16/10;
  background: #f0f0f0;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.body time {
  font-size: 0.85rem;
  color: var(--color-muted);
}
.body h2 {
  font-size: 1.15rem;
  margin: 8px 0 12px;
  line-height: 1.4;
}
.body h2 a {
  color: inherit;
}
.body h2 a:hover {
  color: var(--color-primary);
}
.body p {
  font-size: 0.92rem;
  color: var(--color-muted);
  margin-bottom: 12px;
}
.more {
  font-size: 0.9rem;
  font-weight: 500;
}
@media (max-width: 640px) {
  .item {
    grid-template-columns: 1fr;
  }
}
</style>
