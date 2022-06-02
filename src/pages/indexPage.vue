<template>
  <div class="flex-center flex-col dark:bg-black">
    <img class="w-40 border-2 border-solid hover:border-dashed border-indigo-500" alt="Vue logo" src="@/assets/logo.png" />
    <UsePinia />
    <br />
    <router-link class="btn" to="/login">点击跳转至login</router-link> <br /><br />
    <router-link class="btn" to="/vueUse">点击跳转至vueUse页面</router-link> <br /><br />
    <router-link class="btn" to="/request">点击跳转至request请求页面</router-link> <br /><br />
    <router-link class="btn" to="/tailwindcss">点击跳转至tailwindcss页面</router-link> <br /><br />
    <router-link class="btn" to="/touchview">点击跳转至touchView页面</router-link> <br /><br />
    <router-link class="btn" to="/gamelist">点击跳转至gamelist页面</router-link>
  </div>
</template>

<script lang="ts" setup>
  import UsePinia from '@/components/UsePinia.vue'
</script>
