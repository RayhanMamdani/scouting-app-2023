<script setup>
import Start from '../components/Start.vue'
import TableContents from '../components/TableContents.vue';
</script>

<template>
  <div class="container">
    <main>
      
      <p>
              Team Number: <input type="number" style="margin-top: 20px">
          </p>
          <p>
              Match Number: <input type="number" style="margin-top: 20px"> 
          </p>
          <RouterLink to="/">
                    <button class="column is-full button is-danger is-large is-responsive">Scout Match</button>
                </RouterLink>
    </main>
  </div>
  
</template>
