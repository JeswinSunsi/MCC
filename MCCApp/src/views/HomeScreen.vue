<script setup>
import { ref } from "vue"
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import quizCardImage from "../assets/quizcard.png"
import quizCardImage2 from "../assets/quizcard2.png"
import quizCardImage3 from "../assets/quizcard3.png"

const images = ref([
    { id: 1, url: quizCardImage2, route: "/mcq/maths/Numbers And Sequences/2" },
    { id: 2, url: quizCardImage3, route: "/fib/chemistry/Carbon and its Compounds/5" },
    { id: 3, url: quizCardImage, route: "/fib/physics/Laws Of Motion/1" }
])

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

<template>
    <div class="quiz-app">
        <!-- Header Section -->
        <div class="header-section">
            <h1 class="app-title">Learnobuddy</h1>
            <p class="app-subtitle">Challenge yourself with interactive quizzes</p>
        </div>

        <!-- Popular Quizzes Section -->
        <div class="section">
            <h2 class="section-title">
                <span class="title-icon">🔥</span>
                Most Popular Quizzes
            </h2>

            <Carousel v-bind="config" class="quiz-carousel">


                <Slide v-for="image in images" :key="image.id" @click="$router.push(image.route)">
                    <div class="autoscroll-container"
                        :style='`background-image: url(${image.url}); background-size: cover; padding: 1rem; height: 100%; width: 100%;`'>

                    </div>
                </Slide>

            </Carousel>
        </div>

        <!-- Subjects Section -->
        <div class="section">
            <h2 class="section-title">
                <span class="title-icon">📚</span>
                Subjects
            </h2>
            <div class="subjects-grid">
                <button class="subject-card" @click="changeSubject('Maths')"
                    :class="{ active: selectedSubject === 'Maths' }">
                    <span class="subject-icon">📐</span>
                    <span class="subject-name">Maths</span>
                </button>
                <button class="subject-card" @click="changeSubject('History')"
                    :class="{ active: selectedSubject === 'History' }">
                    <span class="subject-icon">🏛️</span>
                    <span class="subject-name">History</span>
                </button>
                <button class="subject-card" @click="changeSubject('Geography')"
                    :class="{ active: selectedSubject === 'Geography' }">
                    <span class="subject-icon">🌍</span>
                    <span class="subject-name">Geography</span>
                </button>
                <button class="subject-card" @click="changeSubject('Civics')"
                    :class="{ active: selectedSubject === 'Civics' }">
                    <span class="subject-icon">🏛️</span>
                    <span class="subject-name">Civics</span>
                </button>
                <button class="subject-card" @click="changeSubject('Economics')"
                    :class="{ active: selectedSubject === 'Economics' }">
                    <span class="subject-icon">📈</span>
                    <span class="subject-name">Economics</span>
                </button>
                <button class="subject-card" @click="changeSubject('Physics')"
                    :class="{ active: selectedSubject === 'Physics' }">
                    <span class="subject-icon">⚛️</span>
                    <span class="subject-name">Physics</span>
                </button>
                <button class="subject-card" @click="changeSubject('Chemistry')"
                    :class="{ active: selectedSubject === 'Chemistry' }">
                    <span class="subject-icon">🧪</span>
                    <span class="subject-name">Chemistry</span>
                </button>
                <button class="subject-card" @click="changeSubject('Biology')"
                    :class="{ active: selectedSubject === 'Biology' }">
                    <span class="subject-icon">🧬</span>
                    <span class="subject-name">Biology</span>
                </button>
            </div>
        </div>

        <!-- Chapters Section -->
        <div class="section">
            <h2 class="section-title">
                <span class="title-icon">📖</span>
                Chapters - {{ selectedSubject }}
            </h2>
            <div class="chapters-container">
                <div class="chapter-card" v-for="(chapter, index) in Chapters[selectedSubject]" :key="index"
                    @click="toggleTypes(index)" :class="{ expanded: selectedChapter === index }">
                    <div class="chapter-header">
                        <div class="chapter-info">
                            <span class="chapter-number">{{ index + 1 }}</span>
                            <h3 class="chapter-title">{{ chapter }}</h3>
                        </div>
                        <div class="expand-icon" :class="{ rotated: selectedChapter === index }">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <Transition name="slide-fade">
                        <div class="quiz-types" v-if="selectedChapter === index">
                            <button class="quiz-type-btn mcq-btn"
                                @click.stop="$router.push(`/mcq/${selectedSubject.toLowerCase()}/${chapter}/${index + 1}`)">
                                <span class="quiz-icon">✅</span>
                                <span>Multiple Choice</span>
                                <span class="quiz-arrow">→</span>
                            </button>
                            <button class="quiz-type-btn fib-btn"
                                @click.stop="$router.push(`/fib/${selectedSubject.toLowerCase()}/${chapter}/${index + 1}`)">
                                <span class="quiz-icon">✏️</span>
                                <span>Fill in Blanks</span>
                                <span class="quiz-arrow">→</span>
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <h3 class="footer-title">Developed with 💖 & ☕ by <span class="studio-name">Tactile Studios</span></h3>
                <p class="footer-copyright">2025 | MIT License</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quiz-app {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0 auto;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
}

