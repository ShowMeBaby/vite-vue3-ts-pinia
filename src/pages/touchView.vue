<template>
  <h1 class="bg-yellow-100 text-pink-900"> 测试 vueUse 的鼠标坐标 </h1>
  <h1 class="bg-yellow-200 text-3xl font-bold underline"> Hello world! </h1>
  <router-link to="/">点击跳转至首页</router-link>
  <button @click="resetPressed">重置</button>
  <div class="bg-blue-900 flex justify-center items-center overflow-hidden" style="height: 800px; width: 1400px">
    <div class="bg-red-500 w-96 h-96 relative" :style="{ left: moveX + 'px', top: moveY + 'px' }">
      <h3>{{ sourceType }} {{ pressed }}</h3>
      <h3>start: {{ startX }} x {{ startY }}</h3>
      <h3>end: {{ endX }} x {{ endY }}</h3>
      <h3>pressed: {{ lastX }} x {{ lastY }}</h3>
      <h3>real: X: {{ moveX }} x Y: {{ moveY }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useMouse, useMousePressed } from '@vueuse/core'
  import { watchEffect, reactive, toRefs } from 'vue'
  const { x, y, sourceType } = useMouse()
  const { pressed } = useMousePressed()
  const data = reactive({
    lastX: 0,
    lastY: 0,
    moveX: 0,
    moveY: 0,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  })
  let { lastX, lastY, moveX, moveY, startX, startY, endX, endY } = toRefs(data)
  const resetPressed = () => {
    data.lastX = 0
    data.lastY = 0
  }
  window.addEventListener('mouseup', () => {
    data.lastX += data.endX
    data.lastY += data.endY
    data.endX = 0
    data.endY = 0
  })
  watchEffect(() => {
    if (pressed.value) {
      data.endX = x.value - data.startX
      data.endY = y.value - data.startY
      data.moveX = data.lastX + data.endX
      data.moveY = data.lastY + data.endY
    } else {
      data.startX = x.value
      data.startY = y.value
    }
  })
</script>
