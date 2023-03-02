<template>
    <div class="container">
        <div class="box my-4">
            <div class="has-text-centered">
                <h1 class="title mb-5" style="color:red;">{{ this.matchNum }}</h1>
            </div>
            <div class="columns">
                <input type="text" class="input column is-one-quarter mr-5" name="teamFilter" id="teamFilter"
                    placeholder="Filter by team number" @input="filterMatches();">
                <input type="text" class="input column is-one-quarter mr-5" name="matchFilter" id="matchFilter"
                    placeholder="Filter by match number" @input="filterMatches();">
            </div>
            <div class="">
                <div class="table-container">
                    <label class="label">Columns are sortable!</label>
                    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th @click="sort('teamNum')"><a>Team #</a></th>
                                <th @click="sort('matchNum')"><a>Match #</a></th>
                                <th @click="sort('autoStartPos')"><a>Auto Start Pos</a></th>
                                <th @click="sort('autoPickupPos')"><a>Auto Pickup Pos</a></th>
                                <th @click="sort('autoCS')"><a>Auto CS</a></th>
                                <th @click="sort('gpAutoTotal')"><a>Auto GP Total</a></th>
                                <th @click="sort('gpAutoScore')"><a>Auto GP Score</a></th>
                                <th @click="sort('gpTeleopTotal')"><a>Teleop GP Total</a></th>
                                <th @click="sort('gpTeleopScore')"><a>Teleop GP Score</a></th>
                                <th @click="sort('gpTotal')"><a>Combined GP Total</a></th>
                                <th @click="sort('gpTotalScore')"><a>Combined GP Score</a></th>
                                <th @click="sort('community')"><a>Community</a></th>
                                <th @click="sort('pickupType')"><a>Pickup Type</a></th>
                                <th @click="sort('endgameStartTime')"><a>EG Start Time</a></th>
                                <th @click="sort('estCycleTime')"><a>Est. Cycle Time (s)</a></th>
                                <th @click="sort('scoutName')"><a>Scout Name</a></th>
                                <th @click="sort('endgameCS')"><a>EG CS</a></th>
                                <th @click="sort('defence')"><a>Defence</a></th>
                                <th @click="sort('defenceType')"><a>Defence Type</a></th>
                                <th @click="sort('CSCycle')"><a>Cycle Over Charge Station</a></th>

                            </tr>
                        </thead>
                        <tbody v-for="data in pMatch">
                            <td>
                                <h6>{{ data.teamNum }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.matchNum }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.autoStartPos }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.autoPickupPos }}</h6>
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
                                <h6>{{ data.gpTeleopTotal }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.gpTeleopScore }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.gpTotalScore }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.community }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.pickupType }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.endgameStartTime }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.estCycleTime }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.scoutName }}</h6>
                            </td>
                            <td>
                                <h6>{{ data.EndgameCS }}</h6>
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
                </div>
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

<script>
import { useRoute } from 'vue-router';

export default {
    data() {
        return {

            matchNum: Number,
            matches: Array,
            pMatch: Array

        }
    },

    methods: {

        filterMatches() {
            this.matches.forEach(report => {
                if (report.matchNum == this.matchNum) {
                    this.pMatch.push(report);
                }
            })
        },

        mounted() {
            const route = useRoute();
            this.matchNum = route.params;
            this.sortDirection = 'ASC'

        },

        async created() {
            this.matches = await MatchDataService.getMatches();
            await MatchDataService.getMatches().then(this.filterMatches());

        }
    }
}


</script>