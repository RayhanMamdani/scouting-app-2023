<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>

<template>
<div class="container">
    <p class="title is-size-6 has-text-centered mb-2">Community:</p>
    <div class="buttons tile has-addons has-text-centered ">
        <button @click="gameData.setCommunity"
            :class="[gameData.community == true ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">Y</button>
        <button @click="gameData.setCommunity"
            :class="[gameData.community == false ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">N</button>
    </div>

</div>
</template>
