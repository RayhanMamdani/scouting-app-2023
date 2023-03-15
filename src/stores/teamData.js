
import { defineStore } from 'pinia'

export const useTeamDataStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'teamData',

    state: () => ({
        teamNum: null,
        modeCommunity: false,
        modeAutoCS: "", //Docked, Engaged, Parked | actually should be highest auto CS but i dont want to change everything
        avgGpTotal: 0,//total number of gamepieces scored (total indexes of gamepiece array)
        avgGpAutoTotal: 0,
        avgGpTeleopTotal: 0,
        avgGpAutoScore: 0,
        avgGpTeleopScore: 0,
        avgGpTotalScore: 0,
       
        modeAutoStartPos: '',
        modePickupType: '',
        modeAutoPickupPos: '',
        avgEndgameStartTime: null,
        avgEstCycleTime: null,

        modeEndgameCS: "", // N/A, Docked, Engaged | actually should be highest endgame CS but i dont want to change everything
        modeDefence: '',
        modeDefenceType: '',
        modeCSCycle: false,
        modeWin: false,

        communityArray: [],
        autoCSArray: [],
        gpTotalArray: [],
        gpAutoTotalArray: [],
        gpTeleopTotalArray: [],
        gpAutoScoreArray: [],
        gpTeleopScoreArray: [],
        gpTotalScoreArray: [],

        autoStartPosArray: [],
        pickupTypeArray: [],
        autoPickupPosArray: [],
        endgameStartTimeArray: [],
        estCycleTimeArray: [],

        endgameCSArray: [],
        defenceArray: [],
        defenceTypeArray: [],
        CSCycleArray: [],
        winArray: [],
    }),
    getters: {
        teamData(state) {
            let team = {
                teamNum: state.teamNum,
                modeCommunity: state.modeCommunity,
                modeAutoCS: state.modeAutoCS,
                avgGpTotal: state.avgGpTotal,
                avgGpAutoTotal: state.avgGpAutoTotal,
                avgGpTeleopTotal: state.avgGpTeleopTotal,
                avgGpAutoScore: state.avgGpAutoScore,
                avgGpTeleopScore: state.avgGpTeleopScore,
                avgGpTotalScore: state.avgGpTotalScore,
                modeAutoStartPos: state.modeAutoStartPos,
                modePickupType: state.modePickupType,
                modeAutoPickupPos: state.modeAutoPickupPos,
                avgEndgameStartTime: state.avgEndgameStartTime,
                avgEstCycleTime: state.avgEstCycleTime,
                modeEndgameCS: state.modeEndgameCS,
                modeDefence: state.modeDefence,
                modeDefenceType: state.modeDefenceType,
                modeCSCycle: state.modeCSCycle,
                modeWin: state.modeWin,
            }
            return team;
        }
    },
    actions: {
        setTeamNum(num) {
            this.teamNum = num;
        },
        communityPush(state) {
            this.communityArray.push(state);
        },
        autoCSPush(state) {
            this.autoCSArray.push(state);
        },
        gpTotalPush(num) {
            this.gpTotalArray.push(num);
        },
        gpAutoTotalPush(num) {
            this.gpAutoTotalArray.push(num);
        },
        gpTeleopTotalPush(num) {
            this.gpTeleopTotalArray.push(num);
        },
        gpAutoScorePush(num) {
            this.gpAutoScoreArray.push(num);
        },
        gpTeleopScorePush(num) {
            this.gpTeleopScoreArray.push(num);
        },
        gpTotalScorePush(num) {
            this.gpTotalScoreArray.push(num);
        },
        autoStartPosPush(pos) {
            this.autoStartPosArray = this.autoStartPosArray.concat(pos);
        },
        pickupTypePush(type) {
           this.pickupTypeArray = this.pickupTypeArray.concat(type);
        },
        autoPickupPosPush(pos) {
          this.autoPickupPosArray= this.autoPickupPosArray.concat(pos);
        },
        endgameStartTimePush(time) {
            this.endgameStartTimeArray.push(time);
        },
        estCycleTimePush(time) {
            this.estCycleTimeArray.push(time);
        },
        endgameCSPush(state) {
            this.endgameCSArray.push(state);
        },
        defencePush(state) {
            this.defenceArray.push(state);
        },
        defenceTypePush(type) {
            this.defenceTypeArray.push(type);
        },
        CSCyclePush(state) {
            this.CSCycleArray.push(state);
        },
        winPush(state) {
            this.winArray.push(state);
        },
    }
})