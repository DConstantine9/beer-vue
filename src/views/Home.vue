<template>
  <div>
    <div v-for="(beer, i) in beerList" 
      v-bind:key="i"
      class="beer-box"
    >
      <h2>{{i+1}} {{beer.name}}</h2> <br>
      <img :src="beer.image_url" alt="oops">
      <div>description: {{beer.description}}</div> <br>
      <div>brewers tips: {{beer.brewers_tips}} </div> 
    </div>

    <button>Show Next</button>

    <div v-if="beerList.length" v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      url: "https://api.punkapi.com/v2/beers?page=1&limit=25",
      beerList: null,
    }
  },

  components: {},

  mounted() {
    this.loadBeerList()
  },

  methods: {
    async loadBeerList() {
      const res = await fetch(this.url)
      const result = await res.json()
      this.beerList = result
      console.log(this.beerList)
    },

    handleScrolledToBottom() {
      console.log("asd")
    }
  }
}
</script>

<style scoped>

/* .beer-box {
  display: flex;

} */

img {
  height: 300px;
}

</style>