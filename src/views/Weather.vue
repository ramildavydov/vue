<template>
  <main class="weathers__page">
    <div class="container weathers__page-content">
      <div>погода</div>
      <button @click="fetchWeather()">bil</button>
      <p>{{ weathers.weather }}</p>
    </div>
  </main>
</template>


<script>
export default {
  name: "Weather-vue",
  data() {
    return {
      weathers: {
        url_base: "https://api.openweathermap.org/data/2.5/",
        api_key: "47ae95142033eaed59c42234c8f50e60",
        query: "Uzbekistan",
        weather: 0,
      },
    };
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.weathers.url_base}weather?q=${this.weathers.query}&units=metric&APPID=${this.weathers.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(function (results) {
          console.log(results);
        });
    },
  },
};
</script>


<style>
</style>
