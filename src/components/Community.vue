<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>

<template>
<div class="container">
    <label class="label is-size-6 has-text-centered mb-2">Coopertition</label>
    <div class="buttons tile has-addons has-text-centered mb-2">
        <button @click="gameData.setCommunity(true)"
            :class="[gameData.community == true ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">Y</button>
        <button @click="gameData.setCommunity(false)"
            :class="[gameData.community == false ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">N</button>
    </div>

</div>
</template>
