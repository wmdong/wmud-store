<template>
  <u-tabbar :value="tabbarName" activeColor="#F56C6C" @change="tabbarChange">
    <u-tabbar-item name="home" text="首页" icon="home"></u-tabbar-item>
    <u-tabbar-item name="cart" text="购物车" icon="shopping-cart"></u-tabbar-item>
    <u-tabbar-item name="center" text="我的" icon="account"></u-tabbar-item>
  </u-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabbarName = ref('home');

// const tabbarClick = (name: string) => {
//   tabbarName.value = name;
// };

const tabbarChange = (name: string) => {
  tabbarName.value = name;
};
</script>
