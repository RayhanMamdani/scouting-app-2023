<script setup>
import Pickup from '../components/Pickup.vue'
import Defence from '../components/Defence.vue'
import Grid from '../components/Grid.vue'
import Chargestation from '../components/Chargestation.vue'
import EndgameButton from '../components/EndgameButton.vue';
import TableContents from '../components/TableContents.vue';
import CycleTime from '../components/CycleTime.vue';

</script>

<template>
    <main>
      
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

        
        <div class="columns">
            <div class="column is-one-quarter">
                <TableContents />
            </div>
            <div class="column is-one-quarter">
                <CycleTime />
            </div>
        </div>
        
    </main>
</template>

<style>
    body{
        width:100%;
    }
</style>