<template>
  <div>
    <div 
      v-for="beer in beerList" 
      v-bind:key="beer.id"
      class="beer-box"
    >
      <h2>{{beer.id}} {{beer.name}}</h2> 
      <button v-on:click="deleteBeer">delete</button> <br>
      <img :src="beer.image_url" alt="oops">
      <div>description: {{beer.description}}</div> <br>
      <div>brewers tips: {{beer.brewers_tips}} </div> 
    </div>

    <button 
      v-if="isButtonVisible" 
      v-on:click="loadMoreBeer"
    >
      Show Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      page: 1,
      beerList: [],
      isButtonVisible: true
    }
  },

  components: {},

  mounted() {
    this.loadBeerList()
  },

  methods: {
    async loadBeerList() {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${this.page}&limit=25`)
      const result = await res.json()
      result.map((obj) => {
        this.beerList.push(obj)
      })
      console.log(this.beerList)
    },

    loadMoreBeer() {
      this.page++
      this.loadBeerList() 
      if (this.page === 13) {
        this.isButtonVisible = false
      } 
    },

    deleteBeer(id) {
      /* this.beerList = this.beerList.filter(b => b.id !== id) */
      let arr = this.beerList
      arr.splice(id, 1)
      this.beerList = arr 
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