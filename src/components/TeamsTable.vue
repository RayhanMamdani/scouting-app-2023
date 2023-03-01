<template>
    <div class="container">
        <div class="box my-4 is-dark">
            <div class="has-text-centered">
                <h1 class="title mb-2" style="color: red;">Teams</h1>
            </div>
            <div class="columns">
                <input type="text" class="input column is-one-quarter" name="teamFilter" id="teamFilter" placeholder="Filter by team number" @input="filterTeams();">
            </div>
            <div>
                <div class="table-container">
                    <label class="label">Columns are sortable!</label>
                    <table class="table is-bordered is-sthiped is-hoverable is-fullwidth">
                        <thead>
                        <tr>
                            <th @click="sort('teamNum')"><a>Team #</a></th>
                            <th @click="sort('modeAutoStartPos')"><a>Mode Auto Start Pos</a></th>
                            <th @click="sort('modeAutoPickupPos')"><a>Mode Auto Pickup Pos</a></th>
                            <th @click="sort('modeAutoCS')"><a>Highest Auto CS</a></th>
                            <th @click="sort('avgGpAutoTotal')"><a>Avg Auto GP Total</a></th>
                            <th @click="sort('avgGpAutoScore')"><a>Avg Auto GP Score</a></th>
                            <th @click="sort('avgGpTeleopTotal')"><a>Avg Teleop GP Total</a></th>
                            <th @click="sort('avgGpTeleopScore')"><a>Avg Teleop GP Score</a></th>
                            <th @click="sort('avgGpTotal')"><a>Avg Combined GP Total</a></th>
                            <th @click="sort('avgGpTotalScore')"><a>Avg Combined GP Score</a></th>
                            <th @click="sort('modeCommunity')"><a>Mode Community</a></th>
                            <th @click="sort('modePickupType')"><a>Mode Pickup Type</a></th>
                            <th @click="sort('avgEndgameStartTime')"><a>Avg EG Start Time</a></th>
                            <th @click="sort('avgEstCycleTime')"><a>Avg Est. Cycle Time (s)</a></th>
                            <th @click="sort('modeEndgameCS')"><a>Highest EG CS</a></th>
                            <th @click="sort('modeDefence')"><a>Mode Defence</a></th>
                            <th @click="sort('modeDefenceType')"><a>Mode Defence Type</a></th>
                            <th @click="sort('modeCSCycle')"><a>Mode Cycle Over Charge Station</a></th>
                            <th @click="sort('modeWin')"><a>Mode Win</a></th>
                            </tr>
                        </thead>
                        <tbody id="output"></tbody>
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
    import TeamDataService from '../services/TeamDataService.js'
    //import { defineCustomElement } from 'vue';

    export default {
        data() {
            return {
                currentSortField: String,
                sortDirection: String,
                currentPage: String,
                teams: [],
                filteredTeams: [],
                paginationTeams: [],
                pageNum: Number,
                pageTeams: Number,
            }
        },
        methods: {
            async getTeams() {
                return await TeamDataService.getTeams();
            },
            createTeams() {
                document.querySelector('#output').innerHTML = '';
                let teamFilterValue = document.querySelector('#teamFilter').value;
                if (teamFilterValue != '') { // creates and filters the teams using the sorted teams when something is present in the filter form
                    this.filteredTeams.forEach(team => {
                        let output = this.createRow(team);
                        document.querySelector('#output').appendChild(output);
                    })
                    //this.initPagination(this.filteredTeams);
                } else {
                    this.teams.forEach(team => {
                        let output = this.createRow(team);
                        document.querySelector('#output').appendChild(output);
                    })
                    //this.initPagination(this.teams);
                }
            },
            createRow(team) {
                let newRow = document.createElement('tr');
                newRow.setAttribute('scope', 'row');
                let newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.teamNum));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeAutoStartPos));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeAutoPickupPos));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeAutoCS));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpAutoTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpAutoScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpTeleopTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpTeleopScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgGpTotalScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeCommunity));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modePickupType));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgEndgameStartTime));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.avgEstCycleTime));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeEndgameCS));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeDefence));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeDefenceType));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeCSCycle));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(team.modeWin));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                let button = document.createElement('button');
                button.setAttribute('class', 'button is-danger');
                button.appendChild(document.createTextNode('Delete'));
                button.addEventListener('click', console.log('test')); //'this.deleteTeam(team._id)'
                newCell.appendChild(button);
                newRow.appendChild(newCell);
                
                return newRow;
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
                        this.teams.sort((a, b) => a.teamNum - b.teamNum);
                    } else if (field === 'modeAutoStartPos') {
                        this.teams.sort((a, b) => a.modeAutoStartPos.localeCompare(b.modeAutoStartPos));
                    } else if (field === 'modeAutoPickupPos') {
                        this.teams.sort((a, b) => a.modeAutoPickupPos.localeCompare(b.modeAutoPickupPos));
                    } else if (field === 'modeAutoCS') {
                        this.teams.sort((a, b) => a.modeAutoCS.localeCompare(b.modeAutoCS));
                    } else if (field === 'avgGpAutoTotal') {
                        this.teams.sort((a, b) => a.avgGpAutoTotal - b.avgGpAutoTotal);
                    } else if (field === 'avgGpAutoScore') {
                        this.teams.sort((a, b) => a.avgGpAutoScore - b.avgGpAutoScore);
                    } else if (field === 'avgGpTeleopTotal') {
                        this.teams.sort((a, b) => a.avgGpTeleopTotal - b.avgGpTeleopTotal);
                    } else if (field === 'avgGpTeleopScore') {
                        this.teams.sort((a, b) => a.avgGpTeleopScore - b.avgGpTeleopScore);
                    } else if (field === 'avgGpTotal') {
                        this.teams.sort((a, b) => a.avgGpTotal - b.avgGpTotal);
                    } else if (field === 'avgGpTotalScore') {
                        this.teams.sort((a, b) => a.avgGpTotalScore - b.avgGpTotalScore);
                    } else if (field === 'modeCommunity') {
                        this.teams.sort((a, b) => Number(a.modeCommunity) - Number(b.modeCommunity));
                    } else if (field === 'modePickupType') {
                        this.teams.sort((a, b) => a.modePickupType.localeCompare(b.modePickupType));
                    } else if (field === 'avgEndgameStartTime') {
                        this.teams.sort((a, b) => a.avgEndgameStartTime.localeCompare(b.avgEndgameStartTime));
                    } else if (field === 'avgEstCycleTime') {
                        this.teams.sort((a, b) => a.avgEstCycleTime - b.avgEstCycleTime);
                    } else if (field === 'modeEndgameCS') {
                        this.teams.sort((a, b) => a.modeEndgameCS.localeCompare(b.modeEndgameCS));
                    } else if (field === 'modeDefence') {
                        this.teams.sort((a, b) => a.modeDefence.localeCompare(b.modeDefence));
                    } else if (field === 'modeDefenceType') {
                        this.teams.sort((a, b) => a.modeDefenceType.localeCompare(b.modeDefenceType));
                    } else if (field === 'modeCSCycle') {
                        this.teams.sort((a, b) => Number(a.modeCSCycle) - Number(b.modeCSCycle));
                    } else if (field === 'modeWin') {
                        this.teams.sort((a, b) => Number(a.modeWin) - Number(b.modeWin));
                    }                    
                } else if (this.sortDirection === 'DESC') {
                    if (field === 'teamNum') {
                        this.teams.sort((a, b) => b.teamNum - a.teamNum);
                    } else if (field === 'modeAutoStartPos') {
                        this.teams.sort((a, b) => b.modeAutoStartPos.localeCompare(a.modeAutoStartPos));
                    } else if (field === 'modeAutoPickupPos') {
                        this.teams.sort((a, b) => b.modeAutoPickupPos.localeCompare(a.modeAutoPickupPos));
                    } else if (field === 'modeAutoCS') {
                        this.teams.sort((a, b) => b.modeAutoCS.localeCompare(a.modeAutoCS));
                    } else if (field === 'avgGpAutoTotal') {
                        this.teams.sort((a, b) => b.avgGpAutoTotal - a.avgGpAutoTotal);
                    } else if (field === 'avgGpAutoScore') {
                        this.teams.sort((a, b) => b.avgGpAutoScore - a.avgGpAutoScore);
                    } else if (field === 'avgGpTeleopTotal') {
                        this.teams.sort((a, b) => b.avgGpTeleopTotal - a.avgGpTeleopTotal);
                    } else if (field === 'avgGpTeleopScore') {
                        this.teams.sort((a, b) => b.avgGpTeleopScore - a.avgGpTeleopScore);
                    } else if (field === 'avgGpTotal') {
                        this.teams.sort((a, b) => b.avgGpTotal - a.avgGpTotal);
                    } else if (field === 'avgGpTotalScore') {
                        this.teams.sort((a, b) => b.avgGpTotalScore - a.avgGpTotalScore);
                    } else if (field === 'modeCommunity') {
                        this.teams.sort((a, b) => Number(b.modeCommunity) - Number(a.modeCommunity));
                    } else if (field === 'modePickupType') {
                        this.teams.sort((a, b) => b.modePickupType.localeCompare(a.modePickupType));
                    } else if (field === 'avgEndgameStartTime') {
                        this.teams.sort((a, b) => b.avgEndgameStartTime.localeCompare(a.avgEndgameStartTime));
                    } else if (field === 'avgEstCycleTime') {
                        this.teams.sort((a, b) => b.avgEstCycleTime - a.avgEstCycleTime);
                    } else if (field === 'modeEndgameCS') {
                        this.teams.sort((a, b) => b.modeEndgameCS.localeCompare(a.modeEndgameCS));
                    } else if (field === 'modeDefence') {
                        this.teams.sort((a, b) => b.modeDefence.localeCompare(a.modeDefence));
                    } else if (field === 'modeDefenceType') {
                        this.teams.sort((a, b) => b.modeDefenceType.localeCompare(a.modeDefenceType));
                    } else if (field === 'modeCSCycle') {
                        this.teams.sort((a, b) => Number(b.modeCSCycle) - Number(a.modeCSCycle));
                    } else if (field === 'modeWin') {
                        this.teams.sort((a, b) => Number(b.modeWin) - Number(a.modeWin));
                    }  
                }

                this.filterTeams();
            },
            filterTeams() {
                let teamFilterValue = document.querySelector('#teamFilter').value;
                if (teamFilterValue != 0) {
                    this.filteredTeams = this.teams.filter(team => team.teamNum === parseInt(teamFilterValue))
                }
                this.createTeams();
            },
            deleteTeam(id){
                console.log('test')
                TeamDataService.delete(id);
            },
            /*initPagination(teams) {
                let pages = Math.ceil(teams.length/this.pageTeams);
                for (let i=1; i<pages+1; i++) {
                    let newLI = document.createElement('li');
                    let newBox = document.createElement('a');
                    newBox.setAttribute('class', 'pagination-link');
                    newBox.setAttribute('@click', 'setPageNum('+i+')')
                    newBox.appendChild(document.createTextNode(i));
                    newLI.appendChild(newBox);
                    document.querySelector('#pagination').appendChild(newLI);
                }
            },
            setPageNum(num){
                console.log('test')
                this.pageNum = num;
            }*/
            /*calculateCycleTime(timeString, teleopPieces) {
                console.log(timeString)
                let EGStartTimeInSecs = parseFloat(timeString.substring(0,1)*60) + parseFloat(timeString.substring(2,4))
                let cyclePeriod = EGStartTimeInSecs - 15.0
                let cycleTime = cyclePeriod / teleopPieces
                return cycleTime
            },*/
        },
        async mounted() {
            this.teams = (await this.getTeams()).reverse();
            this.currentSortField = 'teamNum';
            this.sortDirection = 'DESC';
            //this.pageNum = 1;
            //this.pageTeams = 5;
            this.createTeams();
            this.sort('teamNum');
        }
    }
    /*const DeleteButton = defineCustomElement({
        props: {
            class: String,
            id: String
        },
        template: '<button @click=deleteTeam('+this.id+')>Delete</button>',
    })
    customElements.define('deleteButton', DeleteButton)*/
</script>

<style scoped>
div {
  margin: modeAuto;

}
a{
    color: black;
}
a:hover{
    color: red;
}
.columns{
    margin-left: 0.065%;
}

</style>
