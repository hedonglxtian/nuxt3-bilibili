<script setup lang="ts">
// SEO优化信息
useSeoMeta({
  title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description: "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
  keywords: "B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影",
  // 绕开bilibili的防盗链机制
  referrer: "no-referrer",
})
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- Nuxt基于路由系统 -->
    <!-- 首页 默认“/”为首页地址 -->
    <!-- <NuxtLink to="/">首页</NuxtLink> -->
    <!-- 视频页 /video/index -->
    <!-- <NuxtLink to="/video">视频页</NuxtLink> -->
    <!-- :keepalive="{ max: 10 }" 最大缓存10级页面，提升用户体验 -->
    <NuxtPage :keepalive="{ max: 10 }"/>
  </div>
</template>

<style lang="scss">
/* 基础样式 */
@import './assets/styles/base.scss';
/* 字体图标 */
@import './assets/styles/iconfont.scss';
</style>