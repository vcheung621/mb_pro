window.addEventListener('DOMContentLoaded', function() {
    const sampleText = document.getElementById('sample-text').textContent;
    const typingField = document.getElementById('typing-field');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const characterCount = document.getElementById('character-count');
  
    let startTime;
    let elapsedTime = 0;
    let timerInterval;
  
    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTimer, 1000);
    }
  
    function updateTimer() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      const formattedTime = formatTime(elapsedTime);
      document.getElementById('timer').textContent = formattedTime;
    }
  
    function formatTime(time) {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  
    function countCharacters() {
      const textEntered = typingField.value;
      const characterCountText = `Characters: ${textEntered.length}`;
      characterCount.textContent = characterCountText;
    }
  
    typingField.addEventListener('input', function() {
      if (!timerInterval) {
        startTimer();
      }
      countCharacters();
      if (typingField.value === sampleText) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    });
  
    pauseBtn.addEventListener('click', function() {
      clearInterval(timerInterval);
      timerInterval = null;
    });
  
    resetBtn.addEventListener('click', function() {
      clearInterval(timerInterval);
      timerInterval = null;
      typingField.value = '';
      elapsedTime = 0;
      document.getElementById('timer').textContent = '0:00';
      characterCount.textContent = 'Characters: 0';
    });
  });
  