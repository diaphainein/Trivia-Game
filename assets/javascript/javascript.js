var triviaGame = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	secondsLeft: 30,
	questions: [{
			question: "In the episode, 'Art Crawl,' what was the controversial subject of Aunt Gayle's paintings?",
			answer: "",
		},
		{
			question: "What is the name of Louise's character nightlight?",
			answer: "",
		},
		{
			question: "What costume did Teddy make Bob wear at his Halloween party?",
			answer: "",
		},
		{
			question: "Who is the family dentist for the Belchers?",
			answer: "",
		},
		{
			question: "What is the name of Tina's beloved porcelain horse?",
			answer: "",
		},
	],
	answers: ["Animal anuses", "Kuchi Kopi", "Sumo wrestler", "Dr Yap", "Horselain"],
	checkAnswers: function() {
		for (i=0; this.questions.length > i; i++) {
			if (this.questions == "") {
				this.unanswered++;
			}
			else if (this.questions[i].answer == this.answers[i]) {
				this.correctAnswers++;
			}
			else {
				this.incorrectAnswers++;
			}
		$("answers").append("<h3>Correct Answers:</h3>");
		$("answers").append("<h3>Incorrect Answers:</h3>");
		$("answers").append("<h3>Unanswered:</h3>");

		}
	},
	setAnswer: function(i, answer) {
		this.question[i].answer = answer;
	},
	intervalId: null,
  	start: function() {
  		var self = this;
  		var audio = new Audio("Gene's-Fart-Noise.mp3");
	    self.intervalId = setInterval(function () {
	    	self.secondsLeft--;
	    	if (self.secondsLeft == 0) {
	    		checkAnswers();
	    		audio.play();
	    	}
	    }, 1000);
  },
  stop: function() {
  		var self = this;
  		clearInterval(self.intervalId);
  },
  init: function() {
  		this.correctAnswers: 0,
		this.incorrectAnswers: 0,
		this.unanswered: 0,
		this.secondsLeft: 30,
  }

}

$(document).ready(function() {
	
	triviaGame.init();

	 $("#timeLeft").html("30");
	 $("#button").click(triviaGame.start);


 
 });