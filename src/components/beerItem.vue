<template>
  <div class="beer-box">
    <div class="box-header">
      <h2 v-if="edit === false">{{i + 1}}. {{beerName}}</h2> 
      <div v-else>
        <input ref="input" :value="beer.name"> 
        <button v-on:click="saveBeer">save</button>
      </div>
      <div class="buttons">
        <button v-on:click="editBeer">edit</button>
        <button v-on:click="$emit('remove-beer', beer.id)">delete</button>
      </div>
    </div>
    <div class="box-content">
      <img :src="beer.image_url" alt="oops">
      <div class="text">
        <div><b>description:</b> {{beer.description}}</div> <br>
        <div><b>brewers tips:</b> {{beer.brewers_tips}}</div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      beerName: this.beer.name,
    }
  },

  props: {
    beer: {
      type: Object,
      required: true
    },
    i: {}
  },

  methods: {
    editBeer() {
      this.edit = true
    },

    saveBeer() {
      this.beerName = this.$refs.input.value
      this.edit = false
    }
  }
}
</script>

<style>

h2 {
  margin: 0;
}

.beer-box {
  border: 2px solid black;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: flex-start;
  border-radius: 7px;
}

.box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  margin-bottom: 15px;
}

.box-content {
  display: flex;
}

.box-content .text {
  margin-left: 15px;
  text-align: left;
}

img {
  height: 300px;

}

</style>