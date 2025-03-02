<template>
  <div class="quiz-container" v-if="loading == false">
    <div class="quiz-container" v-if="loading == false">
    <div class="header">
      <div class="chapter-label">CHAPTER {{ chapter }}</div>
      <div class="chapter-title">{{ chapterName }}</div>
    </div>

    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="question-card">
      <div class="question">
        <h2 v-html="renderedQuestion"></h2>
      </div>

    </div>
    <div class="actions">
      <button class="help-btn" @click="showExplanationData = !showExplanationData">
        <span class="help-icon">🔍</span> Help
      </button>
      <button class="bookmark-btn">
        <span class="bookmark-icon">🔖</span> Bookmark
      </button>

    </div>
    <Transition name="slide-up">
    <div class="explanation-wrapper" v-if="showExplanationData">
      <div class="explanation" v-html="renderLatex(quizData[qnNow].explanation)">
      </div>
      </div>
    </Transition>

    <Transition name="slide-up">
      <div class="next-btn" v-if="showResult" @click="continueToNextQn">
        Continue
      </div>
    </Transition>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import katex from 'katex'
import 'katex/dist/katex.min.css'

const router = useRouter()
const route = useRoute()

const subject = route.params.subject
const chapter = route.params.chapternum
const chapterName = route.params.chaptername

const showExplanationData = ref(false)
const progress = ref(0)
let oneBarProgress = 0

const selectedOption = ref(null)
const showResult = ref(false)
const qnNow = ref(0)
const quizData = ref(null)
const loading = ref(true)
const totalQns = ref(0)

let answerData = {"correct": 0, "incorrect": 0}

const renderLatex = (text) => {
  try {
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g)
    
    return parts.map(part => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const latex = part.slice(part.startsWith('$$') ? 2 : 1, part.endsWith('$$') ? -2 : -1)
        return katex.renderToString(latex, {
          throwOnError: false,
          displayMode: part.startsWith('$$')
        })
      }
      return part
    }).join('')
  } catch (error) {
    console.error('LaTeX rendering error:', error)
    return text
  }
}

const renderedQuestion = computed(() => {
  if (!quizData.value || !quizData.value[qnNow.value]) return ''
  return renderLatex(quizData.value[qnNow.value].question)
})

function selectOption(index, correctness) {
  selectedOption.value = index
  showResult.value = true
  if (correctness) {
    answerData.correct = answerData.correct + 1
  } else {
    answerData.incorrect = answerData.incorrect + 1
    showExplanationData.value = true;
  }
}

const loadSubjectData = async () => {
  try {
    const response = await fetch(`/questions/${subject}/${chapter}/fib.json`)
    quizData.value = await response.json()
    totalQns.value = quizData.value.length
    oneBarProgress = 100 / totalQns.value
  } catch (error) {
    console.error(`Error loading quiz data:`, error)
    quizData.value = []
  } finally {
    loading.value = false
  }
}

function continueToNextQn() {
  if (qnNow.value == (totalQns.value - 1)) {
    let stars = 0
    const finalAnswerData = (answerData.correct / totalQns.value) * 100
    if (finalAnswerData < 40) {
      stars = 1
    } else if (finalAnswerData < 80) {
      stars = 2
    } else {
      stars = 3
    }
    router.push(`/result/${finalAnswerData}/${stars}`)
  } else {
    qnNow.value++
    progress.value = progress.value + oneBarProgress
    showResult.value = false
    selectedOption.value = null
    showExplanationData.value = null
  }
}

loadSubjectData()
</script>

<style scoped>
:deep(.katex) {
  font-size: 1.1em;
}

:deep(.katex-display) {
  margin: 0;
}

.quiz-container {
  font-family: Poppins;
  background-color: #3f51b5;
  color: white;
  height: 100vh;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  min-height: 2.6rem;
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
  transition: width 0.3s ease-in-out; /* Add transition here */
}

.question-card {
  background-color: white;
  border-radius: 15px;
  width: 90%;
  min-width: 90%;
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
  margin-bottom: 1rem;
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

.explanation-wrapper {
  width: 100%;
  padding: 1.5rem;
  padding-top: 0;
  padding-bottom: 5rem;
}

.explanation {
  background-color: #fff;
  padding: 1rem;
  padding-right: 2rem;
  border-radius: 0.6rem;
  font-weight: 300;
  color: #000;
  line-height: 1.2rem;
  font-size: 0.8rem;
}
</style>