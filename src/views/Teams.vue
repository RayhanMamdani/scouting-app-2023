<template>
<Navbar/>
<AddTeams/>
<TeamsTable/>

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import AddTeams from '../components/AddTeams.vue';
import TeamsTable from '../components/TeamsTable.vue';
</script>

<style scoped>
div {
  margin: auto;

}

/* .card {
  width: 50%;
} */
</style>