<template>
  <div class="wrap">
    <div class="container center">
      <h1>404</h1>
      <p>页面不存在或已移动。</p>
      <router-link class="btn btn-primary" to="/cn">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.wrap {
  padding: 100px 0;
}
.center {
  text-align: center;
}
h1 {
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 8px;
}
</style>
