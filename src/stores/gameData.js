
import { defineStore } from 'pinia'

export const useGameDataStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'gameData',

    state: () => ({
        scoutName: null,
        matchNum: null,
        teamNum: null,
        gameState: 'auto', // 3 states auto,teleop,endgame for switching components
        community: false,
        autoCS: "Parked", //Docked, Engaged, Parked
        gpTotal: 0,//total number of gamepieces scored (total indexes of gamepiece array)
        gpScored: [], // score gamepiece array from grid
        gpTotal: 0,
        defence: 0,
        gpAutoTotal: 0,
        gpTeleopTotal: 0,
        gpAutoScore: 0,
        gpTeleopScore: 0,
        gpTotalScore: 0,
       
        autoStartPos: '',
        pickupType: '',
        autoPickupPos: '',
        CSCycle: false,
        endgameCS: "N/A", //N/A, Docked, Engaged


    }),
    getters: {

    },
    actions: {
          

 gpAdd(type, column, height) {
    let gameState = this.gameState 
     // type: Cone or Cube , height: 0-bottom 1-middle 2-top, column: 0-left 1-middle 2-right
     let gp = { type, column, height,gameState}
     
     this.gpScored.push(gp);
     this.gpTotal = this.gpScored.length;

     console.log(gp);
     if (gp.gameState === 'auto') {
         this.gpAutoTotal++;
         // calculating total score of game pieces
         if (gp.height == 0) {
             this.gpTotalScore += 3;
             this.gpAutoScore += 3;
         } else if (gp.height == 1) {
             this.gpTotalScore += 4;
             this.gpAutoScore += 4;
         } else if (gp.height == 2) {
             this.gpTotalScore += 6;
             this.gpAutoScore += 6;
         }
     }
     if (gp.gameState === 'teleop') {
         this.gpTeleopTotal++;
         // calculating total score of game pieces
         if (gp.height == 0) {
             this.gpTotalScore += 2;
             this.gpAutoScore += 2;
         } else if (gp.height == 1) {
             this.gpTotalScore += 3;
             this.gpAutoScore += 3;
         } else if (gp.height == 2) {
             this.gpTotalScore += 5;
             this.gpAutoScore += 5;
         }
     }
 },
 gpRemove() {
     let gp = this.gpScored[this.gpScored.length-1];
     

     if (gp.gameState === 'auto') {
         
         this.gpAutoTotal--;

         if (gp.height == 0) {
             this.gpTotalScore -= 3;
             this.gpAutoScore -= 3;
         } else if (gp.height == 1) {
             this.gpTotalScore -= 4;
             this.gpAutoScore -= 6; 
         } else if (gp.height == 2) {
             this.gpTotalScore -= 6;
             this.gpAutoScore -= 6;
         }
     }
     if (gp.gameState === 'teleop') {
         this.gpTeleopTotal--;
         if (gp.height == 0) {
             this.gpTotalScore -= 2;
             this.gpAutoScore -= 2;
         } else if (gp.height == 1) {
             this.gpTotalScore -= 3;
             this.gpAutoScore -= 3;
         } else if (gp.height == 2) {
             this.gpTotalScore -= 5;
             this.gpAutoScore -= 5;
         }
     }

     this.gpScored.splice(this.gpScored.length - 1);
     this.gpTotal = this.gpScored.length;
 },
        setGameState(state) {
            this.gameState = state;
        },
        setCommunity(state) {
            this.community = state;
        },
        setAutoCS(state) {
            this.autoCS = state;
        },
        setMatchNum(num) {
            this.matchNum = num;
        },
        setTeamNum(num) {
            this.teamNum = num;
        },
        setDefence(num) {
            this.defence = num;
            console.log(num);
        },
            setAutoStartPos(position){
                this.autoStartPos = position;
            },
            setPickupType(state){
                this.pickupType = state;
            },
            setAutoPickupPos(position){
                this.autoPickupPos = position;
            },
            setCSCycle(state){
                this.CSCycle = state;
            },
            setEndgameCS(state){
                this.endgameCS = state;
            }
        }
    }

);
