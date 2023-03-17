
<template>
    <nav>
        <Navbar />
    </nav>
    <div class="has-text-centered  p-2">
        <h1 class="title my-5 has-text-white">Match #{{matchNum}}</h1>
        
    </div>
    <div class="container">
        <div class="box my-4 has-background-dark">
            <div>
                <h1 class="title is-4 mb-5 has-text-danger"> Red Alliance </h1> 
                <h1 class="title is-5 has-text-success is-dark my-1" v-show="Win === 'Red Alliance'"> Win </h1>
                
            </div>


            <div class="table-container">

                <table class="table has-background-dark is-bordered is-striped is-hoverable is-fullwidth has-text-white">
                    <thead>
                        <tr id="red">
                            <th><a>Team #</a></th>
                            <th><a>Auto Start Pos</a></th>
                            <th><a>Auto Mobility</a></th>
                            <th><a>Auto Pickup</a></th>

                            <th><a>Auto CS</a></th>
                            <th><a>Auto GP Total</a></th>
                            <th><a>Auto Score</a></th>
                            <th><a>Teleop GP Total</a></th>

                            <th><a>Overall GP Scored</a></th>


                            <th><a>Mode Pickup</a></th>
                            <th><a>EG Start Time</a></th>
                            <th><a>Est. Cycle Time (s)</a></th>
                            <th><a>EG CS</a></th>
                            <th><a>Defence</a></th>
                            <th><a>Defence Type</a></th>
                            <th><a>Cycle Over CS?</a></th>


                        </tr>
                    </thead>
                    <tbody v-for="data in rMatch">
                        <td>
                            <h6 @click="this.$router.push(`team/${data.teamNum}`)" >{{ data.teamNum }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoStartPos }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.community }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoPickupPos.toString() }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoCS }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.gpAutoTotal }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoScore}}</h6>
                        </td>
                        <td>
                            <h6>{{ data.gpTeleopTotal }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.gpTotal }}</h6>
                        </td>

                        <td>
                            <h6>{{ displayArray(data.pickupType) }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.endgameStartTime }}</h6>
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
                            <h6>{{ data.CSCycle }}</h6>
                        </td> 

                    </tbody>

                </table>


                <h1 class="title is-5  has-text-danger mb-0"> Comments: </h1>

                <section v-for="data in rMatch">

                    <div class="has-background-dark card">
                        <div class="card-content">
                            <h2 class="title is-5 has-text-white">
                                {{ data.teamNum }}
                            </h2>
                            <p class="subtitle is-6 has-text-white">
                                "{{ data.comments }}" - {{ data.scoutName }}
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </div>

        <div class="box my-4 has-background-dark">
            <div>
                <h1 class="title is-4 mb-5 has-text-info"> Blue Alliance </h1>
                <h1 class="title is-5 has-text-success is-dark my-1" v-show="Win === 'Blue Alliance'"> Win </h1>
            </div>
            <div class="table-container">

                <table class="table is-bordered is-striped is-hoverable is-fullwidth has-background-dark has-text-white">
                    <thead>
                        <tr>
                            <th><a>Team #</a></th>
                            <th><a>Auto Start Pos</a></th>
                            <th><a>Auto Mobility</a></th>
                            <th ><a>Auto Pickup</a></th>

                            <th ><a>Auto CS</a></th>
                            <th ><a>Auto GP Total</a></th>
                            <th ><a>Auto Score</a></th>
                            <th ><a>Teleop GP Total</a>
                        </th>

                            <th ><a>Overall GP Scored</a></th>


                            <th ><a>Mode Pickup Type</a></th>
                            <th ><a>EG Start Time</a></th>
                            <th ><a>Est. Cycle Time (s)</a></th>
                            <th><a>EG CS</a></th>
                            <th ><a>Defence</a></th>
                            <th ><a>Defence Type</a></th>
                            <th><a>Cycle Over CS?</a></th>


                        </tr>
                    </thead>
                    <tbody v-for="data in bMatch">
                        <td>
                            <h6 @click="this.$router.push(`team/${data.teamNum}`)">{{ data.teamNum }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoStartPos }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.community }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoPickupPos.toString() }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.autoCS }}</h6>
                        </td>
                        <td>
                            <h6>{{ data.gpAutoTotal }}</h6>
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
                            <h6>{{ data.endgameStartTime }}</h6>
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
                            <h6>{{ data.CSCycle }}</h6>
                        </td>

                    </tbody>

                </table>
                
                <h1 class="title is-5  has-text-info mb-0"> Comments: </h1>

                <section v-for="data in bMatch">

                    <div class="has-background-dark card">
                        <div class="card-content">
                            <h2 class="title is-5 has-text-white">
                                {{ data.teamNum }}
                            </h2>
                            <p class="subtitle is-6 has-text-white">
                                {{ data.comments }} - {{ data.scoutName }}
                            </p>
                        </div>
                    </div>
                </section>
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

export default {
    data() {
        return {

            matchNum: Number,
            matches: Array,
            bMatch: Array,
            rMatch: Array,
            currentSortField: String,
            sortDirection: String,
            Win: String

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

        createMatches() {
            this.bMatch = [];
            this.rMatch = [];
            this.matches.forEach(report => {
                if (report.matchNum == this.matchNum && report.matchSide === 'blue') {
                    this.bMatch.push(report);
                    
                } else if (report.matchNum == this.matchNum && report.matchSide === 'red') {
                    this.rMatch.push(report);
                }
            })
            

        },

        checkWin() {
            let bCount = 0;
            let rCount = 0;
            this.bMatch.forEach( x =>{
                if(x.win){
                    bCount++
                }
            });
            this.rMatch.forEach( x =>{
                if(x.win){
                    rCount++
                }
            });
           
            if(bCount > rCount){
                return "Blue Alliance";
            }else if(rCount > bCount){
                return "Red Alliance";
            }else{
                return "Tie";
            }
            
        }
    },
    mounted() {

        const route = useRoute();
        this.matchNum = route.params.num;
        
        

    },

    async created() {

        this.matches = await MatchDataService.getMatches();
        await MatchDataService.getMatches().then(this.createMatches());
       
        this.Win = this.checkWin();
    }

}


</script>

<style>
#red a {
    color: rgb(218, 55, 55);
}
</style>