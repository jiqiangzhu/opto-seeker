<template>
  <div>
    <div v-if="!valid" class="page-body">
      <div class="container">
        <p>未找到该分类，<router-link to="/cn/product">返回产品中心</router-link></p>
      </div>
    </div>
    <div v-else>
      <div class="page-hero">
        <div class="container">
          <h1>{{ title }}</h1>
          <p class="sub">
            <router-link to="/cn/product">产品中心</router-link>
            / {{ title }}
          </p>
        </div>
      </div>
      <div class="page-body">
        <div class="container">
          <div v-if="list.length" class="card-grid">
            <router-link
              v-for="p in list"
              :key="p.slug"
              class="card product-card"
              :to="'/cn/product/show/' + p.slug"
            >
              <div class="thumb">
                <img :src="p.image" :alt="p.name" />
              </div>
              <div class="card-body">
                <h3>{{ p.name }}</h3>
                <span class="more">了解详情 →</span>
              </div>
            </router-link>
          </div>
          <p v-else class="empty">该分类下暂无已录入的演示产品，请查看其它分类或联系销售获取清单。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCT_CATEGORIES, PRODUCTS_ALL } from '@/data/site';

export default {
  name: 'ProductCategory',
  computed: {
    slug() {
      return this.$route.params.cateSlug;
    },
    valid() {
      return /^cate-\d+$/.test(this.slug);
    },
    title() {
      const c = PRODUCT_CATEGORIES.find((x) => x.id === this.slug);
      return c ? c.name : this.slug;
    },
    list() {
      return PRODUCTS_ALL.filter((p) => p.categoryId === this.slug);
    },
  },
  watch: {
    title() {
      this.updateTitle();
    },
    valid() {
      this.updateTitle();
    },
  },
  mounted() {
    this.updateTitle();
  },
  methods: {
    updateTitle() {
      if (this.valid) {
        document.title = `${this.title} — 追光生物科技 | OptoSeeker`;
      }
    },
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.sub a {
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
.more {
  font-size: 0.85rem;
  color: var(--color-primary);
}
.empty {
  color: var(--color-muted);
  text-align: center;
  padding: 40px;
}
</style>
