<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>资源中心</h1>
        <p class="sub">科普文章、论文、文档下载与客户案例</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container grid">
        <router-link class="tile" to="/cn/resource">
          <h2>科普 BLOG</h2>
          <p>技术科普与行业洞察（演示站内容与官网同步可由 CMS 接入）。</p>
        </router-link>
        <router-link class="tile" to="/cn/resource/papers">
          <h2>产品发表论文</h2>
          <p>基于追光仪器的学术成果索引。</p>
        </router-link>
        <router-link class="tile" to="/cn/resource/download">
          <h2>应用文档下载</h2>
          <p>手册、应用笔记与软件资源。</p>
        </router-link>
        <router-link class="tile" to="/cn/resource/cases">
          <h2>客户案例分享</h2>
          <p>典型用户场景与实施经验。</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceIndex',
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.tile {
  display: block;
  padding: 28px 22px;
  background: var(--color-bg);
  border-radius: var(--radius);
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(10, 95, 74, 0.1);
  transition: box-shadow 0.2s, transform 0.2s;
}
.tile:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}
.tile h2 {
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 10px;
}
.tile p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
}
</style>
