<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>
<template>
    <div class="container">
        <div class="tile is-parent is-vertical is-pulled-right is-centered card">
                <label class="label is-size-6 my-0 has-text-centered">Piece Pickup</label>
                <button :class="[gameData.autoPickupPos === '1' ? 'button is-medium tile is-primary has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setAutoPickupPos('1')">1 (Wall)</button>
                <button :class="[gameData.autoPickupPos === '2' ? 'button is-medium tile has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setAutoPickupPos('2')">2</button>
                <button :class="[gameData.autoPickupPos === '3' ? 'button is-medium tile is-warning has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setAutoPickupPos('3')">3</button>
                <button :class="[gameData.autoPickupPos === '4' ? 'button is-medium tile is-danger has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setAutoPickupPos('4')">4 (Middle)</button>
            </div>
    </div>

</template>