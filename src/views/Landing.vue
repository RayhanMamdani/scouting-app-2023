
<template>
  <nav>
    <Navbar />
  </nav>

   
  
  <div id="page">

    <!--Background and Welcome messsage plus a small set of sentences-->
    <section id="showcase" class="text-light text-center text-small-center ">
      <div class="wrapper" style="min-height:500px">
      <video src="../assets/ALT F4.mp4"  autoplay muted ></video>
    </div>
     
    </section>

       <!-- ABOUT SECTION -->

    <section>
      <br>
      <br>
      <center>
   <h1 id="showcase-title" class="title is-1">ABOUT TEAM 7558</h1>
  </center>
<br>
  <br>
  <div class="pad" style = "margin-left:100px; margin-right: 100px;">
<p>
  Bayview Glen is a co-educational preschool-through-grade-12 independent school located in the North York region of Toronto, Ontario, Canada. The Bayview Glen community includes approximately 1,000 students from diverse cultural backgrounds who are guided along the core values of respect, responsibility, compassion, integrity and balance. Our team is comprised of over 40 students (male and female) from grades 9-12 who are excited to get started. Our team is also very multicultural, as team members come from over 15 different countries.  These values assist Bayview Glen in teaching with a ‘whole child’ mentality and enables students to learn, to grow, and to become responsible, productive, and contributing members of the global community. Our focus on inclusivity and diversity is always at the forefront of all our team decisions, and we consider it a significant strength of our team.The Bayview Glen robotics program began as a lower and prep school team, called CTRL-Z who was registered in the FLL. After being so successful within the FLL including world championship titles, Bayview Glen decided to expand their robotics horizon by registering and supporting a team in the FIRST Robotic Competition (FRC). Although the team is new, we are pushing full-force ahead with the intent and goal of being as successful as our sibling team “CTRL-Z”. We placed 9th place last year at the world championships and won the 2023 Humber District Event. 
</p>
  </div>
</section>
   



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


#tile :hover {
  opacity: 0.5;
  cursor: default;
}

#page {
  background-color: gray; 
}
</style>


