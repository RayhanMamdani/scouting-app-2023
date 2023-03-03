
<template>
    
    
                 <div class="table-container">
                     <label class="label">Columns are sortable!</label>
                     <table class="table is-bordered is-striped is-hoverable is-fullwidth">
                         <thead>
                             <tr>
                                 <th ><a>Team #</a></th>
                                 <th ><a>Auto Start Pos</a></th>
                                 <th ><a>Auto Mobility</a></th>
                                 <th @click="sort('autoPickupPos')"><a>Auto Pickup</a></th>
                                
                                 <th @click="sort('autoCS')"><a>Auto CS</a></th>
                                 <th @click="sort('gpAutoTotal')"><a>Auto GP Total</a></th>
                                 <th @click="sort('gpAutoScore')"><a>Auto GP Score</a></th>
                                 <th @click="sort('gpTeleopTotal')"><a>Teleop GP Total</a></th>
                                 
                                 <th @click="sort('gpTotal')"><a>Overall GP Scored</a></th>
                                 
                                 
                                 <th @click="sort('pickupType')"><a>Pickup Type</a></th>
                                 <th @click="sort('endgameStartTime')"><a>EG Start Time</a></th>
                                 <th @click="sort('estCycleTime')"><a>Est. Cycle Time (s)</a></th>
                                 <th @click="sort('endgameCS')"><a>EG CS</a></th>
                                 <th @click="sort('defence')"><a>Defence</a></th>
                                 <th @click="sort('defenceType')"><a>Defence Type</a></th>
                                 <th><a>Cycle Over CS?</a></th>
                                
 
                             </tr>
                         </thead>
                         <tbody v-for="data in pMatch">
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
                                 <h6>{{ data.gpTotal }}</h6>
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
                 </div>
         
         
     
 </template>
 

 
 <script>
 
 
 import MatchDataService from '../services/MatchDataService.js'
 
 export default {

    props: {teamColour: String, Num: Number},
     data() {
         return {
 
             matchNum: Number,
             matches: Array,
             pMatch: Array,
             currentSortField: String,
               sortDirection: String,
 
         }
     },
 
     methods: {
         
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
             this.pMatch =[];
             this.matches.forEach(report => {
                 if (report.matchNum == this.matchNum && report.matchSide === {teamColour}) {
                     this.pMatch.push(report);
                 }
             })
         },
     },
         mounted() {
          
             
             this.matchNum = {Num}
             this.sortDirection = 'ASC'
             this.pMatch = [];
             this.currentSortField = 'matchNum';
           this.sortDirection = 'DESC';
 
         },
 
         async created() {
             this.matches = await MatchDataService.getMatches();
             await MatchDataService.getMatches().then(this.createMatches());
 
         }
     
 }
 
 
 </script>