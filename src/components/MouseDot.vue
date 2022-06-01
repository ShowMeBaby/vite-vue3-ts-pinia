<template>
  <div class="absolute z-10 w-2 h-2 rounded-full bg-red-500" :class="{ 'w-4 h-4 opacity-50': pressed }" :style="{ left: x - pressedPx + 'px', top: y - pressedPx + 'px' }"></div>
</template>

<script lang="ts" setup>
  import { useMouse, useMousePressed } from '@vueuse/core'
  import { ref, watchEffect } from 'vue'
  const { x, y } = useMouse()
  const { pressed } = useMousePressed()
  let pressedPx = ref(5)
  watchEffect(() => {
    pressedPx.value = pressed.value ? 8 : 4
  })
</script>
