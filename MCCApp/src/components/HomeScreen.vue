<template>
    <div class="quiz-app">
        <h2 class="section-title">Most Popular Quizes</h2>

        <div class="quiz-card">
            <img class="quiz-img" src="../assets/quizcard.png" alt="Take Quiz">
        </div>

        <h2 class="section-title">Subjects</h2>
        <div class="subjects-container">
            <button class="subject-button" @click="changeSubject('Biology')" :class="{active: selectedSubject === 'Biology'}">Biology</button>
            <button class="subject-button" @click="changeSubject('Math')" :class="{active: selectedSubject === 'Math'}">Math</button>
            <button class="subject-button" @click="changeSubject('Civics')" :class="{active: selectedSubject === 'Civics'}">Civics</button>
            <button class="subject-button" @click="changeSubject('History')" :class="{active: selectedSubject === 'History'}">History</button>
            <button class="subject-button" @click="changeSubject('Geography')" :class="{active: selectedSubject === 'Geography'}">Geography</button>
            <button class="subject-button" @click="changeSubject('Chemistry')" :class="{active: selectedSubject === 'Chemistry'}">Chemistry</button>
            <button class="subject-button" @click="changeSubject('Physics')" :class="{active: selectedSubject === 'Physics'}">Physics</button>
        </div>
        <h2 class="section-title">Chapters</h2>
        <div class="chapters-list">
            <div class="chapter-item" v-for="(chapter, index) in BiologyChapters" :key="index" v-if="selectedSubject==='Biology'">
                {{ chapter }}
            </div>
            <div class="chapter-item" v-for="(chapter, index) in mathChapters" :key="index" v-if="selectedSubject==='Math'">
                {{ chapter }}
            </div>
            <div class="chapter-item" v-for="(chapter, index) in socialChapters" :key="index" v-if="selectedSubject==='Civics'">
                {{ chapter }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const selectedSubject = ref("Biology")

const mathChapters = ref([
    'Relations and Functions',
    'Inverse Trigonometry',
    'Matrices',
    'Determinants',
    'Continuity and Differentiability',
    'Application of Derivatives'
])

const BiologyChapters = ref([
    'Atoms & Nuclei',
    'Magnetism & Induction',
    'Wave Optics',
    'The D Block',
    'Solutions & Electrochemistry',
    'Current Electricity'
])

const socialChapters = ref([
    'The French Reneissance',
    'Bolshevism in Imperial Russia',
    'Subcontinental Empires',
    'Introduction to Democratic Politics',
    'Policy Development',
    'World War II'
])

function changeSubject(subject){
    selectedSubject.value = subject;
}
</script>

<style scoped>
.quiz-app {
    font-family: Poppins;
    max-width: 400px;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: white;
    color: #333;
}

.section-title {
    color: #3F4EA4;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 1rem;
}

.quiz-img {
    height: auto;
    width: 100%;
    margin-bottom: 1rem;
}

.subjects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 2.2rem;
}

.subject-button {
    background-color: white;
    border: 1px solid #ccc;
    color: #3F4EA4;
    border-radius: 0.9rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    cursor: pointer;
}

.subject-button.active {
    background-color: #3F4EA4;
    color: white;
    font-weight: 600;
}

.chapters-list {
    display: flex;
    flex-direction: column;
}

.chapter-item {
    padding: 0.8rem 0;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #ADADAD;
    font-size: 0.8rem;
    font-weight: 400;
}
</style>