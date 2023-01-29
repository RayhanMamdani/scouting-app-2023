<template>
  
 


  <div id="page">
    <!--Background and Welcome messsage plus a small set of sentences-->
    <section id="showcase" class="text-light text-center text-small-center">
      <div class="container">
        <div class="columns is-centered">
          <div id="text-div" class="column is-8">
            <h1 id="showcase-title" class="title is-1">Welcome to FRC Scouting App!</h1>
            <p class="subtitle is-4">
              This app is designed to give you and your team every possible tactical advantage over your opponents.
              Scout, analyze, prepare and dominate the competition! Good luck engineers!
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--Cards with descriptions under the showcase-->
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-3">
          <div @click="this.$router.push('/grid')" class="card">
            <div class="card-content">
              <h2 class="title is-4">Grid</h2>
              <p class="subtitle is-6">
                The grid is a map of the playing field, where you can test, replay and analyze your strategies.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div @click="this.$router.push('/teams')" class="card">
            <div class="card-content">
              <h2 class="title is-4">
                Teams
              </h2>
              <p class="subtitle is-6">
                Survey the standings of the league, learn what they're doing to win, and crush them.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div @click="this.$router.push('/matches')" class="card">
            <div class="card-content">
              <h2 class="title is-4">
                Matches
              </h2>
              <p class="subtitle is-6">
                Get feeds of your competitor's matches. Learn who'll pose a challenge to your team.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div @click="this.$router.push('/matches')" class="card">
            <div class="card-content">
              <h2 class="title is-4">
                Scout
              </h2>
              <p class="subtitle is-6">
                Learn your opponent's strategies and techniques. Nullify their game plan and secure the win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    test(){
      console.log('hello');
    }
  }
};
</script>

<style scoped>

#showcase {
  height: 50%;
}

#text-div {
  padding: 150px 0;
  width: 60%;
}

.card {
  height: 100%;
  width: 87.5%; 
}

#page {
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);


  height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;

}




</style>


