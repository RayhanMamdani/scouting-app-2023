<script setup>
import Pickup from '../components/Pickup.vue'
import Defence from '../components/Defence.vue'
import Grid from '../components/Grid.vue'
import Chargestation from '../components/Chargestation.vue'
import EndgameButton from '../components/EndgameButton.vue';
import TableContents from '../components/TableContents.vue';

</script>

<template>
    <main>
        <!-- <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <div class="tile is-child">
                </div>
                <div class="tile is-child"></div>
            </div>
            <div class="tile is-parent is-vertical">
                <div class="tile is-child">
                </div>
                <div class="tile is-child">
                    
                </div>
            </div>
        </div> -->
        <div class="columns">
            <div class="column">
                <Pickup/>
            </div>
            <div class="column">
                <Grid/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <Defence/>
            </div>
            <div class="column">
                <Chargestation/>
            </div>
        </div>

        
        
        <div class="column is-one-quarter">
            <TableContents />
        </div>
    </main>
</template>

<style>
    body{
        width:100%;
    }
</style>