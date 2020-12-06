<template>
  <div class="beer-box">
    <div class="box-header">
      <div v-if="edit === false" class="normalMode">
        <h2 >{{i + 1}}. {{beerName}}</h2> 
        <button v-on:click="editBeer">edit</button>
      </div>
      <div v-else>
        <input v-model="beerName" >
        <button v-on:click="saveBeer">save</button>
      </div>
      <button v-on:click="$emit('remove-beer', beer.id)">delete</button>
    </div>
    <div class="box-content">
      <img :src="beer.image_url" alt="oops">
      <div class="text">
        <div v-if="edit === false"><b>description:</b> {{beerDescription}}</div>
        <textarea v-else v-model="beerDescription"></textarea> <br>
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
      beerDescription: this.beer.description
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

.normalMode {
  display: flex;
  align-items: center;
  width: inherit;
  justify-content: space-between;
}

.box-content {
  display: flex;
}

.box-content .text {
  margin-left: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

img {
  height: 300px;
}

textarea {
  width: inherit;
  height: 120px;
  resize: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px
}

</style>