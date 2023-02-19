
<template>
  <div class=" is-flex ">

  </div>
  <div class="container box mt-6">
    <span class=" is-flex is-justify-content-center my-5 is-">
      <img src="../assets/Charged_Up_Logo.svg.png" alt="Charged Up" width="200" height="100">
    </span>
   
    <div class="field">
  <label class="label">Team Number:</label>
  <div class="control">
    <input class="input" type="number" id="teamNum" >
  </div>
</div>

<div class="field">
  <label class="label" >Match Number:</label>
  <div class="control">
    <input class="input" type="number" id="matchNum">
  </div>
</div>
      <span class="buttons is-centered">
          <RouterLink to="ScoutMatch">
          <button @click="scoutCheck" class=" is button is-danger is-large is-responsive mt-5">Scout Match</button>
        </RouterLink>
      </span>
        
  </div>

</template>

<script setup>


const scoutCheck = () => {
  var matchNum = document.getElementById('matchNum').value
var teamNum = document.getElementById('teamNum').value

console.log(matchNum);
console.log(teamNum);
 if((matchNum > 0 && matchNum < 100) && (teamNum > 0 && teamNum <10000)){
  
 }else{
  alert('please check you have entered correct data');
 }
}
</script>

<style scoped>
div {
  margin: auto;
}

.box {
  width: 25%;
  
}
</style>