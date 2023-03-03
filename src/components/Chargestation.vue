<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>
<template>
    <div class="container">
        <label class="label is-size-6 has-text-centered mb-2">Chargestation:</label>
        <div class="buttons tile has-addons has-text-centered mb-2">
            <button @click="gameData.setAutoCS('Docked')"
                :class="[gameData.autoCS === 'Docked' ? 'button is-dark column is-medium px-5' : 'button  column is-medium px-5']">D</button>
            <button @click="gameData.setAutoCS('None')"
                :class="[gameData.autoCS === 'None' ? 'button column  is-dark is-medium px-5' : 'button  column is-medium px-5']">N</button>
            <button @click="gameData.setAutoCS('Engaged')"
                :class="[gameData.autoCS === 'Engaged' ? 'button is-dark column is-medium px-5' : 'button column is-medium px-5']">E</button>
        </div>
    </div>
</template>