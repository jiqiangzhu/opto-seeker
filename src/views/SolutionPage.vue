<template>
  <div>
    <div v-if="!sol" class="page-body">
      <div class="container">
        <p>未找到该方案。<router-link to="/cn/solution">返回解决方案</router-link></p>
      </div>
    </div>
    <div v-else>
      <div class="page-hero">
        <div class="container">
          <h1>{{ sol.title }}</h1>
          <p class="sub">
            <router-link to="/cn/solution">解决方案</router-link>
            / {{ sol.title }}
          </p>
        </div>
      </div>
      <div class="page-body">
        <div class="container article">
          <div class="hero-img">
            <img :src="sol.cover" :alt="sol.title" />
          </div>
          <p class="lead">{{ sol.excerpt }}</p>
          <p>
            追光生物提供基于 OptoBot® 与 DropletBot® 等平台的完整工作流支持，涵盖实验设计、现场培训与数据解读。
            若需针对贵司场景的定制化验证，欢迎通过热线 {{ site.phone }} 或在线表单与我们联系。
          </p>
          <router-link class="btn btn-primary" to="/cn/contact">联系与试用</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE, getSolutionBySlug } from '@/data/site';

export default {
  name: 'SolutionPage',
  data() {
    return { site: SITE };
  },
  computed: {
    sol() {
      return getSolutionBySlug(this.$route.params.slug);
    },
  },
  watch: {
    sol: {
      immediate: true,
      handler(s) {
        if (s) document.title = `${s.title} — 追光生物科技 | OptoSeeker`;
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
.sub a {
  color: var(--color-primary);
}
.article {
  max-width: 800px;
}
.hero-img {
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
}
.lead {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
}
</style>
