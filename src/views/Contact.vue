<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>联系我们</h1>
        <p class="sub">试用申请 · 技术支持 · 商务合作</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container grid">
        <div class="card-box">
          <h2>联系方式</h2>
          <p><strong>热线（{{ site.phoneHours }}）</strong></p>
          <p>
            <a class="phone" :href="'tel:' + site.phone.replace(/-/g, '')">{{ site.phone }}</a>
          </p>
          <p><strong>地址</strong></p>
          <p>{{ site.address }}</p>
        </div>
        <form class="card-box form" @submit.prevent="onSubmit">
          <h2>在线留言（演示）</h2>
          <label>
            <span>姓名</span>
            <input v-model="form.name" type="text" required placeholder="您的称呼" />
          </label>
          <label>
            <span>单位</span>
            <input v-model="form.org" type="text" placeholder="院校 / 公司" />
          </label>
          <label>
            <span>手机或邮箱</span>
            <input v-model="form.contact" type="text" required placeholder="便于我们回复" />
          </label>
          <label>
            <span>需求说明</span>
            <textarea v-model="form.msg" rows="4" placeholder="感兴趣的产品或应用场景" />
          </label>
          <button type="submit" class="btn btn-primary">提交（本地演示）</button>
          <p v-if="sent" class="ok">已记录（仅前端提示，未发送服务器）。</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE } from '@/data/site';

export default {
  name: 'Contact',
  data() {
    return {
      site: SITE,
      sent: false,
      form: {
        name: '',
        org: '',
        contact: '',
        msg: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.sent = true;
    },
  },
};
</script>

<style scoped>
.sub {
  color: var(--color-muted);
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 28px;
  align-items: start;
}
.card-box {
  background: var(--color-bg);
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid rgba(10, 95, 74, 0.08);
}
.card-box h2 {
  margin-bottom: 16px;
  color: var(--color-primary);
}
.phone {
  font-size: 1.5rem;
  font-weight: 600;
}
.form label {
  display: block;
  margin-bottom: 14px;
}
.form span {
  display: block;
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 6px;
}
.form input,
.form textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}
.ok {
  margin-top: 12px;
  color: var(--color-primary);
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
