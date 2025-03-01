<template>
    <div class="quiz-container">
      <div class="header">
        <div class="chapter-label">CHAPTER 2</div>
        <div class="chapter-title">The Chola Kingdoms</div>
      </div>
      
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      
      <div class="question-card">
        <div class="question">
          <h2>Which famous temple was built by Rajaraja Chola I?</h2>
        </div>
        
        <div class="options">
          <div 
            v-for="(option, index) in options" 
            :key="index" 
            class="option"
            :class="{ selected: selectedOption === index }"
            @click="selectOption(index)"
          >
            <div class="option-text">{{ option }}</div>
            <div class="option-circle"></div>
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'CholaKingdomsQuiz',
    data() {
      return {
        progress: 25,
        options: [
          'The Chola Empire did not build any temples',
          'Meenakshi Temple',
          'Shore Temple',
          'Brihadeshwara Temple'
        ],
        selectedOption: null
      }
    },
    methods: {
      selectOption(index) {
        this.selectedOption = index;
      }
    }
  }
  </script>
  
  <style scoped>
  .quiz-container {
    font-family: Arial, sans-serif;
    background-color: #3f51b5;
    background-size: 20px 20px;
    color: white;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .chapter-label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .chapter-title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .progress-bar {
    width: 90%;
    height: 15px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #00bcd4;
    border-radius: 10px;
  }
  
  .question-card {
    background-color: white;
    border-radius: 15px;
    width: 90%;
    padding: 20px;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .question h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .option {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .option:hover {
    border-color: #3f51b5;
  }
  
  .option.selected {
    border-color: #ff4081;
  }
  
  .option-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ddd;
  }
  
  .selected .option-circle {
    border-color: #ff4081;
  }
  
  .actions {
    display: flex;
    gap: 15px;
    width: 90%;
  }
  
  .help-btn, .bookmark-btn {
    padding: 12px 20px;
    border-radius: 25px;
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
  
  .help-icon, .bookmark-icon {
    font-size: 16px;
  }
  </style>