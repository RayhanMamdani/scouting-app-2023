
import { defineStore } from 'pinia'
import TeamDataService from '../services/TeamDataService'

export const useTournamentStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'tournamentData',

    state: () => ({
        
       teams: [],
       matchesPlayed: []



    }),
    getters: {
       

        

    },
    actions: {
      
        matchCheck(match){
            
       return this.matchesPlayed.every( x => x !== match);
        },

        teamCheck(team){
       return this.teams.includes(parseInt(team));
        },
         getTeams(array){
            this.teams = [];
            array.forEach( x => {
                this.teams.push(x.teamNum)
         })
            
        },
        teamPush(teamNum) {
            this.teams.push(teamNum);
        },
        matchPush(matchNum) {
            this.matchesPlayed.push(matchNum);
        }
    }
})