<template >
    <div class="columns is-ancestor is-mobile is-centered">
     
        <div class="column is-parent is-vertical">

            <button  @click = "gameData.gpAdd('cone',0,2)" class="button is-large box is-primary is-light box has-text-centered is-responsive is-fullwidth">△</button>
            <button  @click = "gameData.gpAdd('cone',0,1)" class="button is-large tile box is-light is-primary box has-text-centered is-responsive is-fullwidth">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button @click = "gameData.gpAdd('cone',0,0)" class="button is-large column is-primary is-light is-responsive is-fullwidth ">△</button>
                    <button @click = "gameData.gpAdd('cube',0,0)" class=" button is-large column is-danger is-light is-responsive is-fullwidth">□</button>
            </div>
        
        </div>
        <div class="column is-parent is-vertical">

            <button @click = "gameData.gpAdd('cone',1,2)" class="button is-large tile box is-danger is-light box has-text-centered is-responsive is-fullwidth">□</button>
            <button @click = "gameData.gpAdd('cone',1,1)" class="button is-large tile box is-danger is-light box has-text-centered is-responsive is-fullwidth">□</button>
            <div class="buttons tile has-addons has-text-centered ">
                    <button @click = "gameData.gpAdd('cone',1,0)"  class="button is-large column is-primary is-light is-responsive is-fullwidth ">△</button>
                    <button @click = "gameData.gpAdd('cone',1,0)" class=" button is-large column is-danger is-light is-responsive is-fullwidth">□</button>
            </div>
        </div> 
        <div class="column is-parent is-vertical">
            <button @click = "gameData.gpAdd('cone',2,2)" class="button is-large box is-primary is-light box has-text-centered is-responsive is-fullwidth">△</button>
            <button @click = "gameData.gpAdd('cone',2,1)" class="button is-large tile box is-primary is-light box has-text-centered is-responsive is-fullwidth">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button @click = "gameData.gpAdd('cone',2,0)" class="button is-large column is-primary is-light is-responsive is-fullwidth">△</button>
                    <button @click = "gameData.gpAdd('cone',2,0)" class=" button is-large column is-danger is-light is-responsive is-fullwidth">□</button>

            </div>
        </div>
    </div>
    
</template>


<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();




</script>