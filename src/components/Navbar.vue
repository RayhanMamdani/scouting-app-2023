<template>
    <nav class="navbar is-dark m-0 p-0" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ml-2">
        <img src= "../assets/AltF4Logo.png" width="126" height="75" @click="this.$router.push('/')">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" @click="this.$router.push('/home')">
        Scout
      </a>

      <a class="navbar-item" @click = " this.$router.push('/teams')">
        Teams
      </a>
      <a class="navbar-item" @click = " this.$router.push('/matches')">
        Matches
      </a>

      

       
    </div>

   
  </div>
</nav>
</template>

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