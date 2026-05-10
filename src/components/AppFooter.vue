<template>
  <footer class="footer">
    <div class="footer-top container">
      <div class="contact-block">
        <p class="label">联系方式（{{ site.phoneHours }}）</p>
        <a class="phone" :href="'tel:' + site.phone.replace(/-/g, '')">{{ site.phone }}</a>
      </div>
      <div class="contact-block">
        <p class="label">联系地址</p>
        <p class="addr">{{ site.address }}</p>
      </div>
      <div class="qrs">
        <figure>
          <img :src="site.wechatQr" alt="追光生物公众号" />
          <figcaption>追光生物公众号</figcaption>
        </figure>
        <figure>
          <img :src="site.bilibiliQr" alt="哔哩哔哩" />
          <figcaption>哔哩哔哩</figcaption>
        </figure>
      </div>
    </div>

    <div class="footer-links container">
      <div v-for="col in columns" :key="col.title" class="col">
        <h4>
          <router-link :to="col.to">{{ col.title }}</router-link>
        </h4>
        <router-link v-for="l in col.links" :key="l.to + l.label" :to="l.to">{{ l.label }}</router-link>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>
        Copyright ©2025–2026 OptoSeeker 追光生物 版权所有
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备2024299100号</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { SITE } from '@/data/site';

export default {
  name: 'AppFooter',
  data() {
    return {
      site: SITE,
      columns: [
        {
          title: '关于我们',
          to: '/cn/about',
          links: [
            { label: '关于我们', to: '/cn/about#aboutP1' },
            { label: '发展历程', to: '/cn/about#aboutP2' },
            { label: '经营团队', to: '/cn/about#aboutP6' },
            { label: '荣誉资质', to: '/cn/about#aboutP3' },
            { label: '合作院校', to: '/cn/about#aboutP5' },
          ],
        },
        {
          title: '产品中心',
          to: '/cn/product',
          links: [
            { label: '光电微流控平台', to: '/cn/product/cate-2' },
            { label: '数字微流控平台', to: '/cn/product/cate-3' },
            { label: '显微镜配件', to: '/cn/product/cate-4' },
            { label: '在售芯片', to: '/cn/product/cate-8' },
            { label: '定制化服务', to: '/cn/product/cate-6' },
          ],
        },
        {
          title: '解决方案',
          to: '/cn/solution',
          links: [
            { label: '抗体药开发', to: '/cn/solution/antibody-drug-development' },
            { label: '细胞株开发', to: '/cn/solution/cell-line-development' },
            { label: '细胞基因治疗（CGT）', to: '/cn/solution/cell-therapy' },
            { label: '光遗传学', to: '/cn/solution/photogenetics' },
            { label: '微纳操控', to: '/cn/solution/micro-nano-manipulation' },
            { label: '化学分析', to: '/cn/solution/chemical-analysis' },
          ],
        },
        {
          title: '资源中心',
          to: '/cn/resource',
          links: [
            { label: '科普BLOG', to: '/cn/resource' },
            { label: '产品发表论文', to: '/cn/resource/papers' },
            { label: '应用文档下载', to: '/cn/resource/download' },
            { label: '客户案例分享', to: '/cn/resource/cases' },
          ],
        },
        {
          title: '新闻资讯',
          to: '/cn/news/index',
          links: [
            { label: '公司新闻', to: '/cn/news/index' },
            { label: '展会新闻', to: '/cn/news/exhibition' },
          ],
        },
        {
          title: '联系我们',
          to: '/cn/contact',
          links: [
            { label: '试用申请', to: '/cn/contact' },
            { label: '加入我们', to: '/cn/contact/job' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: #0d3d32;
  color: rgba(255, 255, 255, 0.88);
  padding-top: 48px;
}
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1.2fr auto;
  gap: 32px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.label {
  font-size: 0.85rem;
  opacity: 0.75;
  margin-bottom: 8px;
}
.phone {
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
}
.addr {
  margin: 0;
  line-height: 1.7;
}
.qrs {
  display: flex;
  gap: 24px;
}
.qrs figure {
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
}
.qrs img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 8px;
}
.footer-links {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 36px 0;
}
.col h4 {
  font-size: 0.95rem;
  margin-bottom: 14px;
}
.col h4 a {
  color: #fff;
}
.col a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin-bottom: 8px;
}
.col a:hover {
  color: #fff;
}
.footer-bottom {
  padding: 20px 0 32px;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.65;
}
.footer-bottom a {
  color: inherit;
  margin-left: 8px;
}

@media (max-width: 1023px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
