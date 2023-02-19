<script setup>
import Start from '../components/Start.vue'
import TableContents from '../components/TableContents.vue';
</script>

<template>
  <div class=" is-flex ">

  </div>
  <div class="container box mt-6">
    <span class=" is-flex is-justify-content-center my-5 is-">
      <img src="../assets/Charged_Up_Logo.svg.png" alt="Charged Up" width="200" height="100">
    </span>
   
    <div class="field">
  <label class="label">Team Number:</label>
  <div class="control">
    <input class="input" type="number" >
  </div>
</div>

<div class="field">
  <label class="label">Match Number:</label>
  <div class="control">
    <input class="input" type="number">
  </div>
</div>
      <span class="buttons is-centered">
        <RouterLink to="/ScoutMatch">
          <button class=" is button is-danger is-large is-responsive mt-5">Scout Match</button>
        </RouterLink>
      </span>
        
  </div>

</template>

<style scoped>
div {
  margin: auto;
}

.box {
  width: 25%;
  
}
</style>