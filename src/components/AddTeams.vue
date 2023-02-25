<template>
    <div class="container">
        <input type="number" class="input" placeholder="Team Number" id="teamNum">
        <button @click="addTeam" class="button is-danger is-large is-responsive mt-5">Add Team</button>
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

const addTeam = () => {
    let teamNum = document.querySelector('#teamNum').value;
    console.log(teamNum);
    teamData.setTeamNum(teamNum);
    tournamentData.teamPush(teamNum);
    TeamDataService.create(teamData.teamData);
    teamData.$reset;
    /*if (!tournamentData.teamCheck(teamNum)) {
        teamData.setTeamNum(teamNum);
        tournamentData.teamPush(teamNum);
        TeamDataService.create(teamData.teamData);
        teamData.$reset;
    } else {
        alert('Please add a new team');
    }*/
}
</script>