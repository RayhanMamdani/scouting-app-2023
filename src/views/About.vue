
<template>
    <nav>
      <Navbar />
    </nav>
  
     
    
    <div id="page">
  
      <!--Background and Welcome messsage plus a small set of sentences-->
      
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
  <br>
  <br>
  <br>
  <div class="columns">
  <div class="column">
  <div class="bannerWrapper">
  <img src="../assets/humbereventbanner.png" alt="">
  </div>
  </div>
  <div class="column">
    <img src="../assets/teamPhoto1.jpg" alt="">
  
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
  
  
  