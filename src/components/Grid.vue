<template >
    <div class="tile is-ancestor ">
     
        <div class="tile is-parent is-vertical">

            <button  @click = "gameData.gpAdd('cone',0,2)" class="button is-large box is-warning is-light box has-text-centered is-responsive">△</button>
            <button  @click = "gameData.gpAdd('cone',0,1)" class="button is-large tile box is-warning is-light box has-text-centered is-responsive">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button @click = "gameData.gpAdd('cone',0,0)" class="button is-large column is-warning is-light is-responsive ">△</button>
                    <button @click = "gameData.gpAdd('cube',0,0)" class=" button is-large column is-link is-light is-responsive">□</button>
            </div>
        
        </div>
        <div class="tile is-parent is-vertical">

            <button @click = "gameData.gpAdd('cone',1,2)" class="button is-large tile box is-link is-light box has-text-centered is-responsive ">□</button>
            <button @click = "gameData.gpAdd('cone',1,1)" class="button is-large tile box is-link is-light box has-text-centered is-responsive">□</button>
            <div class="buttons tile has-addons has-text-centered ">
                    <button @click = "gameData.gpAdd('cone',1,0)"  class="button is-large column is-warning is-light is-responsive ">△</button>
                    <button @click = "gameData.gpAdd('cone',1,0)" class=" button is-large column is-link is-light is-responsive">□</button>
            </div>
        </div> 
        <div class="tile is-parent is-vertical">
            <button @click = "gameData.gpAdd('cone',2,2)" class="button is-large box is-warning is-light box has-text-centered is-responsive">△</button>
            <button @click = "gameData.gpAdd('cone',2,1)" class="button is-large tile box is-warning is-light box has-text-centered is-responsive">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button @click = "gameData.gpAdd('cone',2,0)" class="button is-large column is-warning is-light is-responsive">△</button>
                    <button @click = "gameData.gpAdd('cone',2,0)" class=" button is-large column is-link is-light is-responsive">□</button>

            </div>
        </div>
    </div>
    
</template>


<script setup>
import { useGameDataStore } from '../stores/gameData';
const gameData = useGameDataStore();




</script>