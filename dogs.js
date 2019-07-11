const QUIZ = {
    questions: [{
        text: "Which dog breed doesn't bark?",
        blurb: "The only breed not to bark is the Basenji...but they can scream, yodel and whine!",
        answers: [
            {
                text: "Basenji",
                isCorrect: true
            },
            {
                text: "Labrador",
                isCorrect: false
            },
            {
                text: "Akita",
                isCorrect: false
            },
            {
                text: "Shiba Inu",
                isCorrect: false
            },
        ]},
    {
        text: "Which dog breed doesn't bark?",
        blurb: "The only breed not to bark is the Basenji...but they can scream, yodel and whine!",
        answers: [
            {
                text: "Basenji",
                isCorrect: true
            },
            {
                text: "Labrador",
                isCorrect: false
            },
            {
                text: "Akita",
                isCorrect: false
            },
            {
                text: "Shiba Inu",
                isCorrect: false
            },
        ]
    }],
    answers: []
}

function getCurrentQuestionNumber (){
  return QUIZ.answers.length;  
}
function getCurrentQuestion (){
    return QUIZ.questions[getCurrentQuestionNumber()];
}
function getScore (){
    return QUIZ.questions.filter(question => question.isCorrect).length;
}

function generateQuestion(question){
   return `
    <form>
        <fieldset>
            <legend>${question.text}</legend>
            <ol>
                <li>
                    <label for="answer1">
                        <input type="radio" value="0" name="answer" id="answer1">Answer</input>
                    </label>
                </li>
                <li>
                    <label for="answer2">
                        <input type="radio" value="0" name="answer" id="answer2">Answer</input>
                    </label>
                </li>
                <li>
                    <label for="answer3">
                        <input type="radio" value="0" name="answer" id="answer3">Answer</input>
                    </label>
                </li>
                <li>
                    <label for="answer4">
                        <input type="radio" value="0" name="answer" id="answer4">Answer</input>
                    </label>
                </li>
            </ol>
        </fieldset>
    </form>`
}

function generateFeedbackPage (question)