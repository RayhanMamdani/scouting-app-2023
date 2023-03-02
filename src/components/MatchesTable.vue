<template>
    <div class="container has-text-centered pt-4">
  
      <div class="card has-background-dark has-text-white has-text-weight-bold-bis mx-auto mt-3 pt-2 pb-3 px-4"
        style="border-radius: 8px;">
        <h1 class="title is-1 is-size-2-mobile m-3 mb-4 has-text-white is-centered">Matches</h1>
        <table class="table has-background-dark is-bordered is-hoverable is-fullwidth has-text-white-ter">
          <thead>
            <tr>
              <th @click= "sort()" class="has-text-white has-text-weight-bold" title="Match ID" scope="col" id="match">Match</th>
              <th class="has-text-white has-text-weight-bold" title="Red Alliance Robot #1" scope="col">R1</th>
              <th class="has-text-white has-text-weight-bold" title="Red Alliance Robot #2" scope="col">R2</th>
              <th class="has-text-white has-text-weight-bold" title="Red Alliance Robot #3" scope="col">R3</th>
              <th class="has-text-white has-text-weight-bold" title="Blue Alliance Robot #1" scope="col">B1</th>
              <th class="has-text-white has-text-weight-bold" title="Blue Alliance Robot #2" scope="col">B2</th>
              <th class="has-text-white has-text-weight-bold" title="Blue Alliance Robot #3" scope="col">B3</th>
              <th class="has-text-white has-text-weight-bold" title="Which Alliance Won the Match" scope="col">Winner</th>
            </tr>
          </thead>
          <tbody  v-for="data in matchData">
            <td >
              <h6 v-on:click="this.$router.push(`match/${data.matchNum}`)" >{{ data.matchNum }}</h6>
            </td>
            <td class="has-text-danger">
              <h6 class="underline" v-on:click="this.$router.push(`match?match=${data.r1}`)">{{ data.r1 }}</h6>
            </td>
            <td class="has-text-danger">
              <h6 class="" v-on:click="this.$router.push(`team?team=${data.r2}`)">{{ data.r2 }}</h6>
            </td>
            <td class="has-text-danger">
              <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r3}`)">{{ data.r3 }}</h6>
            </td>
            <td class="has-text-info">
              <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.b1}`)">{{ data.b1 }}</h6>
            </td>
            <td class="has-text-info">
              <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.b2}`)">{{ data.b2 }}</h6>
            </td>
            <td class="has-text-info">
              <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r1}`)">{{ data.b3 }}</h6>
            </td>
            <td>
              <h6>{{ data.win }}</h6>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  
  
  import MatchDataService from '../services/MatchDataService';
  

  
  export default {
    data() {
      return {
        matches: Array,
        matchData: Array,
        
        sortDirection: String,
      };
    },
    methods: {
  
      // sort() {
      //     console.log('hello')
      //     this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
  
        
      //   if (this.sortDirection === 'ASC') {
      //     this.matchData.sort((a, b) => a.matchNum - b.matchNum)
      //   }else{
      //     this.matchData.sort((a,b) => b.matchNum - a.matchNum)
      //   }
      //   this.getMatches();
        
      // },
      
      test(){
        this.$router.push('/matches')
      },
  
      getMatches() {
        let num = [];
        this.matches.forEach(match => {
          if (!num.includes(match.matchNum)) {
            this.matchData.push(this.getMatchData(match.matchNum));
            num.push(match.matchNum);
          }
        });
        this.matchData.sort((a, b) => a.matchNum - b.matchNum)
        console.log(num);
      },
  
      getMatchData(matchNum) {
        let teamBlue = [];
        let teamRed = []
        let winner = null;
        let incomplete = { matchNum: "N/A", teamNum: "Incomplete" }
        let completed = true
  
        this.matches.forEach((team) => {
          if (team.matchNum == matchNum && team.matchSide === "blue") {
            teamBlue.push(team);
          } else if (team.matchNum === matchNum) {
            teamRed.push(team);
          }
        });
  
        while (teamBlue.length < 3) {
          teamBlue.push(incomplete);
  
        }
        while (teamRed.length < 3) {
          teamRed.push(incomplete);
  
        }
  
        let r1 = teamRed[0].teamNum;
        let r2 = teamRed[1].teamNum;
        let r3 = teamRed[2].teamNum;
  
        let b1 = teamBlue[0].teamNum;
        let b2 = teamBlue[1].teamNum;
        let b3 = teamBlue[2].teamNum;
  
  
  
  
        if (teamRed[0].win) {
          winner = "Red";
        } else if (teamBlue[0].win) {
          winner = "Blue";
        } else {
          winner = "Tie";
  
        }
  
        let Match = {
          matchNum: teamBlue[0].matchNum === Number ? teamBlue[0].matchNum : teamRed[0].matchNum,
          r1: r1,
          r2: r2,
          r3: r3,
          b1: b1,
          b2: b2,
          b3: b3,
          win: winner
        }
        return Match;
      }
  
    },
  
    async created() {
      this.matches = await MatchDataService.getMatches();
      this.matchData = [];
      this.sortDirection = 'ASC'
      await MatchDataService.getMatches().then(this.getMatches());
    
    }
  }
  
  
  </script>