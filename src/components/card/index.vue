<template>
  <view class="card-box" :style="{ borderRadius: radius, backgroundColor: backgroundColor }">
    <view class="card-title" :style="{ color: titleColor, fontSize: titleSize }" v-if="title">{{ title }}</view>
    <view class="card-content">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts" name="appCard">
defineProps({
  radius: {
    type: String,
    default: () => {
      return '4px';
    },
  },
  title: {
    type: String,
    default: () => {
      return '';
    },
  },
  titleColor: {
    type: String,
    default: () => {
      return '#303133';
    },
  },
  backgroundColor: {
    type: String,
    default: () => {
      return 'none';
    },
  },
  titleSize: {
    type: String,
    default: () => {
      return '16px';
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@style/components/card.scss';
</style>
