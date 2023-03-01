<template>
    <div class="container">
        <div class="box my-4">
            <div class="has-text-centered">
                <h1 class="title mb-5" style="color:red;">Matches</h1>
            </div>
            <div class="columns">
                <input type="text" class="input column is-one-quarter mr-5" name="teamFilter" id="teamFilter" placeholder="Filter by team number" @input="filterMatches();">
                <input type="text" class="input column is-one-quarter mr-5" name="matchFilter" id="matchFilter" placeholder="Filter by match number" @input="filterMatches();">
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
                                <th @click="sort('win')"><a>Win</a></th>
                                <th @click="sort('comments')"><a>Comments</a></th>
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
    import MatchDataService from '../services/MatchDataService.js'
    //import { defineCustomElement } from 'vue';

    export default {
        data() {
            return {
                currentSortField: String,
                sortDirection: String,
                currentPage: String,
                matches: [],
                filteredMatches: [],
                paginationMatches: [],
                pageNum: Number,
                pageMatches: Number,
            }
        },
        methods: {
            async getMatches() {
                return await MatchDataService.getMatches();
            },
            createMatches() {
                document.querySelector('#output').innerHTML = '';
                let teamFilterValue = document.querySelector('#teamFilter').value;
                let matchFilterValue = document.querySelector('#matchFilter').value;
                if (teamFilterValue != '' || matchFilterValue != '') { // creates and filters the matches using the sorted matches when something is present in the filter form
                    this.filteredMatches.forEach(match => {
                        let output = this.createRow(match);
                        document.querySelector('#output').appendChild(output);
                    })
                    //this.initPagination(this.filteredMatches);
                } else {
                    this.matches.forEach(match => {
                        let output = this.createRow(match);
                        document.querySelector('#output').appendChild(output);
                    })
                    //this.initPagination(this.matches);
                }
            },
            createRow(match) { // to make this have @click function, might need to make createRow a Vue component and just put currentMatch in gameData.js or something
                let newRow = document.createElement('tr');
                newRow.setAttribute('scope', 'row');
                let newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.teamNum));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.matchNum));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.autoStartPos));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.autoPickupPos));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.autoCS));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpAutoTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpAutoScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpTeleopTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpTeleopScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpTotal));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.gpTotalScore));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.community));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.pickupType));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.endgameStartTime));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.estCycleTime));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.scoutName));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.endgameCS));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.defence));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.defenceType));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.CSCycle));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.win));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                newCell.appendChild(document.createTextNode(match.comments));
                newRow.appendChild(newCell);
                newCell = document.createElement('td');
                let button = document.createElement('button');
                button.setAttribute('class', 'button is-danger');
                button.appendChild(document.createTextNode('Delete'));
                button.addEventListener('click', console.log('test')); //'this.deleteMatch(match._id)'
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

                this.filterMatches();
            },
            filterMatches() {
                let teamFilterValue = document.querySelector('#teamFilter').value;
                let matchFilterValue = document.querySelector('#matchFilter').value;
                if (teamFilterValue != 0 && matchFilterValue != 0) {
                    this.filteredMatches = this.matches.filter(match => match.teamNum === parseInt(teamFilterValue))
                    this.filteredMatches = this.filteredMatches.filter(match => match.matchNum === parseInt(matchFilterValue))
                } else if (teamFilterValue != 0) {
                    this.filteredMatches = this.matches.filter(match => match.teamNum === parseInt(teamFilterValue))
                } else if (matchFilterValue != 0) {
                    this.filteredMatches = this.matches.filter(match => match.matchNum === parseInt(matchFilterValue))
                }
                this.createMatches();
            },
            deleteMatch(id){
                console.log('test')
                MatchDataService.delete(id);
            },
            /*initPagination(matches) {
                let pages = Math.ceil(matches.length/this.pageMatches);
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
            this.matches = (await this.getMatches()).reverse();
            this.currentSortField = 'matchNum';
            this.sortDirection = 'DESC';
            //this.pageNum = 1;
            //this.pageMatches = 5;
            this.createMatches();
        }
    }
    /*const DeleteButton = defineCustomElement({
        props: {
            class: String,
            id: String
        },
        template: '<button @click=deleteMatch('+this.id+')>Delete</button>',
    })
    customElements.define('deleteButton', DeleteButton)*/
</script>

<style scoped>
div {
  margin: auto;
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
