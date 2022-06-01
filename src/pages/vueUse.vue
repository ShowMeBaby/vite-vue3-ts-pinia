<template>
  <h1 class="bg-yellow-100 text-pink-900"> 测试 vueUse 的鼠标坐标 </h1>
  <h1 class="bg-yellow-200 text-3xl font-bold underline"> Hello world! </h1>
  <h3 class="bg-orange-900">Mouse: {{ x }} x {{ y }}</h3>
  <router-link to="/">点击跳转至首页</router-link>
  <MouseDot />
</template>

<script lang="ts" setup>
  import MouseDot from '@/components/MouseDot.vue'

  import { useMouse } from '@vueuse/core'
  const { x, y } = useMouse()
</script>
