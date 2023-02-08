<template>
  <home></home>
  <tabbar></tabbar>
</template>

<script setup lang="ts">
import tabbar from '@/components/tabbar/index.vue';
import home from './home/index.vue';
import cart from './cart/index.vue';
import center from './center/index.vue';
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
