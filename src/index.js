const answers = ["In a minute", "Contact your doctor", "Not until you finish your vegetables",
  "You have to share", "Because I said so", "I'll give you something to cry about", "Finish your juice first or it'll lose its vitamins",
  "No", "Yes", "Depending on their spaghetti policy", "It's cause of the implication", "You need to stop eating cat food", "Outlook not so good",
  "Maybe yes", "??????", "What is wrong with you, mate?", "You'll have to bribe me for a good answer", "You need to go for a walk and stop playing LOL",
  "Ask your parents", "I'm not a fortune-teller, dude", "Try again"];

window.onload = function () {
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const eightball = document.getElementById("eight-ball");
  const question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("I can't answer without a question");
    } else {
      eight.innerText = "";
      const num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};
