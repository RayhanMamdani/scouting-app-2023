<script setup>
import { useGameDataStore } from '../stores/gameData';
import MatchDataService from '../services/MatchDataService';
const gameData = useGameDataStore();
console.log(JSON.parse(JSON.stringify(gameData.matchData)));
</script>

<template>
    <div>

        <div class="field">
  <label class="label">Scout Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Name">
  </div>
</div>
<div class="field">
  <label class="label">Chargestation Endgame</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Docked</option>
        <option>Engaged</option>
        <option>Parked</option>
        <option>None</option>
      </select>
    </div>
  </div>
</div>

<div class="field my-5">
  <label class="label">Defense</label>
  <div class="control">
    <div class="select">
      <select id="defence" @change="getValue">
        <option value = '0'>0 - No Defence</option>
        <option value = '1'>1 - Rarely Defends</option>
        <option value = '2'>2 - Some Defence</option>
        <option value = '3'>3 - Frequent Defence</option>
        <option value = '4'>4 - Only Plays Defence</option>
      </select>
    </div>
  </div>
</div>


<div class="field my-5" v-show="(gameData.defence != 0)">
    <label class="label"> Defence Type </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="member">
          Line
        </label>
        <label class="radio mx-5">
          <input type="radio" name="member">
          Zone/Trap
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="member">
          Man
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="member">
          Tbone
        </label>

      </div>
</div>

<div class="field my-5">
    <label class="label"> Cycle Over Chargestation </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="member">
          No
        </label>

      </div>
</div>


<div class="field  my-5">
    <label class="label"> Win </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="member">
          No
        </label>

      </div>
</div>

<div class="field">
    <label class="label"> RP Gained</label>
    <input class="input" type="number" placeholder="RP">
</div>



<div class="field">
  <label class="label">Comments</label>
  <div class="control">
<textarea class="textarea" placeholder="Special comments on this robot"></textarea>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button @click="MatchDataService.create(gameData.matchData), gameData.$reset(), this.$router.push('/')" class="button is-primary">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>


<script setup>
import { useGameDataStore } from '../stores/gameData'; 
const gameData = useGameDataStore();
const getValue = () => {
  let x = document.getElementById('defence').value;
  gameData.setDefence(x);
}


</script>