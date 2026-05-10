<template>
  <div>
    <div v-if="!item" class="page-body">
      <div class="container">
        <p>未找到该新闻。<router-link to="/cn/news/index">返回新闻列表</router-link></p>
      </div>
    </div>
    <div v-else>
      <div class="page-hero">
        <div class="container">
          <time class="date">{{ item.date }}</time>
          <h1>{{ item.title }}</h1>
        </div>
      </div>
      <div class="page-body">
        <div class="container article">
          <div class="cover">
            <img :src="item.image" :alt="item.title" />
          </div>
          <p class="lead">{{ item.excerpt }}</p>
          <p>
            本文为演示站摘要版本，完整正文可与官网 CMS 或静态 Markdown 同步。转载与商务合作请联系
            {{ site.phone }}。
          </p>
          <router-link to="/cn/news/index">← 返回新闻列表</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE, getNewsById } from '@/data/site';

export default {
  name: 'NewsShow',
  data() {
    return { site: SITE };
  },
  computed: {
    item() {
      return getNewsById(this.$route.params.id);
    },
  },
  watch: {
    item: {
      immediate: true,
      handler(n) {
        if (n) document.title = `${n.title} — 追光生物科技 | OptoSeeker`;
      },
    },
  },
};
</script>

<style scoped>
.date {
  display: block;
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-bottom: 8px;
}
.article {
  max-width: 800px;
}
.cover {
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
}
.lead {
  font-size: 1.05rem;
  line-height: 1.75;
}
</style>
