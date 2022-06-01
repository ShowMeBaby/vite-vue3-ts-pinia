<template>
  <div class="grid grid-cols-5 gap-2 p-2">
    <template v-for="(item, i) in 100" :key="i">
      <div class="border-2 border-yellow-500 border-dashed">
        <div class="bg-gray-300 h-40 flex-center">
          <a>gameboy</a>
        </div>
        <div class="p-1">
          <a class="block text-xs cursor-pointer" :title="item.toString()">编号: {{ item }}</a>
          <a class="block text-xs cursor-pointer truncate" :title="item.toString().repeat(12)">中文名: {{ item.toString().repeat(12) }}</a>
          <a class="block text-xs cursor-pointer truncate" :title="item.toString().repeat(12)">英文名: {{ item.toString().repeat(12) }}</a>
        </div>
      </div>
    </template>
  </div>
</template>
