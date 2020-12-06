<template>
  <div>
    <BeerItem 
      v-for="(beer, i) in beerList" 
      v-bind:beer="beer"
      v-bind:i="i"
      v-bind:key="beer.id"
      v-on:remove-beer="removeBeer"
      class="beer-box"
    />
    
    <button 
      v-if="isButtonVisible" 
      v-on:click="loadMoreBeer"
    >
      {{buttonContent}}
    </button>
  </div>
</template>

<script>
import BeerItem from "@/components/beerItem"

export default {
  name: 'Home',

  data() {
    return {
      page: 1,
      beerList: [],
      isButtonVisible: true,
      buttonContent: "Show Next"
    }
  },

  components: {
    BeerItem
  },

  mounted() {
    this.loadBeerList()
  },

  methods: {
    async loadBeerList() {
      this.buttonContent = "loading"
      console.log(this.buttonContent)
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${this.page}&limit=25`)
      .then(this.buttonContent = "Show Next")
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

    removeBeer(id) {
      console.log(id)
      this.beerList = this.beerList.filter(b => b.id !== id)
    }
  }
}
</script>

<style scoped>

</style>