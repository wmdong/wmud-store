<template>
  <view class="content">
    <!-- 轮播 -->
    <view class="banner">
      <u-swiper circular keyName="image" height="240" :radius="0" :interval="4000" :list="swiperList"></u-swiper>
    </view>
    <!-- 主体内容 -->
    <view class="main-content">
      <view class="content-scorll">
        <view class="scorll-box">
          <!-- 公告 -->
          <view class="notice-box">
            <u-notice-bar :text="noticeText" :duration="3000"></u-notice-bar>
          </view>
          <!-- 搜索 -->
          <view class="search-box">
            <u-search placeholder="请输入关键词" :showAction="false" v-model="searchKeyword"></u-search>
          </view>
          <!-- 商品分类 -->
          <view class="category-box">
            <app-card class="goods-category" title="商品分类" radius="8px">
              <u-scroll-list>
                <view class="category" v-for="(item, index) in goodsCategory" :key="index">
                  <u-image :src="item.icon" width="40px" height="40px" radius="50%"></u-image>
                  <u-text :text="item.name"></u-text>
                </view>
              </u-scroll-list>
            </app-card>
          </view>
        </view>
      </view>
      <!-- <view class="content-card-box"> -->
      <!-- 公告 -->
      <!-- <view class="notice">
          <u-notice-bar :text="noticeText" :duration="3000"></u-notice-bar>
        </view> -->
      <!-- 搜索 -->
      <!-- <app-card class="search">
          <u-search placeholder="请输入关键词" :showAction="false" v-model="searchKeyword"></u-search>
        </app-card> -->
      <!-- 商品分类 -->
      <!-- <app-card class="goods-category" title="商品分类" radius="8px">
          <u-scroll-list>
            <view class="category" v-for="(item, index) in goodsCategory" :key="index">
              <u-image :src="item.icon" width="40px" height="40px" radius="50%"></u-image>
              <u-text :text="item.name"></u-text>
            </view>
          </u-scroll-list>
        </app-card> -->
      <!-- </view> -->
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import appCard from '@/components/card/index.vue';
const swiperList = ref([
  {
    image: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
    type: 'image',
  },
  {
    image: 'https://th.wallhaven.cc/small/rr/rrdom7.jpg',
    type: 'image',
  },
  {
    image: 'https://th.wallhaven.cc/small/rr/rrdk6q.jpg',
    type: 'image',
  },
]);

const searchKeyword = ref('');

const userInfo = ref({
  name: 'Test user',
  avatar: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
});

const noticeText = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用');

const goodsCategory = ref([
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
  {
    name: 'category',
    icon: 'https://th.wallhaven.cc/small/gp/gp7v2e.jpg',
  },
]);
</script>

<style scoped lang="scss">
@import '@style/main/home/index.scss';
</style>
