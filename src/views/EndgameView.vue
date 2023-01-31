<script setup>
    import TableContents from '../components/TableContents.vue';
    import EndgameNotes from '../components/EndgameNotes.vue';
    import Chargestation from '../components/Chargestation.vue';
</script>

<template>
    <container width="100%">
        <main>
            <div class="columns">
                <div class="column">
                    <TableContents />
                </div>
                <div class="column">
                    <p>General Scouting Notes</p>
    <textarea class="textarea" placeholder="Type here..."></textarea>
                </div>
                <div class="column">
                    <Chargestation/>
                </div>
            </div>
        </main>
    </container>
    
</template>

<style>
    body{
        width:100%;
    }
</style>