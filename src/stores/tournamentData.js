
import { defineStore } from 'pinia'

export const useTournamentStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'tournamentData',

    state: () => ({
        
       teams: [188,610,771,1246,1305,2056,2200,2386,2702,4476,4946,4951,5036,5409,5719,5834,6140,6141,6378,6397,6514,6866,6975,6987,7476,7480,7558,7603,7712,7902,8349,8850,9113,9127],
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
        teamPush(teamNum) {
            this.teams.push(teamNum);
        },
        matchPush(matchNum) {
            this.matchesPlayed.push(matchNum);
        }
    }
})