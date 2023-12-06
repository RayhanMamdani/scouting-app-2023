<template>
    <div>
      <h1>Teams at Champs</h1>
      <ul>
        <li v-for="team in teams" :key="team.key">
          {{ team.key }} - {{ team.rookie_year }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: []
      };
    },
    mounted() {
      this.getTeamsAtChamps();
    },
    methods: {
      async getTeamsAtChamps() {
        const baseURL = 'http://www.thebluealliance.com/api/v3/';
        const apiKey = 'ROxqqLBh6MOrUPtQhsnEHajcGCxNk7EtyHyBbbKnAMqVyH2Gy7GKa1BECFilidvG';
  
        try {
          const response = await fetch(`${baseURL}event/2019cmptx/teams`, {
            headers: {
              'X-TBA-Auth-Key': apiKey
            }
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const teamsData = await response.json();
          this.teams = teamsData;
        } catch (error) {
          console.error('Error fetching teams:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your component styles go here */
  </style>
  