
<template>
  <nav>
    <Navbar />
  </nav>

   
  
  <div id="page">

    <!--Background and Welcome messsage plus a small set of sentences-->
    <section id="showcase" class="text-light text-center text-small-center ">
      <div class="wrapper" style="min-height:500px">
      <video src="../assets/ALT-F4.mp4"  autoplay muted ></video>
    </div>
     
    </section>

       <!-- ABOUT SECTION -->

   



    <!--Cards with descriptions under the showcase-->
    <section class="section">
      <div class="columns is-centered">

        <div  class="column is-3">
          <div  class="card">
            <div class="card-content">
              <h2 class="title is-4 ">Match Search</h2>
              <div class="field has-addons">
                <div class="control ">
                  <input class="input " type="number" id="matchNum" placeholder="Enter Match # ">
                </div>
                <div class="control">
                  <a  @click ="matchSearch()" class="button is-light">
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  class="column is-3" id ="tile">
          <div  @click="this.$router.push('/teams')" class="card">
            <div class="card-content">
              <h2 class="title is-4 ">
                Team Data
              </h2>
              <p class="subtitle is-6 ">
                Look at the average stats and metrics of teams throughout the tournament
              </p>
            </div>
          </div>
        </div>

        <div  class="column is-3" id ="tile">
          <div  @click="this.$router.push('/matches')" class="card">
            <div class="card-content">
              <h2 class="title is-4 ">
                Matches
              </h2>
              <p class="subtitle is-6 ">
                Break down of all scouted matches
              </p>
            </div>
          </div>
        </div>

        <div class="column is-3" id ="tile">
          <div  @click="this.$router.push('/home')" class="card">
            <div class="card-content">
              <h2 class="title is-4 ">
                Scout Match
              </h2>
              <p class="subtitle is-6 ">
                Learn your opponent's strategies and techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {

  data() {
    return {
      gameState: "auto"
    }

  },
  name: "Landing",
  methods: {
    matchSearch(){
      let matchNum = document.getElementById('matchNum').value;
      this.$router.push('/match/'+ matchNum)
    },
  },
  components: { Navbar }
};
</script>

<style scoped>

*{
  background-color: white !important;
  color: black
}
#text-div {
  padding: 150px 0;
  width: 60%;
}

.card {
  height: 100%;
  width: 87.5%;
  background-color: rgb(51, 50, 50);

}


.bannerWrapper{

  width: 201.5px;
  height: 260.5px;
}
#tile :hover {
  opacity: 0.5;
  cursor: default;
}

#page {
  background-color: gray; 
}
</style>


