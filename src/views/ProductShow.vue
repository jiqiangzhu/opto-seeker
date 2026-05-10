<template>
  <div>
    <div v-if="!product" class="page-body">
      <div class="container">
        <p>未找到该产品。<router-link to="/cn/product">返回产品中心</router-link></p>
      </div>
    </div>
    <div v-else>
      <div class="page-hero">
        <div class="container">
          <h1>{{ product.name }}</h1>
          <p class="sub">{{ product.cate }}</p>
        </div>
      </div>
      <div class="page-body">
        <div class="container detail">
          <div class="visual">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="text">
            <p>{{ product.desc }}</p>
            <p class="muted">更多技术参数与报价请联系 {{ site.phone }}，或通过下方按钮提交试用与咨询。</p>
            <router-link class="btn btn-primary" to="/cn/contact">联系与试用</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE, getProductBySlug } from '@/data/site';

export default {
  name: 'ProductShow',
  data() {
    return { site: SITE };
  },
  computed: {
    product() {
      return getProductBySlug(this.$route.params.slug);
    },
  },
  watch: {
    product: {
      immediate: true,
      handler(p) {
        if (p) document.title = `${p.name} — 追光生物科技 | OptoSeeker`;
      },
    },
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.visual {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: #f5f5f5;
}
.text .muted {
  font-size: 0.9rem;
  color: var(--color-muted);
}
.text .muted a {
  color: var(--color-primary);
}
@media (max-width: 768px) {
  .detail {
    grid-template-columns: 1fr;
  }
}
</style>
