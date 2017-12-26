//All the questions in an array
var questions = [
{
	question: "In which country did cheddar cheese originate?",
	answers: ["England", "France", "Belgium", "Germany"],
	correctAnswer: "England"
},
{
	question: "Siddhartha Gautama is believed to be the founder of what religion?",
	answers: ["Hinduism", "Islam", "Buddhism", "Judiasm"],
	correctAnswer: "Buddhism"
},
{
	question: "Which Scandinavian nation lies between Norway and Finland?",
	answers: ["Switzerland", "Sweden", "Belgium", "Denmark"],
	correctAnswer: "Sweden"
},
{
	question: "What chemical element gives the blood of a lobster a bluish tint?",
	answers: ["Nitrogen", "Hydrogen", "Copper", "Selenium"],
	correctAnswer: "Copper"
},
{
	question: "Alkebulan is the oldest indeginous name for which continent?",
	answers: ["Europe", "Asia", "Africa", "South America"],
	correctAnswer: "Africa"
},
{
	question: "General Motors was founded in which city?",
	answers: ["Detroit", "San Francisco", "New York", "Flint"],
	correctAnswer: "Flint"

}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 45,

	timer: function(){
		game.counter--;
		$(".timer-area").html("<h2>" + "Time Remaining" + game.counter + "Seconds" + "</h2>");

		if game.counter === 0 {
			game.play.done();
		};
	},

	play: function(){
		$(".start").on("click", function(){
			setInterval(game.timer, 1000);
			for (var=i; i<questions.length; i++) {
				for (var j = 0; j < questions[i].answers.length; j++) {
					$(".question-area").append("<h2>" + questions[i].question + "</h2>" /n "<input type='radio' name='question-" + i +
        			"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);	
				}
				$.each($("input[name='question-" + i + "':checked"), function done() {
      			if ($(this).val() === questions[i].correctAnswer) {
        		game.correct++;
      			}
      			else {
        		game.incorrect++;
      			}
      			$(".timer-area").remove();
      			$(".question-area").append("<h2>" + "Correct:" + game.correct /n + "Incorrect:" + game.incorrect + "</h2>" )
    			});
			}
		$(".start").remove();
		$(".done").append("<div class=btn btn-primary done-button>" + "Done" + "</div>");
		$(".done-button").on("click", function(){
			game.done();
			});

      	});
	}

};
//Timer

//set the timer to 45 seconds and have it countdown
//on click of start, timer begins
//when it ===0, times up, game over

//game


//on click of start, run through each of the questions, and display them as questions and answers
//replace the start button with a button to submit answers(or remove it and add a buttton at the end)

//when the timer is up or when they click the button, game is over


//create correct and incorrect counters
//run through all of their answers and and see if they match up. if yes, increase correct counter, if no, increase incorrect counter
//display their number of correct and number of incorrect answers



//when game over, clear the timer div and replace the questions div with the correct and incorrect answers


















