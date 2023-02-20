<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();
</script>
<template>
    <div class="container">
                    <p class="title is-size-6 has-text-centered mb-2">Chargestation:</p>
                <div class="buttons tile has-addons has-text-centered" >
                        <button @click="gameData.setChargeStation('D')"
                            :class="[gameData.chargestation === 'D' ? 'button is-primary column is-medium px-5' : 'button is-dark column is-medium px-5']">D</button>
                            <button @click="gameData.setChargeStation('P')"
                            :class="[gameData.chargestation === 'P' ? 'button column is-medium px-5' : 'button is-dark column is-medium px-5']">P</button>
                        <button @click="gameData.setChargeStation('E')"
                            :class="[gameData.chargestation === 'E' ? 'button is-danger column is-medium px-5' : 'button is-dark column is-medium px-5']">E</button>
                    </div>
                </div>
</template>