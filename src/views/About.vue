<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>关于我们</h1>
        <p class="sub">{{ site.name }}</p>
      </div>
    </div>
    <div class="page-body">
      <div class="container prose">
        <section id="aboutP1" class="block">
          <h2>公司简介</h2>
          <p>{{ site.intro }}</p>
        </section>
        <section id="aboutP2" class="block">
          <h2>发展历程</h2>
          <p>
            2023 年，追光生物在深圳成立，汇聚高校科研力量与产业经验，快速完成核心仪器原型验证与工程化。
            公司持续投入光电镊、数字微流控与单细胞功能筛选等方向，推动国产高端生命科学仪器走向市场。
          </p>
        </section>
        <section id="aboutP3" class="block">
          <h2>荣誉资质</h2>
          <p>
            公司已获评国家高新技术企业，并参与多项产学研合作；核心技术相关成果发表于《ACS Nano》《Analytical Chemistry》等国际期刊，
            产品获得科研与产业用户广泛认可。
          </p>
        </section>
        <section id="aboutP5" class="block">
          <h2>合作院校</h2>
          <p>
            团队源自北京理工大学、南方科技大学、暨南大学等院校，并与国内外高校及科研院所保持紧密合作，共同推进前沿技术转化。
          </p>
        </section>
        <section id="aboutP6" class="block">
          <h2>经营团队</h2>
          <p>
            公司由教授与海归博士领衔，涵盖光学工程、微流控、细胞生物学与仪器系统等交叉领域，具备从基础研究到产品落地的全链条能力。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { SITE } from '@/data/site';

export default {
  name: 'About',
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
  max-width: 800px;
}
.block {
  margin-bottom: 48px;
  scroll-margin-top: calc(var(--header-h) + 16px);
}
.block h2 {
  color: var(--color-primary);
  font-size: 1.35rem;
  margin-bottom: 16px;
}
</style>
