<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
         <router-link to="/" class="header__logo">
            <img class="header__logo-img" src="@/assets/images/logo.png" alt="">
         </router-link>
          
      

        <ul class="header__nav-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link :class="link.class" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>  
</template>

<script>
  import { links } from "@/_config";
  import { routerName } from "@/routes";
export default {
  name: "Header-vue",
  data() {
    return {
      title: "Logo",
      links: links,
      activeClass: routerName
    }
  },

  methods: {
    addClass() {
      return routerName
    }
  }
}
</script>

<style>
  /* .router-link-active  {
    font-weight: 700;
  } */
</style>