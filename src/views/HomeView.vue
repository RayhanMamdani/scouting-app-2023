
<template>
<nav>
      <Navbar />
    </nav>

<div class=" is-flex ">

  </div>
  <div class="container box mt-6 has-background-dark ">
    <span class=" is-flex is-justify-content-center my-5 is-">
      <img src="../assets/Charged_Up_Logo.svg.png" alt="Charged Up" width="200" height="100">
    </span>

    <div class="field ">
      <label class="label has-text-white">Team Number:</label>
      <div class="control ">
        <input class="input has-background-grey has-text-white" type="number" id="teamNum2">
      </div>
    </div>

    <div class="field">
      <label class="label has-text-white">Match Number:</label>
      <div class="control">
        <input class="input has-background-grey has-text-white" type="number" id="matchNum">
      </div>
    </div>
    <div class="field ">
      <label class="label has-text-white has-text-white">Team Color:</label>
      <div class="control">
        <div class="select ">
      <select id="matchSide" class="has-background-grey has-text-white">
        <option value = 'red'>Red</option>
        <option value = 'blue'>Blue</option>
      </select>
    </div>
  
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
import TeamDataService from '../services/TeamDataService'
import axios from 'axios'
import { createDOMCompilerError } from '@vue/compiler-dom'
import http from "../http-common";
import '../assets/style.css';
import Navbar from "../components/Navbar.vue"
export default {
  data(){
    return{
      teams: Array
    }

  },
  components: { Navbar },

  methods: {
    async checkinArr(teamNum){

      let teamarr = [];
       teamarr = await http.get("teams");
       console.log(teamarr)
       console.log(teamNum)
      for (let i = 0; i < teamarr.data.length; i++){
        console.log(teamarr)
        console.log(teamarr.data[i].teamNum)
        console.log(parseInt(teamNum) == teamarr.data[i].teamNum)
        if (parseInt(teamNum) == teamarr.data[i].teamNum){
          return false;
        }
      }
return true;

    },
    async scoutCheck() {
      let matchNum = document.getElementById('matchNum').value
      let teamNum = document.getElementById('teamNum2').value
      console.log(document.getElementById('teamNum'))
      let matchSide = document.getElementById('matchSide').value
      document.getElementById('matchNum').value = null;
      document.getElementById('teamNum').value = null;
     


      if (useTournamentStore().matchCheck(matchNum)) { // don't useuseTournamentStore().teamCheck(teamNum)
      
  let isIn = true;
      let teamarr = [];
       teamarr = await http.get("teams");
       console.log(teamarr)
       console.log(teamNum)
      for (let i = 0; i < teamarr.data.length; i++){
        console.log(teamarr)
        console.log(teamarr.data[i].teamNum)
        console.log(parseInt(teamNum) == teamarr.data[i].teamNum)
        if (parseInt(teamNum) == teamarr.data[i].teamNum){
          isIn = false;
        }
      }
      if (isIn){
        console.log(teamNum)
      http.post("teams", {
        teamNum: teamNum,
        modeCommunity: false,
            modeAutoCS: "",
            avgGpTotal: 0,
            avgGpAutoTotal: 0,
            avgGpTeleopTotal: 0,
            avgGpAutoScore: 0,
            avgGpTeleopScore: 0,
            avgGpTotalScore: 0,
            modeAutoStartPos: "",
            modePickupType: "",
            modeAutoPickupPos: "",
            avgEndgameStartTime: 0,
            avgEstCycleTime: 0,
            modeEndgameCS: "",
            modeDefence: "",
            modeDefenceType: "",
            modeCSCycle: false,
            modeWin: false,
      })
    .then((response) => {
    console.log('POST request successful:', response.data);
       })
      .catch((error) => {
    console.error('Error making POST request:', error);
        });
      }
      
        this.$router.push('/ScoutMatch')
        useGameDataStore().setMatchNum(matchNum);
        useGameDataStore().setTeamNum(teamNum);
        useGameDataStore().setMatchSide(matchSide);
        
      } else {
        alert('please check you have entered correct data');
      }
    }

  },
  async created(){
      this.teams = await TeamDataService.getTeams();
      await TeamDataService.getTeams().then(useTournamentStore().getTeams(this.teams));
    
  }

  
}

</script>



<style scoped>
div {
  margin: auto;
}

.box {
  width: 25%;
}
</style>