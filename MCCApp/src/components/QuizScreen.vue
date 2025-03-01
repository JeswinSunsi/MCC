<template>
  <div class="quiz-container" v-if="loading == false">
    <div class="header">
      <div class="chapter-label">CHAPTER 2</div>
      <div class="chapter-title">The Chola Kingdoms</div>
    </div>

    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>

    <div class="question-card">
      <div class="question">
        <h2>{{quizData[qnNow].question}}</h2>
      </div>

      <div class="options">
      <div v-for="(option, index) in quizData[qnNow].options" :key="index" class="option"
        :class="{ 
          correct: showResult && option.isCorrect,
          incorrect: showResult && !option.isCorrect && selectedOption === index
        }" 
        @click="selectOption(index)">
        <div class="option-text">{{ option.option }}</div>
        <div class="option-circle" :class="{correct: showResult && option.isCorrect, 
          incorrect: showResult && !option.isCorrect && selectedOption === index}"></div>
      </div>
    </div>
    </div>

    <div class="actions">
      <button class="help-btn">
        <span class="help-icon">🔍</span> Help
      </button>
      <button class="bookmark-btn">
        <span class="bookmark-icon">🔖</span> Bookmark
      </button>
    </div>
    <Transition name="slide-up">
      <div class="next-btn" v-if="showResult" @click="continueToNextQn">Continue</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter();
 
const progress = ref(40);
const options = ref([
  { option: 'The Chola Empire did not build any temples', isCorrectAnswer: false },
  { option: 'Meenakshi Temple', isCorrectAnswer: false },
  { option: 'Shore Temple', isCorrectAnswer: false },
  { option: 'Brihadeshwara Temple', isCorrectAnswer: true }
]);

const selectedOption = ref(null);
const showResult = ref(false);

function selectOption(index) {
  selectedOption.value = index;
  showResult.value = true;
}

const qnNow = ref(0)
const quizData = ref(null)
const loading = ref(true)
const totalQns = ref(0)

const loadSubjectData = async () => {
      try {
        const response = await fetch(`/public/questions/history/1/mcq.json`)
        quizData.value = await response.json()
        totalQns.value = quizData.value.length
      } catch (error) {
        console.error(`Error loading quiz data:`, error)
        quizData.value = []
      } finally {
        loading.value = false
      }
}
loadSubjectData();

function continueToNextQn(){
  if (qnNow.value == (totalQns.value - 1)){
    router.push("/result")
  }
  qnNow.value++;
  showResult.value = false;
}
</script>

<style scoped>
.quiz-container {
  font-family: Poppins;
  background-color: #3f51b5;
  color: white;
  height: 100vh;
  padding: 0.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
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

.progress-bar {
  width: 90%;
  height: 2.6rem;
  background-color: white;
  border-radius: 1.6rem;
  margin-bottom: 20px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #00bcd4;
  border-radius: 10px;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}

.question-card {
  background-color: white;
  border-radius: 15px;
  width: 90%;
  padding: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.8rem;
}

.question h2 {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option {
  border: 1px solid #ddd;
  border-radius: 0.6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1.5rem;
}

.option.selected {
  border-color: #4a90e2;
}

.option.correct {
  background-color: rgba(76, 175, 80, 0.1);
  border-color: #4CAF50;
}

.option.incorrect {
  background-color: rgba(244, 67, 54, 0.1);
  border-color: #F44336;
}

.option-circle {
  width: 1rem;
  min-width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #ddd;
}

.option-circle.correct {
  border-color: #4CAF50;
}

.option-circle.incorrect {
  border-color: #ff4081;
}

.actions {
  display: flex;
  gap: 15px;
  width: 90%;
}

.help-btn,
.bookmark-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  border: none;
  background-color: white;
  color: #3f51b5;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.help-btn {
  color: #4caf50;
}

.bookmark-btn {
  color: #ff4081;
}

.help-icon,
.bookmark-icon {
  font-size: 16px;
}

.next-btn {
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
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>