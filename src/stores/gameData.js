
import { defineStore } from 'pinia'

export const useGameDataStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'gameData',

    state: () => ({
        matchNum: 0,
        matchSide: '', 
        teamNum: 0,
        gameState: 'auto', // 3 states auto,teleop,endgame for switching components
        community: false,
        autoCS: "None", //Docked, Engaged, Parked
       
        autoScore:0,
        gpTotal: 0,//total number of gamepieces scored (total indexes of gamepiece array)
        gpScored: [], // score gamepiece array from grid
        gpAutoTotal: 0,
        gpTeleopTotal: 0,
        gpAutoScore: 0,
        gpTeleopScore: 0,
        gpTotalScore: 0,
       
        autoStartPos: '',
        pickupType: [],
        pickupTotal: 0,
        autoPickupPos: [],
        endgameStartTime: null,
        estCycleTime: null,

        scoutName: '',
        endgameCS: "", // N/A, Docked, Engaged
        defence: 'No Defence',
        defenceType: '',
        CSCycle: false,
        win: false,
        comments: '',


    }),
    getters: {

        
        matchData(state) {
          
            let match = {
                matchNum: state.matchNum,
                matchSide: state.matchSide,
                teamNum: state.teamNum,
                community: state.community,
                autoCS: state.autoCS,
                autoScore: state.autoScore,
                
                gpTotal: state.gpTotal,
                gpAutoTotal: state.gpAutoTotal,
                gpTeleopTotal: state.gpTeleopTotal,
                gpAutoScore: state.gpAutoScore,
                gpTeleopScore: state.gpTeleopScore,
                gpTotalScore: state.gpTotalScore,
                autoStartPos: state.autoStartPos,
                pickupType: state.pickupType,
                pickupTotal:state.pickupTotal,
                autoPickupPos: state.autoPickupPos,
                CSCycle: state.CSCycle,
                endgameStartTime: state.endgameStartTime,
                estCycleTime: state.estCycleTime,
                endgameCS: state.endgameCS,
                defence: state.defence,
                defenceType: state.defenceType,
                scoutName: state.scoutName,
                win: state.win,
                comments: state.comments,
            }
            return match;
        }
    },
    actions: {
        gpAdd(type, column, height){
            let gameState = this.gameState
            // type: Cone or Cube , height: 0-bottom 1-middle 2-top, column: 0-left 1-middle 2-right
             let gp = {type,column,height,gameState}
            this.gpScored.push(gp);  
            this.gpTotal = this.gpScored.length;
            if (gameState === 'auto') {
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
            if (gameState === 'teleop') {
                this.gpTeleopTotal++;
                // calculating total score of game pieces
                if (gp.height == 0) {
                    this.gpTotalScore += 2;
                    this.gpTeleopScore += 2;
                } else if (gp.height == 1) {
                    this.gpTotalScore += 3;
                    this.gpTeleopScore += 3;
                } else if (gp.height == 2) {
                    this.gpTotalScore += 5;
                    this.gpTeleopScore += 5;
                }
            }
        },
        setAutoScore(){
            if(this.autoCS === 'Docked')
            this.autoScore += 8;
            else if(this.autoCS === 'Engaged')
            this.autoScore +=12

            if(this.community)
            this.autoScore += 3

            this.autoScore += this.gpAutoScore
        },
        gpRemove(){
            let gp = this.gpScored[this.gpScored.length - 1]
            if (gp.gameState === 'auto') {
                this.gpAutoTotal--;
                if (gp.height == 0) {
                    this.gpTotalScore -= 3;
                    this.gpAutoScore -= 3;
                } else if (gp.height == 1) {
                    this.gpTotalScore -= 4;
                    this.gpAutoScore -= 4;
                } else if (gp.height == 2) {
                    this.gpTotalScore -= 6;
                    this.gpAutoScore -= 6;
                }
            }
            if (gp.gameState === 'teleop') {
                this.gpTeleopTotal--;
                if (gp.height == 0) {
                    this.gpTotalScore -= 2;
                    this.gpTeleopScore -= 2;
                } else if (gp.height == 1) {
                    this.gpTotalScore -= 3;
                    this.gpTeleopScore -= 3;
                } else if (gp.height == 2) {
                    this.gpTotalScore -= 5;
                    this.gpTeleopScore -= 5;
                }
            }
            this.gpScored.splice(this.gpScored.length-1);
            this.gpTotal = this.gpScored.length;
        },
        setGameState(state){
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
        setAutoStartPos(position){
            this.autoStartPos = position;
        },
        setPickupType(type){
            
            this.pickupType.push(type)
            this.pickupTotal = this.pickupType.length;

        },
        removePickupType(){
            this.pickupType.splice(this.pickupType.length-1);
            this.pickupTotal = this.pickupType.length;

        },
        setAutoPickupPos(position){
            if(this.autoPickupPos.includes(position)){
                this.autoPickupPos.splice(this.autoPickupPos.indexOf(position),1);
            }else{
            this.autoPickupPos.push(position);
            }

        },
        setCSCycle(state){
            this.CSCycle = state;
        },
        setEndgameCS(state){
            this.endgameCS = state;
        },
        setEndgameStartTime(time){
            this.endgameStartTime = time;
            //let EGStartTimeInSecs = parseFloat(time.substring(0,1)*60) + parseFloat(time.substring(2,4)) String version
            let EGStartTimeInSecs = time; // number version
            let cyclePeriod = 135 - EGStartTimeInSecs
            let cycleTime = cyclePeriod / this.gpTeleopTotal
            this.estCycleTime = parseFloat(cycleTime.toFixed(2))
          
        },
        setDefence(state){
            this.defence = state;
        },
        setDefenceType(state){
            this.defenceType = state;
        },
        setScoutName(name){
            this.scoutName = name;
        },
        setWin(state){
            this.win = state;
        },
        setComments(text){
            this.comments = text;
        },
        setMatchSide(side){
            this.matchSide = side;
        }
        
    }
})