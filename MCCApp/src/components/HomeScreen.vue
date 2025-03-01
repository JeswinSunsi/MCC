<template>
    <div class="quiz-app">
        <h2 class="section-title">Most Popular Quizes</h2>

        <!-- Featured Quiz Card -->
        <div class="quiz-card">
            <img class="quiz-img" src="../assets/quizcard.png" alt="Take Quiz">
        </div>

        <!-- Subjects Section -->
        <h2 class="section-title">Subjects</h2>
        <div class="subjects-container">
            <button class="subject-button">Science</button>
            <button class="subject-button active">Math</button>
            <button class="subject-button">Civics</button>
            <button class="subject-button">History</button>
            <button class="subject-button">Geography</button>
            <button class="subject-button">English</button>
            <button class="subject-button">Tamil</button>
        </div>
        <h2 class="section-title">Chapter</h2>
        <!-- Chapters Section -->
        <div class="chapters-list">
            <div class="chapter-item" v-for="(chapter, index) in chapters" :key="index">
                {{ chapter }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizApp',
    data() {
        return {
            chapters: [
                'Relations and Functions',
                'Inverse Trigonometry',
                'Matrices',
                'Determinants',
                'Continuity and Differentiability',
                'Application of Derivatives'
            ]
        }
    }
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

/* Quiz Card Styles */
.quiz-img {
    height: auto;
    width: 100%;
    margin-bottom: 1rem;
}

/* Subjects Styles */
.subjects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 2.2rem;
}

.subject-button {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 0.9rem;
    padding: 0.9rem 1.9rem;
    font-size: 0.9rem;
    cursor: pointer;
}

.subject-button.active {
    background-color: #8B96D3;
    color: white;
    font-weight: 600;
}

/* Chapters Styles */
.chapters-list {
    display: flex;
    flex-direction: column;
}

.chapter-item {
    padding: 1.2rem 0;
    border-bottom: 1px solid #ADADAD;
    font-size: 1rem;
    font-weight: 400;
}
</style>