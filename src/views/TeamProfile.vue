
<template>
    <nav>
        <Navbar />
    </nav>
    <div class="has-text-centered  p-2">
        <h1 class="title  is-size-2 my-5 has-text-white"> Team #{{teamNum}}</h1>
        
    </div>
    <div class="container"> 
        <div class="box my-4 has-background-dark">
            <div>
                <h1 class="title is-4 mb-5 has-text-light"> Tournament Averages </h1> 
             
                
            </div>


            <div class="table-container">

                <table class="table has-background-dark is-bordered is-striped is-hoverable is-fullwidth has-text-white">
                    <thead>
                        <tr id="red" >
                            <th><a>Mode Auto Pickup Pos</a></th>
                            <th><a>Mode Auto CS</a></th>
                            <th><a>Avg #Gp Auto </a></th>  
                            <th><a>Avg #Gp Teleop </a></th>
                            <th><a>Avg Points Teleop & Auto Gp</a></th>
                            <th><a>Favourite Pickup Pos.</a></th>
                            <th><a>Est. Cycle Time (s)</a></th>
                            <th><a> Avg EG Start Time</a></th>
                            <th><a>Mode CS</a></th>
                            <th><a>Defence</a></th>
                            <th><a>Defence Type</a></th>
                            <th><a>Winning Record?</a></th>

                            


                        </tr>
                
                    </thead>
                   
                    
                        <tbody>
                        <td>
                            <h6>{{ team.modeAutoPickupPos }}</h6>
                        </td>
                        <td>
                            <h6>{{ team.modeAutoCS }}</h6>
                        </td>
                        <td>
                            <h6>{{ team.avgGpAutoTotal }} GP</h6>
                        </td>
                        <td>
                            <h6>{{ team.avgGpTeleopTotal }} GP</h6>
                        </td>
                        <td>
                            <h6>{{ team.avgGpTotalScore }}</h6>
                        </td>
                        <td>
                            <h6>{{ team.modePickupType }}</h6>
                        </td>
                        <td>
                            <h6>{{ team.avgEstCycleTime }}s</h6>
                        </td>
                        <td>
                            <h6>{{ team.avgEndgameStartTime}}s</h6>
                        </td>
                        <td>
                            <h6>{{ team.modeEndgameCS}}</h6>
                        </td>   
                        <td>
                            <h6>{{ team.modeDefence}}</h6>
                        </td>   
                        <td>
                            <h6>{{ team.modeDefenceType}}</h6>
                        </td>  
                        <td>
                            <h6>{{ team.modeWin}}</h6>
                        </td>  
                        
                        </tbody>
                </table>


               
            </div>

          

        </div>
        <div class="box my-4 has-background-dark">
            <div class="has-text-centered">
                <h1 class="title is-4 mb-5 has-text-primary is-centered"> Matches Played </h1> 
                
                <table class="table is-bordered has-background-dark is-striped is-hoverable is-fullwidth">
                         <thead>
                             <tr id="red">
                                <th ><a>Match #</a></th>
                                 <th ><a>Auto Start Pos</a></th>
                                 <th ><a>Auto Mobility</a></th>
                                 <th ><a>Auto Pickup</a></th>
                                
                                 <th ><a>Auto CS</a></th>
                                 <th ><a>Auto GP Total</a></th>
                                 <th ><a>Auto GP Score</a></th>
                                 <th><a>Auto Score</a></th>
                                 <th ><a>Teleop GP Total</a></th>
                                 
                                 <th ><a>Overall GP Scored</a></th>
                                 
                                 
                                 <th ><a>Pickup Type</a></th>
                                
                                 <th ><a>Est. Cycle Time (s)</a></th>
                                 <th ><a>EG CS</a></th>
                                 <th ><a>Defence</a></th>
                                 <th ><a>Defence Type</a></th>
                                 <th><a>Win</a></th>
                                
 
                             </tr>
                         </thead>
                         <tbody v-for="data in teamMatches" class=" has-text-white">
                            <td>
                                 <h6>{{ data.matchNum }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.autoStartPos }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.community }}</h6>
                             </td>
                             <td>
                                 <h6>{{data.autoPickupPos.toString()}} </h6>
                             </td>
                             <td>
                                 <h6>{{ data.autoCS }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.gpAutoTotal }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.gpAutoScore }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.autoScore }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.gpTeleopTotal }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.gpTotal }}</h6>
                             </td>
                            
                             <td>
                                 <h6>{{displayArray(data.pickupType) }}</h6>
                             </td>
                           
                             <td>
                                 <h6>{{ data.estCycleTime }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.endgameCS }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.defence }}</h6>
                             </td>
                             <td>
                                 <h6>{{ data.defenceType }}</h6>
                             </td>
                             <td>
                                 <h6>{{data.win }}</h6>
                             </td>
 
                         </tbody>
 
                     </table>
            </div>
        </div>

        </div>

      
</template>

<script setup>
import Navbar from '../components/Navbar.vue';

</script>

<script>

import { useRoute } from 'vue-router';
import MatchDataService from '../services/MatchDataService.js'
import TeamDataService from '../services/TeamDataService';


export default {
    data() {
        return {
            team:Object,
            teamNum: Number,
            teams: Array,
            matches: Array,
            teamMatches: Array,
           
      
        }
    },

    methods: {

     displayArray(arr) {
  let counts = {};
  let maxCount = 0;
  let maxValue = null;

  for (let value of arr) {
    if (counts[value]) {
      counts[value]++;
    } else {
      counts[value] = 1;
    }

    if (counts[value] > maxCount) {
      maxCount = counts[value];
      maxValue = value;
    }
  }

  return maxValue;
},

        getTeam(teamnum){
            this.teams.forEach(x => {
                if(x.teamNum == teamnum){
                    this.team = x;
                }
            })
        },
        getMatches(teamNum){
            this.matches.forEach(x => {
                if(x.teamNum == teamNum)
                this.teamMatches.push(x);
            })
        }

       
    },
    mounted() {

        
        
        

    },

    async created() {
        const route = useRoute();
        this.teamNum = route.params.num;
        this.teamMatches = [];
        this.teams = await TeamDataService.getTeams();
        this.matches = await MatchDataService.getMatches();
        await TeamDataService.getTeams().then(this.getTeam(this.teamNum));
        await MatchDataService.getMatches().then(this.getMatches(this.teamNum));
        console.log(this.teamMatches);
      
    }

}


</script>

<style>
#red a {
    color: rgb(255, 255, 255);
    font-weight: bold;
}
</style>