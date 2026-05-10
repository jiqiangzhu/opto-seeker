<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>加入我们</h1>
        <p class="sub">与追光一起推动国产高端生命科学仪器</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container prose">
        <p>
          我们欢迎光学、微流控、机械电子、细胞生物学与软件工程等领域人才。简历投递与在招职位请以官网 HR 渠道或招聘平台为准；
          本演示页不连接招聘系统。
        </p>
        <p>
          合作咨询请致电 <a :href="'tel:' + site.phone.replace(/-/g, '')">{{ site.phone }}</a>
          或发送邮件至贵司对接的销售 / 市场联系人。
        </p>
        <router-link class="btn btn-outline" to="/cn/contact">转往联系与试用</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE } from '@/data/site';

export default {
  name: 'Job',
  data() {
    return { site: SITE };
  },
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
