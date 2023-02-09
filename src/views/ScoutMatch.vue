<script setup>
import Grid from '../components/Grid.vue'
import Chargestation from '../components/Chargestation.vue'
import Endgame from '../components/Endgame.vue'

</script>

<template>
    <button @click="test(gpScore)"> test</button>
    <div class="columns is-flex is-justify-content-center" style=" margin-top: 5%; margin-bottom: 5%">
        <button
            :class="[gameState === 'auto' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameState = 'auto'">Auto</button>

        <button
            :class="[gameState === 'teleop' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameState = 'teleop'">Teleop</button>

        <button
            :class="[gameState === 'endgame' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameState = 'endgame'">Endgame</button>

    </div>

    <div class="columns ">

        <div class="column is-one-quarter ">
            <div class="tile is-parent is-vertical is-pulled-right is-centered card"
                v-show="gameState == 'auto' || gameState === 'teleop'">
                <p class="title is-size-6 my-0 has-text-centered">Pickup</p>
                <button class="button is-medium tile is-dark has-text-centered my-1">Ground</button>
                <button class="button is-medium tile is-dark has-text-centered my-1">Sub 1</button>
                <button class="button is-medium tile is-dark  has-text-centered my-1">Sub 2</button>

            </div>

        </div>

        <div class=" column box p-5  ">
            <Grid v-show="gameState == 'auto' || gameState === 'teleop'" @sendData='setGridData($event)' />
            <Endgame v-show="gameState == 'endgame'" />

        </div>

        <div class="column is-one-quarter">
            <div class="tile is-parent is-vertical is-pulled-left is-centered p-3 card"
                v-show="gameState == 'auto' || gameState === 'teleop'">
                <p class="title is-size-6 has-text-centered mb-2">GP Scored:</p>
                <div class="buttons tile has-addons has-text-centered is-pulled-left ">
                    <button class=" button is-large is-dark column px-5" disabled>{{ gpTotal }}</button>
                    <button @click = "" class=" button is-large is-dark column px-5">-</button>
                </div>
                <Chargestation v-show="gameState == 'auto'" />
                <div class="container" v-show="gameState == 'teleop'">
                    <p class="title is-size-6 has-text-centered mb-2">Community:</p>

                    <div class="buttons tile has-addons has-text-centered ">
                        <button @click="community = true"
                            :class="[community == true ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">Y</button>
                        <button @click="community = false"
                            :class="[community == false ? 'button is-active column is-large px-5' : 'button is-dark column is-large px-5']">N</button>
                    </div>

                </div>


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

<script>
export default {

    data() {
        return {
            gameState: "auto", // auto, teleop, endgame
            community: false,
            chargestation: "G", //Docked: D, Engaged: E, Ground: G
            gpTotal: 0, //total number of gamepieces scored (total indexes of gamepiece array)
            gpScore: [] // score gamepiece array from grid
        }
    },

    methods: {

        setGridData({ gpScored, gpTotal }) {
            this.gpScore = gpScored;
            this.gpTotal = gpTotal;
        },
        test(msg) {
            console.log(msg);
        },
        gpRemove() {
            this.gpScore.pop();
        },

    },


}
</script>

<style scoped>
.box {
    width: 50%;
    height: 100%;
}
</style>