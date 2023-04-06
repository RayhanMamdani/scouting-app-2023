<template>
    <div class="columns">
        <div class="column is-7">
            <input type="number" class="input" placeholder="Team Number" id="teamNumber">
        </div>
        <div class="column">
            <button @click="addTeam" class="button is-normal is-responsive">Add Team</button>
        </div>
    </div>
</template>

<script setup>
import { useGameDataStore } from '../stores/gameData';
import { useTeamDataStore } from '../stores/teamData'
import TeamDataService from '../services/TeamDataService'
import { useTournamentStore } from '../stores/tournamentData';
const gameData = useGameDataStore();
const teamData = useTeamDataStore();
const tournamentData = useTournamentStore();

methods: {

 addTeam = () => {
    let teamNum = document.getElementById('teamNumber').value;
    console.log("Add Team: " + teamNum);
    teamData.setTeamNum(teamNum);
    tournamentData.teamPush(teamNum);
    console.log(teamData.teamData)
    TeamDataService.create(teamData.teamData);
    teamData.$reset;
    //document.getElementById("teamNum").value = null;
    /*if (!tournamentData.teamCheck(teamNum)) {
        teamData.setTeamNum(teamNum);
        tournamentData.teamPush(teamNum);
        TeamDataService.create(teamData.teamData);
        teamData.$reset;
    } else {
        alert('Please add a new team');
    }*/
}

}
</script>

<style scoped>
.columns{
    margin: auto;
    padding-left: 22.5%;
}
input{
    margin-left: 5%;
}
button {
    border: none;
    background: linear-gradient(135deg,  #AE0009, #e24138);
    color: white;
}
</style>