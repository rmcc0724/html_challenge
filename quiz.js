(function() {

    //This is our constructor function for the Question object

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    //This where we add our displayQuestion function to the protoType prop of the object

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' ' + this.answers[i]);
        }
        console.log('Type exit to quit');
    };

    //This where we add our checkAnswer function to the protoType prop of the object

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        console.log(ans + ' ' + this.correct);
        if (ans === this.correct) {
            console.log("You've selected the correct answer.");
            sc = callback(true);
        }
        else {
            console.log("You've selected the in-correct answer.");
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    //This where we add our displayScore function to the protoType prop of the object
    Question.prototype.displayScore = function(score) {
        console.log("Your score is " + score);
    };

    //Here we create new questions using our Question constructor with 3 arguments, the question, the choices and the answer
    var q1 = new Question(
        'Is JS programming the best langiage in the world?', ['yes', 'no'],
        0
    );

    var q2 = new Question(
        'Am I a great progammer?', ['yes', 'no'],
        0
    );

    var q3 = new Question(
        'Do we like laziness?', ['yes', 'no'],
        1
    );

    var q4 = new Question(
        'Are you a quitter?', ['yes', 'no'],
        1
    );

    //Here we put all the questions into a single array
    var questions = [q1, q2, q3, q4];

    //This is our score function that increases the score by one everytime a question is answered correctly stored in a variable that we pass through the checkAnswer function which is programmed to call score function and increase the score by one if correct.
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;

        };
    }
    
    var keepScore = score();
    
    //This is our nextQuestion function that will repeat until 'exit' is typed into the input prompt
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }

    }
    nextQuestion();
})();
/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/