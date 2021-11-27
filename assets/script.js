function initQuiz() {
  let timeRemaining=0;
      const startButtonEl = document.getElementById("start-button");
      const timeRemainingEl = document.getElementById("time-remaining");
      const finalScoreEl = document.getElementById("final-score");
      const numQuestions = questions.length;
      const landingContainerEl = document.getElementById("landing-container");
      const quizContainerEl = document.getElementById("quiz-container");
      const finalContainerEl = document.getElementById("final-container");
      const submitButtonEl = document.getElementById("submit-initials");
      const highscoreButtonEl = document.getElementById("highscore-button");
      const highscoreContainerEl = document.getElementById("highscore-container");
      let highScores = [];
      if (JSON.parse(localStorage.getItem('scores')) !== null) {
          highScores = JSON.parse(localStorage.getItem("scores"));
      }
  
}
