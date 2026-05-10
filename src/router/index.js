import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const ProductIndex = () => import('@/views/ProductIndex.vue');
const ProductCategory = () => import('@/views/ProductCategory.vue');
const ProductShow = () => import('@/views/ProductShow.vue');
const SolutionIndex = () => import('@/views/SolutionIndex.vue');
const SolutionPage = () => import('@/views/SolutionPage.vue');
const ResourceIndex = () => import('@/views/ResourceIndex.vue');
const ResourcePlaceholder = () => import('@/views/ResourcePlaceholder.vue');
const NewsIndex = () => import('@/views/NewsIndex.vue');
const NewsExhibition = () => import('@/views/NewsExhibition.vue');
const NewsShow = () => import('@/views/NewsShow.vue');
const Contact = () => import('@/views/Contact.vue');
const Job = () => import('@/views/Job.vue');
const NotFound = () => import('@/views/NotFound.vue');

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 80 } };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/', redirect: '/cn' },
    { path: '/cn', name: 'home', component: Home, meta: { title: '首页' } },
    { path: '/cn/about', name: 'about', component: About, meta: { title: '关于我们' } },
    { path: '/cn/product', name: 'product', component: ProductIndex, meta: { title: '产品中心' } },
    { path: '/cn/product/:cateSlug', name: 'product-cate', component: ProductCategory, meta: { title: '产品分类' } },
    { path: '/cn/product/show/:slug', name: 'product-show', component: ProductShow, meta: { title: '产品详情' } },
    { path: '/cn/solution', name: 'solution', component: SolutionIndex, meta: { title: '解决方案' } },
    { path: '/cn/solution/:slug', name: 'solution-page', component: SolutionPage, meta: { title: '解决方案' } },
    { path: '/cn/resource', name: 'resource', component: ResourceIndex, meta: { title: '资源中心' } },
    { path: '/cn/resource/papers', name: 'resource-papers', component: ResourcePlaceholder, meta: { title: '产品发表论文' } },
    { path: '/cn/resource/download', name: 'resource-download', component: ResourcePlaceholder, meta: { title: '应用文档下载' } },
    { path: '/cn/resource/cases', name: 'resource-cases', component: ResourcePlaceholder, meta: { title: '客户案例分享' } },
    { path: '/cn/news', redirect: '/cn/news/index' },
    { path: '/cn/news/index', name: 'news', component: NewsIndex, meta: { title: '公司新闻' } },
    { path: '/cn/news/exhibition', name: 'news-exhibition', component: NewsExhibition, meta: { title: '展会新闻' } },
    { path: '/cn/news/show/:id', name: 'news-show', component: NewsShow, meta: { title: '新闻详情' } },
    { path: '/cn/contact', name: 'contact', component: Contact, meta: { title: '联系我们' } },
    { path: '/cn/contact/job', name: 'job', component: Job, meta: { title: '加入我们' } },
    { path: '*', name: 'not-found', component: NotFound },
  ],
});

const TITLE_SELF_MANAGED = new Set([
  'product-show',
  'news-show',
  'solution-page',
  'product-cate',
  'resource-papers',
  'resource-download',
  'resource-cases',
]);

router.afterEach((to) => {
  if (TITLE_SELF_MANAGED.has(to.name)) return;
  const base = '泽勇生物科技 | OptoSeeker';
  document.title = to.meta.title ? `${to.meta.title} — ${base}` : base;
});

export default router;
