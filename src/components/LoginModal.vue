<template>
  <div class="modal-root" role="dialog" aria-modal="true" aria-labelledby="login-title">
    <div class="modal-backdrop" @click="$emit('close')" />
    <div class="modal">
      <button type="button" class="close" aria-label="关闭" @click="$emit('close')">×</button>
      <h2 id="login-title">登录</h2>
      <p class="hint">演示站点：登录功能仅作界面示意，不连接后端。</p>
      <form class="form" @submit.prevent>
        <label>
          <span>账号</span>
          <input type="text" autocomplete="username" placeholder="请输入账号" />
        </label>
        <label>
          <span>密码</span>
          <input type="password" autocomplete="current-password" placeholder="请输入密码" />
        </label>
        <label>
          <span>验证码</span>
          <input type="text" placeholder="请输入验证码" />
        </label>
        <button type="button" class="btn btn-primary full" @click="$emit('close')">立即登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}
.modal {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 28px 24px 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}
.close {
  position: absolute;
  top: 12px;
  right: 14px;
  border: none;
  background: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: var(--color-muted);
}
h2 {
  margin-bottom: 8px;
  font-size: 1.25rem;
}
.hint {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 20px;
}
.form label {
  display: block;
  margin-bottom: 14px;
}
.form span {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: var(--color-muted);
}
.form input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.full {
  width: 100%;
  margin-top: 8px;
}
</style>
