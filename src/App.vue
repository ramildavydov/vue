<template>
  <HeaderVue />
  <router-view class="pages"/>
  <FooterVue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
export default {
  components: { HeaderVue, FooterVue },
};
</script>

<style>
</style>
