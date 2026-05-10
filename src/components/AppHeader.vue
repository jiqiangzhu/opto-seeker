<template>
  <header class="header" :class="{ 'is-open': mobileOpen, 'is-scrolled': scrolled }">
    <div class="header-inner container">
      <router-link class="logo" to="/cn" :title="site.name">
        <img :src="site.logo" :alt="site.brand" />
      </router-link>

      <button type="button" class="nav-toggle" aria-label="菜单" @click="mobileOpen = !mobileOpen">
        <span />
        <span />
        <span />
      </button>

      <nav class="nav" :aria-hidden="!mobileOpen && isMobile ? true : false">
        <div v-for="item in nav" :key="item.label" class="nav-item" @mouseenter="hover = item.label" @mouseleave="hover = null">
          <router-link class="nav-link" :to="item.to" @click.native="closeMobile">{{ item.label }}</router-link>
          <div
            v-if="item.children && item.children.length"
            class="dropdown"
            :class="{ show: isMobile || hover === item.label }"
          >
            <router-link
              v-for="c in item.children"
              :key="c.to + c.label"
              class="dropdown-link"
              :to="c.to"
              @click.native="closeMobile"
            >
              {{ c.label }}
            </router-link>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <a class="lang" href="https://m2.optoseeker.com/" target="_blank" rel="noopener">EN</a>
        <button type="button" class="link-btn" @click="$emit('open-login')">登录</button>
      </div>
    </div>
    <div v-if="mobileOpen" class="backdrop" @click="mobileOpen = false" />
  </header>
</template>

<script>
import { SITE } from '@/data/site';

export default {
  name: 'AppHeader',
  data() {
    return {
      site: SITE,
      mobileOpen: false,
      scrolled: false,
      hover: null,
      isMobile: false,
      nav: [
        {
          label: '关于我们',
          to: '/cn/about',
          children: [
            { label: '关于我们', to: '/cn/about#aboutP1' },
            { label: '发展历程', to: '/cn/about#aboutP2' },
            { label: '经营团队', to: '/cn/about#aboutP6' },
            { label: '荣誉资质', to: '/cn/about#aboutP3' },
            { label: '合作院校', to: '/cn/about#aboutP5' },
          ],
        },
        {
          label: '产品中心',
          to: '/cn/product',
          children: [
            { label: '光电微流控平台', to: '/cn/product/cate-2' },
            { label: '数字微流控平台', to: '/cn/product/cate-3' },
            { label: '显微镜配件', to: '/cn/product/cate-4' },
            { label: '在售芯片', to: '/cn/product/cate-8' },
            { label: '定制化服务', to: '/cn/product/cate-6' },
          ],
        },
        {
          label: '解决方案',
          to: '/cn/solution',
          children: [
            { label: '抗体药开发', to: '/cn/solution/antibody-drug-development' },
            { label: '细胞株开发', to: '/cn/solution/cell-line-development' },
            { label: '细胞基因治疗（CGT）', to: '/cn/solution/cell-therapy' },
            { label: '光遗传学', to: '/cn/solution/photogenetics' },
            { label: '微纳操控', to: '/cn/solution/micro-nano-manipulation' },
            { label: '化学分析', to: '/cn/solution/chemical-analysis' },
          ],
        },
        {
          label: '资源中心',
          to: '/cn/resource',
          children: [
            { label: '科普BLOG', to: '/cn/resource' },
            { label: '产品发表论文', to: '/cn/resource/papers' },
            { label: '应用文档下载', to: '/cn/resource/download' },
            { label: '客户案例分享', to: '/cn/resource/cases' },
          ],
        },
        {
          label: '新闻资讯',
          to: '/cn/news/index',
          children: [
            { label: '公司新闻', to: '/cn/news/index' },
            { label: '展会新闻', to: '/cn/news/exhibition' },
          ],
        },
        {
          label: '联系我们',
          to: '/cn/contact',
          children: [
            { label: '试用申请', to: '/cn/contact' },
            { label: '加入我们', to: '/cn/contact/job' },
          ],
        },
      ],
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 8;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1024;
      if (!this.isMobile) this.mobileOpen = false;
    },
    closeMobile() {
      if (this.isMobile) this.mobileOpen = false;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-h);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(10, 95, 74, 0.08);
  transition: box-shadow 0.2s;
}
.header.is-scrolled {
  box-shadow: var(--shadow);
}
.header-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;
}
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.logo img {
  height: 40px;
  width: auto;
}
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
}
.nav {
  display: flex;
  align-items: stretch;
  gap: 4px;
  flex: 1;
  justify-content: center;
}
.nav-item {
  position: relative;
}
.nav-link {
  display: flex;
  align-items: center;
  height: var(--header-h);
  padding: 0 12px;
  color: var(--color-text);
  font-size: 0.95rem;
  white-space: nowrap;
}
.nav-link.router-link-exact-active,
.nav-link.router-link-active {
  color: var(--color-primary);
  font-weight: 600;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  min-width: 200px;
  padding: 10px 0;
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  z-index: 10;
}
.dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.dropdown-link {
  display: block;
  padding: 10px 18px;
  color: var(--color-text);
  font-size: 0.9rem;
}
.dropdown-link:hover {
  background: rgba(10, 95, 74, 0.06);
  color: var(--color-primary);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}
.lang {
  color: var(--color-muted);
  font-size: 0.9rem;
}
.link-btn {
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
}
.link-btn:hover {
  text-decoration: underline;
}
.backdrop {
  display: none;
}

@media (max-width: 1023px) {
  .nav-toggle {
    display: flex;
  }
  .nav {
    position: fixed;
    top: var(--header-h);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-white);
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 16px 20px 40px;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.25s;
    z-index: 999;
  }
  .header.is-open .nav {
    transform: translateX(0);
  }
  .nav-link {
    height: auto;
    padding: 14px 0;
    border-bottom: 1px solid #eee;
  }
  .dropdown {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    padding: 0 0 8px 12px;
    display: block;
  }
  .dropdown.show {
    transform: none;
  }
  .backdrop {
    display: block;
    position: fixed;
    inset: var(--header-h) 0 0 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 998;
  }
  .header:not(.is-open) .backdrop {
    display: none;
  }
}
</style>
