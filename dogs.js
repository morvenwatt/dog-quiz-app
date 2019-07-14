const QUIZ = {
    questions: [{
        text: "Which dog breed doesn't bark?",
        blurb: "The only breed not to bark is the Basenji...but they can scream, yodel and whine!",
        charity: 
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
        text: "What is the worlds oldest dog breed?",
        blurb: "It is the Saluki. These good boys appear as early as 2100BC in ancient Egyptian Tombs. ",
        answers: [
            {
                text: "Egyptian Pharoah dog",
                isCorrect: false
            },
            {
                text: "English Bulldog",
                isCorrect: false
            },
            {
                text: "Saluki",
                isCorrect: true
            },
            {
                text: "Irish Wolfhound",
                isCorrect: false
            },
        ]
    },
    {
        text: "What is the most popular American dog breed?",
        blurb: "It is the labrador, and it has been for the past 26 years.",
        answers: [
            {
                text: "Staffordshire Terrier",
                isCorrect: false
            },
            {
                text: "Labrador",
                isCorrect: true
            },
            {
                text: "Golden Retriever",
                isCorrect: false
            },
            {
                text: "Pug",
                isCorrect: false
            },
        },
        {text: "Around how many words/gestures can a dog understand?",
        blurb: "Around 160, on average, giving them roughly the same mental faculties as a two year old. The most ever learnt was 1022 words/gestures by a border collie! ",
        answers: [
            {
                text: "250",
                isCorrect: false
            },
            {
                text: "50",
                isCorrect: false
            },
            {
                text: "125",
                isCorrect: false
            },
            {
                text: "160",
                isCorrect: true
            },
        ]
    }, {
    text: "Where do spiked collars come from?",
    blurb: "Ancient Greece - they were thought to have been designed to protect the dogs from wolf attacks.",
    answers: [
        {
            text: "Poland",
            isCorrect: false
        },
        {
            text: "Scotland",
            isCorrect: false
        },
        {
            text: "Ancient Greece",
            isCorrect: true
        },
        {
            text: "China",
            isCorrect: false
        },
    ]
},
{
    text: "Which dog breed has webbed feet?",
    blurb: "The newfoundland dog was originally bred to help haul nets for fishermen and rescuing people at risk of drowning.",
        answers: [
        {
            text: "Chesapeake bay retriever",
            isCorrect: false
        },
        {
            text: "Newfoundland",
            isCorrect: true
        },
        {
            text: "German Shorthaired Pointer",
            isCorrect: false
        },
        {
            text: "Alaskan Malamute",
            isCorrect: false
        },
    ]
},
{
    text: "Which dog has such an incredible sense of smell, it can be used as evidence in a court of law?",
    blurb: "Bloodhounds can also follow tracks that are over 300 hours old and can stay on a trail for over 130 miles!",
    answers: [
        {
            text: "Bloodhound",
            isCorrect: true
        },
        {
            text: "Beagle",
            isCorrect: false
        },
        {
            text: "Husky",
            isCorrect: false
        },
        {
            text: "Belgian Malinois",
            isCorrect: false
        },
    ]
},
{
    text: "How tall is the tallest dog?",
    blurb: "44 inches...It's a great Dane named Zeus, and that equates to about 3’6.",
    answers: [
        {
            text: "56 inches",
            isCorrect: false
        },
        {
            text: "42 inches",
            isCorrect: false
        },
        {
            text: "44 inches",
            isCorrect: true
        },
        {
            text: "63 inches",
            isCorrect: false
        },
    ]
},
{
    text: "Which dog breed is known for being the best hunter?",
    blurb: "Not just dog, but of all time! The African Hunting Dog is the most successful land hunter in the world. They’re successful in 50-70% of their hunts, which makes them consistently the best mammalian hunter, they even hold the current world record for it!",
    answers: [
        {
            text: "Cane Corso",
            isCorrect: false
        },
        {
            text: "Dogo Argentino",
            isCorrect: false
        },
        {
            text: "Coonhood",
            isCorrect: false
        },
        {
            text: "African hunting dog",
            isCorrect: true
        },
    ]
},
{
    text: "Which breed is the most decorated dog of the US military?",
    blurb: "Lots of dogs have done amazing stuff during wars (and many of them are mixbreeds) but Sargeant Stubby, a likely pit bull predecessor, served alongside human soldiers in the trenches in France during World War I. He received the purple heart, was promoted to sergeant, and lived to a ripe old age in retirement alongside his handler.",
    answers: [
        {
            text: "German Shepherd",
            isCorrect: false
        },
        {
            text: "Pit Bull Terrier",
            isCorrect: true
        },
        {
            text: "Doberman",
            isCorrect: false
        },
        {
            text: "Springer Spaniel",
            isCorrect: false
        },
    ]
},
{
    text: "How many dogs are there in the world?",
    blurb: "Of those 600 million, 400 Million are estimated to be strays….ADOPT DON’T SHOP! ",
    answers: [
        {
            text: "1 Billion",
            isCorrect: false
        },
        {
            text: "300 Million",
            isCorrect: false
        },
        {
            text: "600 Million",
            isCorrect: true
        },
        {
            text: "800 Million",
            isCorrect: false
        },
    ]
},
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

//What will need JS elements?
//Score/Question location.
//Question being displayed.
//Answer being displayed; inc blurb, and charity (list of charities)
//Score on final page. 