<template>
  <view class="content">
    <view class="car-box">
      <view class="action-top">
        <text>编辑</text>
      </view>
      <view class="goods-list">
        <view class="car-goods-info" v-for="goods in data" :key="goods.id">
          <label class="radio"
            ><radio
              class="radio-small"
              color="rgb(255 204 51)"
              value="all"
              :checked="goods.checked"
            />{{ goods.name }}</label
          >
        </view>
      </view>
      <view class="action-bottom">
        <label class="radio"><radio value="all" checked="true" />全选</label>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface GoodsType {
  id: number;
  name: string;
  number: number;
  price: number;
  checked: boolean;
  image: string;
}

const data = ref<GoodsType[]>([
  {
    id: 1,
    name: "product_1",
    number: 2,
    price: 520,
    checked: true,
    image: "@/static/logo.png",
  },
  {
    id: 2,
    name: "product_1",
    number: 1,
    price: 520,
    checked: false,
    image: "@/static/logo.png",
  },
]);
</script>
