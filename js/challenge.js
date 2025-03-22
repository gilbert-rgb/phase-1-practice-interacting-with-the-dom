// challenge.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const counter = document.getElementById("counter");
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const heartBtn = document.getElementById("heart");
    const pauseBtn = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");
  
    let count = 0;
    let isPaused = false;
    let intervalId = null;
  
    // Start counter auto-incrementing every second
    function startCounter() {
      intervalId = setInterval(() => {
        if (!isPaused) {
          count++;
          counter.textContent = count;
        }
      }, 1000);
    }
  
    // Stop counter
    function stopCounter() {
      clearInterval(intervalId);
    }
  
    // Initial start
    startCounter();
  
    // Minus button: Decrease counter
    minusBtn.addEventListener("click", () => {
      if (!isPaused) {
        count--;
        counter.textContent = count;
      }
    });
  
    // Plus button: Increase counter
    plusBtn.addEventListener("click", () => {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    });
  
    // Heart button: Add a like for the current count
    heartBtn.addEventListener("click", () => {
      if (!isPaused) {
        const li = document.createElement("li");
        li.textContent = `❤️ ${count} was liked!`;
        likesList.appendChild(li);
      }
    });
  
    // Pause button: Toggle pause/resume
    pauseBtn.addEventListener("click", () => {
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? "resume" : "pause";
      if (!isPaused && !intervalId) {
        startCounter();
      }
    });
  
    // Comment form submission
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText) {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = commentText;
        commentList.appendChild(commentDiv);
        commentInput.value = ""; // Clear input
      }
    });
  });