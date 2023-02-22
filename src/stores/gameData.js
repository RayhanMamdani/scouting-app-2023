
import { defineStore } from 'pinia'

export const useGameDataStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'gameData',

    state: () => ({
        scoutName: null,
        matchNum: null,
        teamNum:null,  
        gameState: 'auto', // 3 states auto,teleop,endgame for switching components
        community: false, 
        chargestation: "G", //Docked: D, Engaged: E, Ground: G
        gpTotal: 0,//total number of gamepieces scored (total indexes of gamepiece array)
        gpScored: [], // score gamepiece array from grid
        gpTotal: 0,
        defence: 0,


    }),
    getters: {

    },
    actions: {
        gpAdd(type, column, height){
            // type: Cone or Cube , height: 0-bottom 1-middle 2-top, column: 0-left 1-middle 2-right
             let gp = {type,column,height}
            this.gpScored.push(gp);  
            this.gpTotal = this.gpScored.length;
        },
        gpRemove(){
        this.gpScored.splice(this.gpScored.length-1);
        this.gpTotal = this.gpScored.length;
        },
        setGameState(state){
            this.gameState = state;
        },
        setCommunity(){
            this.community =!this.community;
        },
        setChargeStation(state){
            this.chargestation = state;
        },
        setMatchNum(num){
            this.matchNum = num;
        },
         setTeamNum(num){
            this.teamNum = num;
        },
        setDefence(num){
            this.defence = num;
            console.log(num);
        }
    }
})