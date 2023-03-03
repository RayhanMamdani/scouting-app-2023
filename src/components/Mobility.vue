<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>

<template>
<div id ="mobility" class="container card py-1 px-2">
    <label class="label is-size-6 has-text-centered mb-2">Mobility</label>
    <div class="buttons tile has-addons has-text-centered mb-2">
        <button @click="gameData.setCommunity(true)"
            :class="[gameData.community == true ? 'button is-dark is-active column is-medium px-5' : 'button  column is-medium px-5']">Y</button>
        <button @click="gameData.setCommunity(false)"
            :class="[gameData.community == false ? 'button  is-dark is-active column is-medium px-5' : 'button  column is-medium px-5']">N</button>
    </div>

</div>
</template>
<style>
#mobility {
    width: 57%;
}
</style>