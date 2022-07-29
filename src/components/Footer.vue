<template>
  <footer class="footer">
    <div class="container footer__content">
      <h3 class="footer__content-title"></h3>
      <div>
        <a href="">
          <img src="" alt="" />
        </a>
        <ul>
          <li v-for="item in icons" :key="item.id">
           <a :href="item.url">
              <img :src="item.img" alt="">
           </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { configIcon } from '@/_config'
export default {
  name: "Footer-vue",
  data() {
    return {
      icons: configIcon
    };
  },
};
</script>

<style>
</style>