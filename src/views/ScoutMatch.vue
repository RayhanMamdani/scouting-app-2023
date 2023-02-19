
<template>
    
    <div class="columns is-flex is-justify-content-center" style=" margin-top: 5%; margin-bottom: 5%">
        <button
            :class="[gameData.gameState === 'auto' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('auto')">Auto</button>

        <button
            :class="[gameData.gameState === 'teleop' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('teleop')">Teleop</button>

        <button
            :class="[gameData.gameState === 'endgame' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('endgame')">Endgame</button>

    </div>

    <div class="columns ">

        <div class="column is-one-quarter ">
            <div class="tile is-parent is-vertical is-pulled-right is-centered card"
                v-show="gameData.gameState == 'auto' || gameData.gameState === 'teleop'">
                <p class="title is-size-6 my-0 has-text-centered">Pickup</p>
                <button class="button is-medium tile is-dark has-text-centered my-1">Ground</button>
                <button class="button is-medium tile is-dark has-text-centered my-1">Sub 1</button>
                <button class="button is-medium tile is-dark  has-text-centered my-1">Sub 2</button>

            </div>

        </div>

        <div class=" column box p-5  ">
            <Grid v-show="gameData.gameState == 'auto' || gameData.gameState === 'teleop'" />
            <Endgame v-show="gameData.gameState == 'endgame'" />

        </div>

        <div class="column is-one-quarter">
            <div class="tile is-parent is-vertical is-pulled-left is-centered p-3 card"
                v-show="gameData.gameState == 'auto' || gameData.gameState === 'teleop'">
                <p class="title is-size-6 has-text-centered mb-2">GP Scored:</p>
                <div class="buttons tile has-addons has-text-centered is-pulled-left ">
                    <button class=" button is-large is-dark column px-5" disabled>{{ gameData.gpTotal }}</button>
                    <button @click="gameData.gpRemove()" class=" button is-large is-dark column px-5">-</button>
                </div>
                <Chargestation v-show="gameData.gameState == 'auto'"/>
                <Community v-show="gameData.gameState == 'teleop'"/>
            </div>

        </div>
    </div>

    <div class="columns">
        <div class="column is-one-quarter">

        </div>
        <div class="column">

        </div>
        <div class="column is-one-quarter">

        </div>

    </div>
</template>
<script setup>
import Grid from '../components/Grid.vue'
import Chargestation from '../components/Chargestation.vue'
import Community from '../components/Community.vue'
import Endgame from '../components/Endgame.vue'
import { useGameDataStore } from '../stores/gameData'

const gameData = useGameDataStore();

const test = (msg) => {
    console.log(msg);
}

</script>
