
<template>
  <div class=" is-flex ">

  </div>
  <div class="container box mt-6">
    <span class=" is-flex is-justify-content-center my-5 is-">
      <img src="../assets/Charged_Up_Logo.svg.png" alt="Charged Up" width="200" height="100">
    </span>

    <div class="field">
      <label class="label">Team Number:</label>
      <div class="control">
        <input class="input" type="number" id="teamNum">
      </div>
    </div>

    <div class="field">
      <label class="label">Match Number:</label>
      <div class="control">
        <input class="input" type="number" id="matchNum">
      </div>
    </div>
    <span class="buttons is-centered">

      <button @click="scoutCheck" class=" is button is-danger is-large is-responsive mt-5">Scout Match</button>

    </span>

  </div>
</template>

<script>
import { useTournamentStore } from '../stores/tournamentData'
import{useGameDataStore} from '../stores/gameData'

export default {
  setup() {
  },

  methods: {
    
    scoutCheck() {
      let matchNum = document.getElementById('matchNum').value
      let teamNum = document.getElementById('teamNum').value
     console.log( 'Match: ' + useTournamentStore().matchCheck(matchNum));
     console.log( 'Team: ' + useTournamentStore().teamCheck(teamNum));


      if ( useTournamentStore().teamCheck(teamNum) && useTournamentStore().matchCheck(matchNum)) {
        this.$router.push('/ScoutMatch')
        useGameDataStore().setMatchNum(matchNum);
        useGameDataStore().setTeamNum(teamNum);
        
      } else {
        alert('please check you have entered correct data');
      }
    }

  }
}
</script>


<style scoped>
div {
  margin: auto;
}

.box {
  width: 25%;

</style>