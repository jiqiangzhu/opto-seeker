<template>
  <div id="app" class="app-root">
    <AppHeader @open-login="loginOpen = true" />
    <main class="main">
      <router-view />
    </main>
    <AppFooter />
    <LoginModal v-if="loginOpen" @close="loginOpen = false" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import LoginModal from '@/components/LoginModal.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter, LoginModal },
  data() {
    return {
      loginOpen: false,
    };
  },
};
</script>

<style>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  padding-top: var(--header-h);
}
</style>
