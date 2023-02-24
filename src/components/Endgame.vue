<template>
    <div>

        <div class="field">
  <label class="label">Scout Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Name" id="scoutName" @input="setScoutName">
  </div>
</div>
<div class="field">
  <label class="label">Chargestation Endgame</label>
  <div class="control">
    <div class="select">
      <select id="endgameCS" @change="setEndgameCS">
        <option value="Docked">Docked</option>
        <option value="Engaged">Engaged</option>
        <option value="Parked">Parked</option>
        <option value="None">None</option>
      </select>
    </div>
  </div>
</div>

<div class="field my-5">
  <label class="label">Defense</label>
  <div class="control">
    <div class="select">
      <select id="defence" @change="getValue">
        <option value = 'No Defence'>0 - No Defence</option>
        <option value = 'Rarely Defends'>1 - Rarely Defends</option>
        <option value = 'Some Defence'>2 - Some Defence</option>
        <option value = 'Frequent Defence'>3 - Frequent Defence</option>
        <option value = 'Only Plays Defence'>4 - Only Plays Defence</option>
      </select>
    </div>
  </div>
</div>


<div class="field my-5" v-show="(gameData.defence != 0)">
    <label class="label"> Defence Type </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="defenceType" @input="gameData.setDefenceType('Line')">
          Line
        </label>
        <label class="radio mx-5">
          <input type="radio" name="defenceType" @input="gameData.setDefenceType('Zone/Trap')">
          Zone/Trap
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="defenceType" @input="gameData.setDefenceType('Man')">
          Man
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="defenceType" @input="gameData.setDefenceType('Tbone')">
          Tbone
        </label>

      </div>
</div>

<div class="field my-5">
    <label class="label"> Cycle Over Chargestation </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="member" @input="gameData.setCSCycle(true)">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="member" @input="gameData.setCSCycle(false)">
          No
        </label>

      </div>
</div>


<div class="field  my-5">
    <label class="label"> Win </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="win" @input="gameData.setWin(true)">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="win" @input="gameData.setWin(false)">
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
    <textarea class="textarea" placeholder="Special comments on this robot" id="comments" @change="setComments"></textarea>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button @click="matchPush, MatchDataService.create(gameData.matchData), gameData.$reset(), updateTeam, this.$router.push('/')" class="button is-primary">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>


<script>
import { useGameDataStore } from '../stores/gameData'; 
import MatchDataService from '../services/MatchDataService';
import { useTournamentStore } from '../stores/tournamentData';
import TeamDataService from '../services/TeamDataService'

export default {
  data () {
    return {
      teams: [],
      matches: [],
      singleTeamMatches: [],
    }
  },
  methods: {
    getValue() {
      let x = document.getElementById('defence').value;
      gameData.setDefence(x);
    },
    setEndgameCS() {
      let x = document.getElementById('endgameCS').value;
      gameData.setEndgameCS(x);
    },
    setScoutName() {
      let x = document.getElementById('scoutName').value;
      gameData.setScoutName(x);
    },
    setComments() {
      let x = document.getElementById('comments').value;
      gameData.setComments(x);
    },
    matchPush() {
      if (!tournamentData.matchCheck(gameData.matchNum)) {
        tournamentData.matchPush(gameData.matchNum);
      }
    },
    async updateTeam() {
      let teamID = '';
      this.teams.forEach(team => {
        if (team.teamNum === gameData.teamNum) {
          teamID = team._id;
        }
      })
      //await TeamDataService.update(teamID, teamAvg())
    },
    async teamAvg() {
      this.matches.forEach(match => {
        if (match.teamNum === gameData.teamNum) {
          // add arrays to teamData.js for every team avg attribute and then average them here
          // will need to push new match data to matches database but also respective teams' match attribute arrays
        }
      })
    }
  },
  async mounted() {
    this.teams = await TeamDataService.getTeams();
    this.matches = await MatchDataService.getMatches();
  }
}
const gameData = useGameDataStore();
const tournamentData = useTournamentStore();


</script>