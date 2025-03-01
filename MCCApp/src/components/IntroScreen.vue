<template>
<div class="container">
    <img src="../assets/herobanner.png" alt="Matriquiz App" class="herobanner">
    <div class="content">
        <h1>Ace your exams the smart way</h1>
        <h3>Access MCQs, learning material, and more in the click of a finger</h3>
        <div class="button">
            Start <span style="font-weight: 600;">Learning</span>
        </div>
    </div>
</div>
</template>

<script setup></script>

<style scoped>
.container {
    background-color: #3F4EA4;
    height: 100%;
    width: 100%;
    color: #FFF;
    font-family: Poppins;
}

.herobanner {
    width: 100%;
    height: 60vh;
    margin-top: -3rem;
}

.content {
    padding: 0rem 1rem;
    padding-top: 2.3rem;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.content h1 {
    font-size: 1.4rem;
    padding: 0rem 4rem;
    line-height: 2rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
}

.content h3 {
    font-weight: 300;
    line-height: 1.5rem;
    padding: 0rem 2rem;
    font-size: 0.9rem;
    margin-bottom: 1.9rem;
}

.button {
    width: 100%;
    background-color: #fff;
    padding: 1.4rem;
    font-size: 1.1rem;
    color: #3F4EA4;
    border-radius: 0.5rem;
}
</style>