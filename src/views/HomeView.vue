<script setup>
import Start from '../components/Start.vue'
import TableContents from '../components/TableContents.vue';
</script>

<template>
  <div class="container">
    <main>
      <TableContents />
      <p>
              Team Number: <input type="number" style="margin-top: 20px">
          </p>
          <p>
              Match Number: <input type="number" style="margin-top: 20px"> 
          </p>
    </main>
  </div>
  
</template>
