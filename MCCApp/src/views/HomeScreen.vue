<template>
    <div class="quiz-app">
        <h2 class="section-title">Most Popular Quizes</h2>

        <Carousel v-bind="config">
            <Slide v-for="image in images" :key="image.id" @click="$router.push(image.route)">
                <div class="autoscroll-container" 
                    :style='`background-image: url(${image.url}); background-size: cover; padding: 1rem; height: 100%; width: 100%;`'>
                </div>
            </Slide>
        </Carousel>

        <h2 class="section-title">Subjects</h2>
        <div class="subjects-container">
                <button class="subject-button" @click="changeSubject('Maths')"
                    :class="{ active: selectedSubject === 'Maths' }">Maths</button>
                <button class="subject-button" @click="changeSubject('History')"
                    :class="{ active: selectedSubject === 'History' }">History</button>
                <button class="subject-button" @click="changeSubject('Geography')"
                    :class="{ active: selectedSubject === 'Geography' }">Geography</button>
                <button class="subject-button" @click="changeSubject('Civics')"
                    :class="{ active: selectedSubject === 'Civics' }">Civics</button>
                <button class="subject-button" @click="changeSubject('Economics')"
                    :class="{ active: selectedSubject === 'Economics' }">Economics</button>
                <button class="subject-button" @click="changeSubject('Physics')"
                    :class="{ active: selectedSubject === 'Physics' }">Physics</button>
                <button class="subject-button" @click="changeSubject('Chemistry')"
                    :class="{ active: selectedSubject === 'Chemistry' }">Chemistry</button>
                <button class="subject-button" @click="changeSubject('Biology')"
                    :class="{ active: selectedSubject === 'Biology' }">Biology</button>

        </div>
        <h2 class="section-title">Chapters</h2>
        <div class="chapters-list">
            <div class="chapter-item" v-for="(chapter, index) in Chapters[selectedSubject]" :key="index"
                @click="toggleTypes(index)">
                <h1>{{ chapter }}</h1>
                <Transition name="fade">
                <div class="type" v-if="selectedChapter === index">
                    <div class="mcq-type"
                        @click.stop="$router.push(`/mcq/${selectedSubject.toLowerCase()}/${chapter}/${index + 1}`)">MCQ
                    </div>
                    <div class="fib-type"
                        @click.stop="$router.push(`/fib/${selectedSubject.toLowerCase()}/${chapter}/${index + 1}`)">FIB
                    </div>
                </div>
            </Transition>
            </div>
        </div>

        <div class="footer">
            <h1>Developed with 💖 & ☕ by <span style="font-weight: 600;"> Tactile Studios</span></h1>
            <h2>2025 | Copyright MIT License</h2>
        </div>
        <div style="height: 1rem;"></div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import quizCardImage from "../assets/quizcard.png"
import quizCardImage2 from "../assets/quizcard2.png"
import quizCardImage3 from "../assets/quizcard3.png"

const images = [{ "id": 1, "url": quizCardImage2, "route": "/mcq/maths/Numbers And Sequences/2" }, { "id": 1, "url": quizCardImage3, "route": "/fib/chemistry/Carbon and its Compounds/5" }, { "id": 3, "url": quizCardImage, "route": "/fib/physics/Laws Of Motion/1" }]

const selectedChapter = ref(null)

const toggleTypes = (index) => {
    selectedChapter.value = selectedChapter.value === index ? null : index
}

const config = {
    height: 196,
    itemsToShow: 1,
    gap: 5,
    autoplay: 3000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
};

const selectedSubject = ref("Maths")

const Chapters = ref({
    "Maths": ["Relations and Functions",
        "Numbers and Sequences",
        "Algebra",
        "Geometry",
        "Coordinate Geometry",
        "Trigonometry",
        "Mensuration",
        "Statistics and Probability"
    ]
    ,
    "Geography": [
        "India - Location, Relief and Drainage",
        "Climate and Natural Vegetation of India",
        "India - Agriculture",
        "India - Resources and Industries",
        "India - Population, Transport, Communication and Trade",
        "Physical Geography of Tamil Nadu",
        "Human Geography of Tamil Nadu"

    ],
    "History": ["Outbreak of World War I and Its Aftermath",
        "The World between two World Wars",
        "World War II",
        "The World after World War II",
        "Social and Religious Reform Movements in the 19th Century",
        "Early Revolts against British Rule in Tamil Nadu",
        "Anti-Colonial Movements and the Birth of Nationalism",
        "Nationalism: Gandhian Phase",
        "Freedom Struggle in Tamil Nadu",
        "Social Transformation in Tamil Nadu"
    ],
    "Economics": [
        "Gross Domestic Product and its Growth: an Introduction",
        "Globalization and Trade",
        "Food Security and Nutrition",
        "Government and Taxes",
        "Industrial Clusters in Tamil Nadu"
    ],
    "Civics": [
        "Indian Constitution",
        "Central Government",
        "State Government",
        "India's Foreign Policy",
        "India's International Relations"
    ],
    "Physics": ["Laws of Motion", "Optics", "Thermal Physics", "Electricity", "Acoustics", "Nuclear Physics"],
    "Chemistry": ["Atoms and Molecules", "Periodic Classification of Elements", "Solutions", "Types of Chemical Reactions", "Carbon and its Compounds"],
    "Biology": ["Plant Anatomy and Plant Physiology", "Structural Organisation of Animals", "Transportation in Plants and Circulation in Animals", "Nervous System", "Plant and Animal Hormones", "Reproduction in Plants and Animals", "Genetics", "Origin and Evolution of Life", "Breeding and Biotechnology", "Health and Diseases", "Environmental Management"]

})


function changeSubject(subject) {
    selectedSubject.value = subject;
}
</script>

<style scoped>
.type {
    display: flex;
    font-weight: 700;
    margin-top: -0.1rem;
    color: #3F4EA4;
}

.mcq-type,
.fib-type {
    border: 1px solid #3F4EA4;
    padding: 0.4rem 0.8rem;
    margin-right: 0.2rem;
    border-radius: 0.3rem;
}

.quiz-app {
    font-family: Poppins;
    max-width: 400px;
    margin: 0 auto;
    padding: 0.5rem;
    padding-bottom: 0;
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

.quiz-card {
    min-height: 5rem;
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
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.chapter-item {
    min-height: 2.4rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #ADADAD;
    font-size: 0.8rem;
    font-weight: 400;
    display: flex;
    align-items: center;
}

.chapter-item h1 {
    margin-right: 0.75rem;
}

.footer {
    height: max-content;
    padding: 1rem 0.7rem;
    border-radius: 0.6rem;
    color: #fff;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #3F4EA4;
}

.footer h1 {
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
}

.footer h2 {
    font-size: 0.6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>