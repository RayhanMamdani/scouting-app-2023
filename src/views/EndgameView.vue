<script setup>
    import TableContents from '../components/TableContents.vue';
    import EndgameNotes from '../components/EndgameNotes.vue';
    import Chargestation from '../components/Chargestation.vue';
</script>

<template>
    <main>
        <div class="columns">
            <div class="column">
                <TableContents />
            </div>
            <div class="column">
                <EndgameNotes/>
            </div>
            <div class="column">
                <Chargestation/>
            </div>
        </div>
    </main>
</template>

<style>
    body{
        width:100%;
    }
</style>