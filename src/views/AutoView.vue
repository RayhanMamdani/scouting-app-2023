<script setup>
import Grid from '../components/Grid.vue'

</script>

<template>
    <main>
        <span class="columns is-flex is-justify-content-center" style=" margin-top: 5%; margin-bottom: 5%">

            <button class="button is-warning is-light has-text-centered mx-2">Auto</button>
            <button class="button is-warning is-light has-text-centered mx-2">Tele-Op</button>
            <button class="button is-warning is-light has-text-centered mx-2">Endgame</button>
        </span>

        <span class="columns " style=";">

            <span class="column is-one-quarter ">
                <div class="tile is-parent is-vertical is-pulled-right is-centered card">
                    <p class="title is-size-6 my-0 has-text-centered">Pickup</p>
                    <button class="button is-medium tile is-warning is-light has-text-centered my-1">Ground</button>
                    <button class="button is-medium  tile is-warning is-light has-text-centered my-1">Sub 1</button>
                    <button class="button is-medium tile is-warning is-light has-text-centered my-1">Sub 2</button>

                </div>

            </span>

            <span class=" column box  p-5  ">
                <Grid />
            </span>

            <span class="column is-one-quarter  ">
                <div class="tile is-parent is-vertical is-pulled-left is-centered card p-3">
                    <p class="title is-size-6 has-text-centered mb-2">Charge Station</p>
                    <div class="buttons tile has-addons has-text-centered ">
                        <button class=" button is-primary column is-large">D</button>
                        <button class="button is-danger column is-large ">E</button>
                    </div>
                </div>

            </span>

        </span>

        <Span class="columns">
            <span class="column is-one-quarter">

            </span>
            <span class="column">
                <div class="buttons tile has-addons has-text-centered is-pulled-left ">
                        <button class=" button is-large is-dark column">+</button>
                        <button class="button is-large is-light column">△: 0</button>
                        <button class=" button is-large is-dark column">-</button>
                    </div>
                    <div class="buttons tile has-addons has-text-centered is-pulled-right ">
                        <button class=" button is-large is-dark column">+</button>
                        <button class="button is-large is-light column">□: 0</button>
                        <button class=" button is-large is-dark column">-</button>
                    </div>
            </span>
            <span class="column is-one-quarter">

            </span>

        </Span>







    </main>
</template>

<style scoped>
.box {
    width: 50%;
    height: 100%;
}
</style>