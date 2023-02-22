<template>
<head>

</head>
<Navbar/>
<div class="">


<table class="table">
    <thead>
      <tr>
        <th><abbr title="Position">Pos</abbr></th>
        <th>Team</th>
        <th><abbr title="Played">Pld</abbr></th>
        <th><abbr title="Won">W</abbr></th>
        <th><abbr title="Drawn">D</abbr></th>
        <th><abbr title="Lost">L</abbr></th>
        <th><abbr title="Goals for">GF</abbr></th>
        <th><abbr title="Goals against">GA</abbr></th>
        <th><abbr title="Goal difference">GD</abbr></th>
        <th><abbr title="Points">Pts</abbr></th>
        <th>Qualification or relegation</th>
      </tr>
    </thead>
    </table>
</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
div {
  margin: auto;

}

/* .card {
  width: 50%;
} */
</style>