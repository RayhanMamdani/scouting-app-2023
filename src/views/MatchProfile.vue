
<template>
    <nav>
        <Navbar />
    </nav>
    <div class="has-text-centered  p-2">
        <h1 class="title my-5 has-text-white"> Match #{{ this.matchNum }} Summary</h1>
        <h1 class="subtitle is-5 has-text-white is-dark my-1"> Winner: {{ this.Win }} </h1>
    </div>
    <div class="container">
        <div class="box my-4 has-background-dark">
            <div class=" ">
                <h1 class="title is-4 mb-5 has-text-danger"> Red Alliance </h1>
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
                            <h6>{{ data.teamNum }}</h6>
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
            <div class=" ">
                <h1 class="title is-4 mb-5 has-text-info"> Blue Alliance </h1>
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
                            <h6>{{ data.teamNum }}</h6>
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
    <!--<nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list" id="pagination">
            
        </ul>
            </nav>-->
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


        sort(field) {
            if (field === undefined) {
                // called from filter
                field = this.currentSortField;
            } else if (field === this.currentSortField) {
                this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
                this.currentSortField = field;
            } else {
                this.sortDirection = 'ASC';
                this.currentSortField = field;
            }

            if (this.sortDirection === 'ASC') {
                if (field === 'teamNum') {
                    this.matches.sort((a, b) => a.teamNum - b.teamNum);
                } else if (field === 'matchNum') {
                    this.matches.sort((a, b) => a.matchNum - b.matchNum);
                } else if (field === 'autoStartPos') {
                    this.matches.sort((a, b) => a.autoStartPos.localeCompare(b.autoStartPos));
                } else if (field === 'autoPickupPos') {
                    this.matches.sort((a, b) => a.autoPickupPos.localeCompare(b.autoPickupPos));
                } else if (field === 'autoCS') {
                    this.matches.sort((a, b) => a.autoCS.localeCompare(b.autoCS));
                } else if (field === 'gpAutoTotal') {
                    this.matches.sort((a, b) => a.gpAutoTotal - b.gpAutoTotal);
                } else if (field === 'gpAutoScore') {
                    this.matches.sort((a, b) => a.gpAutoScore - b.gpAutoScore);
                } else if (field === 'gpTeleopTotal') {
                    this.matches.sort((a, b) => a.gpTeleopTotal - b.gpTeleopTotal);
                } else if (field === 'gpTeleopScore') {
                    this.matches.sort((a, b) => a.gpTeleopScore - b.gpTeleopScore);
                } else if (field === 'gpTotal') {
                    this.matches.sort((a, b) => a.gpTotal - b.gpTotal);
                } else if (field === 'gpTotalScore') {
                    this.matches.sort((a, b) => a.gpTotalScore - b.gpTotalScore);
                } else if (field === 'community') {
                    this.matches.sort((a, b) => Number(a.community) - Number(b.community));
                } else if (field === 'pickupType') {
                    this.matches.sort((a, b) => a.pickupType.localeCompare(b.pickupType));
                } else if (field === 'endgameStartTime') {
                    this.matches.sort((a, b) => a.endgameStartTime.localeCompare(b.endgameStartTime));
                } else if (field === 'estCycleTime') {
                    this.matches.sort((a, b) => a.estCycleTime - b.estCycleTime);
                } else if (field === 'scoutName') {
                    this.matches.sort((a, b) => a.scoutName.localeCompare(b.scoutName));
                } else if (field === 'endgameCS') {
                    this.matches.sort((a, b) => a.endgameCS.localeCompare(b.endgameCS));
                } else if (field === 'defence') {
                    this.matches.sort((a, b) => a.defence.localeCompare(b.defence));
                } else if (field === 'defenceType') {
                    this.matches.sort((a, b) => a.defenceType.localeCompare(b.defenceType));
                } else if (field === 'CSCycle') {
                    this.matches.sort((a, b) => Number(a.CSCycle) - Number(b.CSCycle));
                } else if (field === 'win') {
                    this.matches.sort((a, b) => Number(a.win) - Number(b.win));
                } else if (field === 'comments') {
                    this.matches.sort((a, b) => a.comments.localeCompare(b.comments));
                }
            } else if (this.sortDirection === 'DESC') {
                if (field === 'teamNum') {
                    this.matches.sort((a, b) => b.teamNum - a.teamNum);
                } else if (field === 'matchNum') {
                    this.matches.sort((a, b) => b.matchNum - a.matchNum);
                } else if (field === 'autoStartPos') {
                    this.matches.sort((a, b) => b.autoStartPos.localeCompare(a.autoStartPos));
                } else if (field === 'autoPickupPos') {
                    this.matches.sort((a, b) => b.autoPickupPos.localeCompare(a.autoPickupPos));
                } else if (field === 'autoCS') {
                    this.matches.sort((a, b) => b.autoCS.localeCompare(a.autoCS));
                } else if (field === 'gpAutoTotal') {
                    this.matches.sort((a, b) => b.gpAutoTotal - a.gpAutoTotal);
                } else if (field === 'gpAutoScore') {
                    this.matches.sort((a, b) => b.gpAutoScore - a.gpAutoScore);
                } else if (field === 'gpTeleopTotal') {
                    this.matches.sort((a, b) => b.gpTeleopTotal - a.gpTeleopTotal);
                } else if (field === 'gpTeleopScore') {
                    this.matches.sort((a, b) => b.gpTeleopScore - a.gpTeleopScore);
                } else if (field === 'gpTotal') {
                    this.matches.sort((a, b) => b.gpTotal - a.gpTotal);
                } else if (field === 'gpTotalScore') {
                    this.matches.sort((a, b) => b.gpTotalScore - a.gpTotalScore);
                } else if (field === 'community') {
                    this.matches.sort((a, b) => Number(b.community) - Number(a.community));
                } else if (field === 'pickupType') {
                    this.matches.sort((a, b) => b.pickupType.localeCompare(a.pickupType));
                } else if (field === 'endgameStartTime') {
                    this.matches.sort((a, b) => b.endgameStartTime.localeCompare(a.endgameStartTime));
                } else if (field === 'estCycleTime') {
                    this.matches.sort((a, b) => b.estCycleTime - a.estCycleTime);
                } else if (field === 'scoutName') {
                    this.matches.sort((a, b) => b.scoutName.localeCompare(a.scoutName));
                } else if (field === 'endgameCS') {
                    this.matches.sort((a, b) => b.endgameCS.localeCompare(a.endgameCS));
                } else if (field === 'defence') {
                    this.matches.sort((a, b) => b.defence.localeCompare(a.defence));
                } else if (field === 'defenceType') {
                    this.matches.sort((a, b) => b.defenceType.localeCompare(a.defenceType));
                } else if (field === 'CSCycle') {
                    this.matches.sort((a, b) => Number(b.CSCycle) - Number(a.CSCycle));
                } else if (field === 'win') {
                    this.matches.sort((a, b) => Number(b.win) - Number(a.win));
                } else if (field === 'comments') {
                    this.matches.sort((a, b) => b.comments.localeCompare(a.comments));
                }
            }

            this.createMatches();
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
            this.checkWin();

        },

        checkWin() {
            if (this.bMatch[0].win && !this.rMatch[0].win) {
                this.Win = "Blue Alliance"
            } else if (!this.bMatch[0].win && this.rMatch[0].win) {
                this.Win = "Red Alliance"
            } else {
                this.Win = 'Tie'
            }
            
        }
    },
    mounted() {

        const route = useRoute();
        this.matchNum = route.params.num;
        this.sortDirection = 'ASC'

        this.currentSortField = 'matchNum';
        this.sortDirection = 'DESC';

    },

    async created() {

        this.matches = await MatchDataService.getMatches();
        await MatchDataService.getMatches().then(this.createMatches());


    }

}


</script>

<style>
#red a {
    color: rgb(218, 55, 55);
}
</style>