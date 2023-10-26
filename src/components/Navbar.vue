<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ml-2">
        <img src= "../assets/altf4logowhite.png" width="126" height="75" @click="this.$router.push('/')">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" @click="this.$router.push('/home')">
        SCOUT
      </a>

      <a class="navbar-item" @click = " this.$router.push('/teams')">
        TEAMS
      </a>
      <a class="navbar-item" @click = " this.$router.push('/matches')">
        MATCHES
      </a>
      <a class="navbar-item" @click = " this.$router.push('/matchesTable')">
        MATCHES TABLE
      </a>

      <a class="navbar-item" @click = " this.$router.push('/about')">
        ABOUT
      </a>


       
    </div>
    <div class="navbar-end">
      <div class="field has-addons navbar-item">
  <div class="control">
    <input class="input" type="number" id="teamNum" placeholder="Find a team">
  </div>
  <div class="control">
    <a id="go" @click ="teamSearch()" class="button is-light">
      Go
    </a>
  </div>
</div>
    </div>

   
  </div>
</nav>
</template>

<script>

export default {

  data() {
    return {
      
    }

  },
 
  methods: {
    teamSearch(){
      let teamNum = document.getElementById('teamNum').value;
      this.$router.push(`/team/${teamNum}`)
    
      
    },
  },
  
};
</script>

<style>
.navbar{
  
    top: auto;
    background-color: black;

}

a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>