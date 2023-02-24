
import { defineStore } from 'pinia'

export const useTeamDataStore = defineStore({
    // id is required so that Pinia can connect the store to the devtools
    id: 'teamData',

    state: () => ({
        teamNum: null,
        modeCommunity: false,
        modeAutoCS: "", //Docked, Engaged, Parked
        avgGpTotal: 0,//total number of gamepieces scored (total indexes of gamepiece array)
        avgGpAutoTotal: 0,
        avgGpTeleopTotal: 0,
        avgGpAutoScore: 0,
        avgGpTeleopScore: 0,
        avgGpTotalScore: 0,
       
        modeAutoStartPos: '',
        modePickupType: '',
        modeAutoPickupPos: '',
        avgEndgameStartTime: '',
        avgEstCycleTime: '',

        modeEndgameCS: "", // N/A, Docked, Engaged
        modeDefence: '',
        modeDefenceType: '',
        modeCSCycle: false,
        modeWin: false,
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
        }
    }
})