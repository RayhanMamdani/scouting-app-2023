<template>
    <div>
      <!-- <button @click="test()">DELETE </button> -->
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


<div class="field my-5" v-show="(getDefence() != 'No Defence')">
    <label class="label"> Defence Type </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="defenceType" id='Line' @input="setDefenceType('Line')">
          Line
        </label>
        <label class="radio mx-5">
          <input type="radio" name="defenceType" id='Zone/Trap' @input="setDefenceType('Zone/Trap')">
          Zone/Trap
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="defenceType" id='Man' @input="setDefenceType('Man')">
          Man
        </label>
        <label class="radio  mx-5">
          <input type="radio" name="defenceType" id='Tbone' @input="setDefenceType('Tbone')">
          Tbone
        </label>

      </div>
</div>


<div class="field my-5">
    <label class="label"> Cycle Over Chargestation </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="member" @input="setCSCycle(true)">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="member" @input="setCSCycle(false)">
          No
        </label>

      </div>
</div>


<div class="field  my-5">
    <label class="label"> Win </label>
    <div class="control">
        <label class="radio mx-5">
          <input type="radio" name="win" @input="setWin(true)">
          Yes
        </label>
        <label class="radio mx-5">
          <input type="radio" name="win" @input="setWin(false)">
          No
        </label>

      </div>
</div>

<div class="field">
  <label class="label">Comments</label>
  <div class="control">
    <textarea class="textarea" placeholder="1. Driver Skill&#10;2. Penalties&#10;3. Any special comments on the robot or things not included yet" id="comments" @change="setComments"></textarea>
  </div>
</div>



<div class="field is-grouped columns">
  <div class="control column">
    <button @click="matchPush(), createMatch() " class="button is-primary">Submit</button>
  </div>
  <div class="control column">
    <button @click ="cancel()" class="button is-link is-danger is-pulled-right">Abort Match</button>
  </div>
</div>
</div>
</template>


<script>
import { useGameDataStore } from '../stores/gameData'; 
import MatchDataService from '../services/MatchDataService';
import { useTournamentStore } from '../stores/tournamentData';
import TeamDataService from '../services/TeamDataService'
import { useTeamDataStore } from '../stores/teamData'

