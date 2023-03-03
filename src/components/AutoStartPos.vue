<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>
<template>
    <div class="container">
        <div class="tile is-parent is-vertical is-centered card">
                <label class="label is-size-6 has-text-centered mb-2">Auto Start Position:</label>
                <div class="buttons tile has-addons has-text-centered" >
                        <button @click="gameData.setAutoStartPos('Wall')"
                            :class="[gameData.autoStartPos === 'Wall' ? 'button is-primary column is-medium px-5 has-text-centered' : 'button is-dark column is-medium px-5 has-text-centered']">Wall</button>
                        <button @click="gameData.setAutoStartPos('Middle')"
                            :class="[gameData.autoStartPos === 'Middle' ? 'button column  is-info is-medium px-5 has-text-centered' : 'button is-dark column is-medium px-5 has-text-centered']">Middle</button>
                        <button @click="gameData.setAutoStartPos('Human')"
                            :class="[gameData.autoStartPos === 'Human' ? 'button is-danger column is-medium px-5 has-text-centered' : 'button is-dark column is-medium px-5 has-text-centered']">Human</button>
                    </div>
                </div>
    </div>

</template>