/* Header Section */
.header-section {
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    backdrop-filter: blur(10px);
    padding: 2rem 1.5rem 1.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.app-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin: 0 0 0.5rem 0;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.app-subtitle {
    color: rgba(255,255,255,0.9);
    font-size: 1rem;
    margin: 0;
    font-weight: 400;
}

/* Section Styling */
.section {
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.title-icon {
    font-size: 1.5rem;
}

/* Carousel Styling */
.quiz-carousel {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.carousel-card {
    height: 200px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
}

.carousel-card:hover {
    transform: scale(1.02);
}

.card-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.carousel-card:hover .card-overlay {
    opacity: 1;
}

.play-button {
    background: rgba(255,255,255,0.9);
    color: #3F4EA4;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.8);
    transition: transform 0.3s ease;
}

.card-overlay:hover .play-button {
    transform: scale(1);
}

/* Subjects Grid */
.subjects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.subject-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
}

.subject-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    background: rgba(255,255,255,0.15);
}

.subject-card.active {
    background: rgba(255,255,255,0.9);
    color: #3F4EA4;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.subject-icon {
    font-size: 2rem;
    margin-bottom: 0.25rem;
}

.subject-name {
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
}

/* Chapters Container */
.chapters-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.chapter-card {
    background: rgba(255,255,255,0.95);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.chapter-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.chapter-card.expanded {
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.chapter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    cursor: pointer;
}

.chapter-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.chapter-number {
    background: linear-gradient(135deg, #3F4EA4, #6366f1);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
    flex-shrink: 0;
}

.chapter-title {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin: 0;
    line-height: 1.4;
}

.expand-icon {
    color: #666;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.expand-icon.rotated {
    transform: rotate(180deg);
}

/* Quiz Types */
.quiz-types {
    padding: 0 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.quiz-type-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    color: white;
}

.mcq-btn {
    background: linear-gradient(135deg, #10b981, #059669);
}

.mcq-btn:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.fib-btn {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.fib-btn:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.quiz-icon {
    font-size: 1.2rem;
}

.quiz-arrow {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}

.quiz-type-btn:hover .quiz-arrow {
    transform: translateX(3px);
}

/* Footer */
.footer {
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
    margin: 2rem 1.5rem 0;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.1);
}

.footer-content {
    color: white;
}

.footer-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
}

.studio-name {
    font-weight: 800;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-copyright {
    font-size: 0.85rem;
    opacity: 0.8;
    margin: 0;
}

/* Animations */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 380px) {
    .subjects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
    
    .subject-card {
        padding: 1rem 0.75rem;
    }
    
    .subject-name {
        font-size: 0.8rem;
    }
    
    .chapter-info {
        gap: 0.75rem;
    }
    
    .chapter-title {
        font-size: 0.9rem;
    }
}
</style>