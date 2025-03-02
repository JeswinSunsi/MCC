<template>
    <div class="quiz-container">
      <div class="header">
        <div class="chapter-label">CHAPTER 2</div>
        <div class="chapter-title">The Chola Kingdoms</div>
      </div>
      
      <div class="results-card">
        <div class="quiz-results-label">QUIZ RESULTS</div>
        
        <div class="congrats-message">
          Congratulations! You have scored
        </div>
        
        <div class="score-percentage">{{figure}}%</div>
        
        <div class="stars-awarded">
          You have been awarded {{ stars }} {{stars > 1 ? 'stars' : 'star'}}
        </div>
        
        <img src="../assets/3star.png" alt="3 Stars" class="stars" v-if="stars == 3">
        <img src="../assets/2star.png" alt="3 Stars" class="stars" v-if="stars == 2">
        <img src="../assets/1star.png" alt="3 Stars" class="stars" v-if="stars == 1">
    </div>
      
      <div class="complete-button" @click="$router.push('/')">
        Complete
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref} from "vue"
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const figure = ref(route.params.figure)
  const stars = ref(route.params.stars)
  </script>
  
  <style scoped>
  .quiz-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #3f51b5;
    position: relative;
    font-family: sans-serif;
    height: 100%;
    background-size: 20px 20px;
    font-family: Poppins;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    color: white;
    text-align: center;
  }
  
  .chapter-label {
  font-size: 0.7rem;
  color: #D1D1D1;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.chapter-title {
  font-size: 1.2rem;
  font-weight: 600;
}
  
  .results-card {
    background-color: white;
    border-radius: 1.5rem;
    margin: 0 1rem;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .quiz-results-label {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .congrats-message {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  .score-percentage {
    font-size: 5rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  .stars-awarded {
    margin: 1rem 0 2rem 0;
  }
  


  .stars {
    height: 6rem;
    width: auto;
  }
  
  .complete-button {
    width: 100%;
  position: fixed;
  bottom: 0;
  height: 4rem;
  background-color: #FE6591;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: #FFFFFF;
  }
  
  </style>