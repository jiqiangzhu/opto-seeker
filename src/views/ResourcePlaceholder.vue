<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>{{ heading }}</h1>
        <p class="sub">
          <router-link to="/cn/resource">资源中心</router-link>
          / {{ heading }}
        </p>
      </div>
    </div>
    <div class="page-body">
      <div class="container prose">
        <p>
          本页为静态演示占位：正式环境可对接官网 CMS 或文件服务，展示论文列表、下载链接与案例详情。
        </p>
        <p>
          若需获取完整资料，请致电 <a :href="'tel:' + site.phone.replace(/-/g, '')">{{ site.phone }}</a>
          或前往 <router-link to="/cn/contact">联系我们</router-link> 留言。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE } from '@/data/site';

const TITLES = {
  'resource-papers': '产品发表论文',
  'resource-download': '应用文档下载',
  'resource-cases': '客户案例分享',
};

export default {
  name: 'ResourcePlaceholder',
  data() {
    return { site: SITE };
  },
  computed: {
    heading() {
      return TITLES[this.$route.name] || '资源';
    },
  },
  watch: {
    heading: {
      immediate: true,
      handler(h) {
        document.title = `${h} — 追光生物科技 | OptoSeeker`;
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
.prose {
  max-width: 720px;
  line-height: 1.75;
}
</style>
