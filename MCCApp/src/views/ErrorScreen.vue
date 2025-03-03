<template>
<div class="wrapper">
    <div class="section-title">ERROR</div>
    <img src="../assets/apology.png" alt="Sorry!" class="apology">
    <h1 class="content">Uh Oh! There doesn't seem to 
        be any <span style="font-weight: 700;"> official Fill in the Blank </span>practice questions for this  chapter</h1>
    <div class="button" @click="$router.push('/home')">
            Go back to<span style="font-weight: 600; margin-left: 0.3rem;"> Home Screen</span>
        </div>
</div>
</template>

<script setup></script>

<style scoped>
.content {
    color: #FFF;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 20%;     
    line-height: 2rem;
    text-align: center;
}

.wrapper {
    background-color: #3F4EA4;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
align-items: center;
padding: 1.5rem;
padding-top: 4rem;
font-family: Poppins;
}

.button {
    width: 100%;
    background-color: #FFF;
    padding: 1.4rem;
    font-size: 1.1rem;
    color: #3F4EA4;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.apology {
    height: auto;
    width: 50%;
    margin-bottom: 5%;
}

.section-title {
  font-size: 0.9rem;
  color: #D1D1D1;
  font-weight: 700;
  margin-bottom: 0.7rem;
  margin-bottom: 20%;
}
</style>