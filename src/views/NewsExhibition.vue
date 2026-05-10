<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>展会新闻</h1>
        <p class="sub">展会与活动资讯</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container prose">
        <p>
          演示站暂未单独拆分「展会新闻」数据，您可在
          <router-link to="/cn/news/index">公司新闻</router-link>
          中查看含 BIO CHINA、医疗器械展等展会相关报道。
        </p>
        <p>正式部署时可按标签或分类接口拉取展会类文章列表。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsExhibition',
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.prose {
  max-width: 720px;
  line-height: 1.75;
}
</style>
