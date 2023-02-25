
import { defineStore } from 'pinia'

export const useTournamentStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'tournamentData',

    state: () => ({
        
       teams: [7558,1241,1114,1234,1111],
       matchesPlayed: [1,3,4,2]



    }),
    getters: {

    },
    actions: {
        matchCheck(match){
       return this.matchesPlayed.every( x => x != match);
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