export default {
  data () {
    return {
      teams: [],
      matches: [],
      singleTeamMatches: [],
    }
  },
  methods: {
    test(){
      MatchDataService.deleteAll();
    },
    cancel(){
    
      if(confirm("Are you sure you want to abort? All data will be lost!") ){
        this.resetMatchData();
        this.$router.push('/');
        
      }
    },
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
    getDefence() {
      return gameData.defence;
    },
    setDefenceType(type) {
      gameData.setDefenceType(type);
    },
    setCSCycle(state) {
      gameData.setCSCycle(state);
    },
    setWin(state) {
      gameData.setWin(state);
    },
    async createMatch() {
      gameData.setAutoScore();
      if(confirm("Are you sure you want to submit?") ){
        this.matches = await MatchDataService.getMatches(); // for some reason, this is taking a while and everything else is going ahead while this is still loading, so creating a match for a new team breaks it

    console.log(this.matches)
    console.log(this.teams)
      MatchDataService.create(gameData.matchData);
      
      console.log(this.matches)
      this.updateTeam();
      this.resetMatchData();
      this.$router.push('/')
      }
      
    },
    resetMatchData() {
      gameData.$reset()
    },
    updateTeam() {
      let teamID = '';
      this.teams.forEach(team => {
        if (team.teamNum == gameData.teamNum) {
          teamID = team._id;
        }
      })
      console.log(this.teamAvg())
      TeamDataService.update(teamID, this.teamAvg())
    },
    teamAvg() {
      teamData.$reset();
      this.matches.forEach(match => {
        if (match.teamNum == gameData.teamNum) {
          // add arrays to teamData.js for every team avg attribute and then average them here
          // will need to push new match data to matches database but also respective teams' match attribute arrays
          // should the team match attribute arrays go local in teamData.js (always reloading all arrays from scratch) or should it go into the database (only pushing one at a time)
          // then update teams database using teamData.js averages
          teamData.communityPush(match.community);
          teamData.autoCSPush(match.autoCS);
          teamData.gpTotalPush(match.gpTotal);
          teamData.gpAutoTotalPush(match.gpAutoTotal);
          teamData.gpTeleopTotalPush(match.gpTeleopTotal);
          teamData.gpAutoScorePush(match.gpAutoScore);
          teamData.gpTeleopScorePush(match.gpTeleopScore);
          teamData.gpTotalScorePush(match.gpTotalScore);
          teamData.autoStartPosPush(match.autoStartPos);
          teamData.pickupTypePush(match.pickupType);
          teamData.autoPickupPosPush(match.autoPickupPos);
          teamData.endgameStartTimePush(match.endgameStartTime);
          teamData.estCycleTimePush(match.estCycleTime);
          teamData.endgameCSPush(match.endgameCS);
          teamData.defencePush(match.defence);
          teamData.defenceTypePush(match.defenceType);
          teamData.CSCyclePush(match.CSCycle);
          teamData.winPush(match.win);
        }
      })
      
      
      let team = {
        teamNum: gameData.teamNum,
        modeCommunity: this.findMode(teamData.communityArray),
        modeAutoCS: this.findHighestCS(teamData.autoCSArray),
        avgGpTotal: this.findAvg(teamData.gpTotalArray),
        avgGpAutoTotal: this.findAvg(teamData.gpAutoTotalArray),
        avgGpTeleopTotal: this.findAvg(teamData.gpTeleopTotalArray),
        avgGpAutoScore: this.findAvg(teamData.gpAutoScoreArray),
        avgGpTeleopScore: this.findAvg(teamData.gpTeleopScoreArray),
        avgGpTotalScore: this.findAvg(teamData.gpTotalScoreArray),
        modeAutoStartPos: this.findMode(teamData.autoStartPosArray),
        modePickupType: this.findMode(teamData.pickupTypeArray),
        modeAutoPickupPos: this.findMode(teamData.autoPickupPosArray),
        avgEndgameStartTime: this.findAvg(teamData.endgameStartTimeArray),
        avgEstCycleTime: this.findAvg(teamData.estCycleTimeArray),
        modeEndgameCS: this.findHighestCS(teamData.endgameCSArray),
        modeDefence: this.findMode(teamData.defenceArray),
        modeDefenceType: this.findMode(teamData.defenceTypeArray),
        modeCSCycle: this.findMode(teamData.CSCycleArray),
        modeWin: this.findMode(teamData.winArray)
      }
      return team;
    },
    findMode(array) {
      
      let validData = array.filter(data => data !== '');
      
      var mode = '';
      var frequency = {};  // array of frequency.
      var maxFreq = 0;  // holds the max frequency.

      for (var i in validData) {
          frequency[validData[i]] = (frequency[validData[i]] || 0) + 1; // increment frequency.

          if (frequency[validData[i]] > maxFreq) { // is this frequency > max so far ?
              maxFreq = frequency[validData[i]];  // update max.
              mode = validData[i];          // update result.
          }
      }
      return mode;
    },
    findAvg(array) {
      let validData = array.filter(data => data != null && data !== undefined && data !== "");
      let total = 0;
      validData.forEach(number => {
        total += number;
      })
      let avg = parseFloat((total/validData.length).toFixed(0));
      if (avg == 'NaN') {
        return 0;
      } else {
        return avg;
      }
    },
    findHighestCS(array) {
      if (array.indexOf('Engaged') >= 0) {
        return 'Engaged';
      } else if (array.indexOf('Docked') >= 0) {
        return 'Docked';
      } else if (array.indexOf('Parked') >= 0) {
        return 'Parked';
      } else {
        return 'None';
      }
    },
    findAvgTime(array) {
      
      let totalSecs = 0;
      let validTimes = 0;
      array.forEach(time => {
        if (time != '') {
          let EGStartTimeInSecs = parseFloat(time.substring(0,1)*60) + parseFloat(time.substring(2,4));
          totalSecs += EGStartTimeInSecs;
          validTimes++;
        }
      })
      let avgTimeInSecs = Math.round(totalSecs / validTimes);
      return(avgTimeInSecs-(avgTimeInSecs%=60))/60+(9<avgTimeInSecs?':':':0')+avgTimeInSecs;
    }
  },
  async mounted() {
    this.teams = await TeamDataService.getTeams();
    this.matches = await MatchDataService.getMatches()
  }
}
const gameData = useGameDataStore();
const tournamentData = useTournamentStore();
const teamData = useTeamDataStore();


</script>