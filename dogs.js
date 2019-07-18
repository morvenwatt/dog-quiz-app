const QUIZ = {
    questions: [
        {
            text: "Which dog breed doesn't bark?",
            blurb: "The only breed not to bark is the Basenji...but they can scream, yodel and whine!",
            charity: "https://www.basenjirescue.org/DOGS/default.asp",
            image: { url: "images/dognose.png", alt: "macro of dog nose" },
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
        },
        {
            text: "What is the worlds oldest dog breed?",
            blurb: "It is the Saluki. These good boys appear as early as 2100BC in ancient Egyptian Tombs. ",
            charity: "http://www.stola.org/",
            image: { url: "images/whitePup.png", alt: "white dog" },
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
            charity: "https://dlrrphoenix.org/",
            image: { url: "images/husky.png", alt: "white husky" },
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
            ]
        },
        {
            text: "Around how many words/gestures can a dog understand?",
            blurb: "Around 160, on average, giving them roughly the same mental faculties as a two year old. The most ever learnt was 1022 words/gestures by a border collie! ",
            charity: "http://www.glenhighlandfarm.com/sbcr.htm",
            image: {url: "images/colliePup.png", alt: "collie pup"},
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
        },
        {
            text: "Where do spiked collars come from?",
            blurb: "Ancient Greece - they were thought to have been designed to protect the dogs from wolf attacks.",
            charity: "https://saveagreekstray.org/el/",
            image: { url: "images/goldenPups.png", alt: "two golden retriever puppies" },
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
            blurb: "The newfoundland dog was originally bred to help haul nets for fishermen and rescue people at risk of drowning.",
            charity: "http://bigdogshugepaws.com/dogs/newfoundland",
            image: { url: "images/paddedogs.png", alt: "three dogs and woman on paddleboard" },
            answers: [
                {
                    text: "Labrador",
                    isCorrect: false
                },
                {
                    text: "Newfoundland",
                    isCorrect: true
                },
                {
                    text: "GSP",
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
            charity: "http://www.southeastbloodhoundrescue.net/",
            image: { url: "images/frenchie.png", alt: "French bulldog" },
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
            charity: "https://www.greatdanerescueinc.com/",
            image: { url: "images/fence.png", alt: "dog with nose through fence" },
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
            charity: "https://kspca-kenya.org/",
            image: { url: "images/pibble.png", alt: "cute pitbull" },
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
            charity: "http://www.fight4them.org/",
            image: { url: "images/adultGolden.png", alt: "adult golden retriever" },
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
            blurb: "It's a whopping 900 million, 200 million of which are estimated to be strays, so the message adopt don't shop is pretty sage! ",
            charity: "https://www.mnn.com/family/pets/stories/25-creative-ways-to-help-animal-shelters",
            image: { url: "images/smilingDog.png", alt: "smiling dog" },
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
                    text: "900 Million",
                    isCorrect: true
                },
                {
                    text: "600 Million",
                    isCorrect: false
                },
            ],
        },
    ],
    answers: []
}

function resetQuiz() {
    QUIZ.answers = [];
}
function getCurrentQuestionNumber() {
    return QUIZ.answers.length;
}
function getCurrentQuestion() {
    return QUIZ.questions[getCurrentQuestionNumber()];
}
function getScore() {
    return QUIZ.answers.filter(answer => answer.isCorrect).length;
}


function generateHeader(shouldShowScore = true) {
    return `
   <header role="Quiz title and score/location log">
   <img src="images/logo.png" class='logo' alt="paw logo">
   <h1>Pup-Quiz!</h1>
   ${shouldShowScore ? `<p>Question Number : ${getCurrentQuestionNumber() + 1} /11</p >
   <p>Your Score : ${getScore()} /11 </p>` : ""}
   </header>
   `
}
function generateIntro() {
    return `
        <section class="introPage" role="contentInfo">
      <img src="images/pibbleInHat.png" class="pibbleInHat" alt="Pitbull with hat on">
      <p class="introParagraph">You love dogs? Of course you love dogs. I mean, what are you? A serial killer?
        Just kidding, I'm sure you're great Ted! Anyway, back to the puppies, you love 'em, 
          you have 'em, you pet 'em, or you want 'em. 
          So why don't you go ahead and take this little quiz 
          about our furry friends so you can learn more about them!
      </p>
      <button id="startButton">Let's Go!</button> 
      </section>
      `
}
function generateQuestion(question) {
    return `
    <section class="questionPage" role="checkbox">
    <img src="${question.image.url}" class="questionPic" alt="${question.image.alt || 'picture of cute dog'}">
    <form>
        <fieldset>
            <legend>${question.text}</legend>
            <ol>
          ${question.answers.map((answer, index) => {
        return `
              <li>
                 <input type="radio" value="${index}" name="answer" id="answer${index}" required="required">${answer.text}</input>
                 <label for="answer${index}">
          </li>`
    }).join("\n")}
     </ol>
        </fieldset>
    <input type="submit" value="Fetch Answer"></input>
    </form>
    </section>`
}

function generateFeedbackPage(question, answer) {
    return `
    <section class="answerPage">
    <img src="${question.image.url}" class="answerPic" alt="${question.image.alt || 'picture of cute dog'}">
        <div id="answer"
            <p class="result">You got it ${answer.isCorrect ? "right" : "wrong"}! </p>
            <p> Go give a dog some belly rubs!</p>
            <p class="info">${question.blurb}</p>
            </div>
    <button id="nextQ">Another Treat?</button>
    <div class="charity" role="link to charities">
            <p>Like these dogs? Check out <a href="${question.charity}" target="_blank">this</a> charity to learn more!</p>
        </div>
        </section>
    `
}

function generateFinalPage() {
    return `
    <section class="finalPage">
    <img src="images/rosette.png" class="rosette">
            <p id="finalResult">Good job, you got ${getScore()}/${QUIZ.questions.length}</p>
            <p class="closingParagraph">Thanks for taking this quiz! There are a lot of dogs out there. 
            But, there is a lot we can do to help. You don't have to adopt a dog (or cat), you can 
               transport them, or, donate your time, money, items, and skills. 
               <a href="https://www.dosomething.org/us/facts/11-facts-about-animal-homelessness"target="_blank"">200 Million</a> strays is a lot, 
               and our furry friends can always use a helping hand!
            </p>
            <button id="restartQuiz">Another Round?</button>
            <h3>Want to check out any of those links?</h3>
            <ol class="charityList">
                <li><a href="https://www.basenjirescue.org/DOGS/default.asp" target="_blank">Basenji Rescue</a></li>
                <li><a href="http://www.stola.org/" target="_blank">Saluki Rescue</a></li>
                <li><a href="https://dlrrphoenix.org/" target="_blank">Phoenix Lab Rescue</a></li>
                <li><a href="http://www.glenhighlandfarm.com/sbcr.htm" target="_blank">Collie Rescue</a></li>
                <li><a href="https://saveagreekstray.org/el/" target="_blank">Greek Stray Rescue</a></li>
                <li><a href="http://bigdogshugepaws.com/dogs/newfoundland" target="_blank">Newfie Rescue</a></li>
                <li><a href="http://www.southeastbloodhoundrescue.net/" target="_blank">Bloodhound Rescue</a></li>
                <li><a href="https://www.greatdanerescueinc.com/" target="_blank">Great Dane Rescue</a></li>
                <li><a href="https://kspca-kenya.org/" target="_blank">Kenyan SPCA</a></li>
                <li><a href="http://www.fight4them.org/" target="_blank">Fight4Them (Dog Fighting Prevention & Rescue)</a></li>
                <li><a href="https://www.mnn.com/family/pets/stories/25-creative-ways-to-help-animal-shelters" target="_blank">Other ways to help!</a></li>
            </ol>
            </section>
    `
}
function displayIntro() {
    $("header").html(generateHeader(false));
    $("main").html(generateIntro());
}
function displayQuestion(question = getCurrentQuestion()) {
    $("header").html(generateHeader());
    $("main").html(generateQuestion(question));
}
function displayFeedback(question, answer) {
    $("header").html(generateHeader());
    $("main").html(generateFeedbackPage(question, answer));
}
function displayFinalPage() {
    $("header").html(generateHeader(false));
    $("main").html(generateFinalPage());
}

function handleStartButton() {
    $('main').on('click', '#startButton', function (event) {
        displayQuestion();
    })
}
function handleAnswerSubmit() {
    $('main').on('submit', 'form', function (event) {
        event.preventDefault();
        const selectedValue = $('input[type="radio"]:checked').val();
        const question = getCurrentQuestion();
        const answer = question.answers[selectedValue];
        QUIZ.answers.push(answer);
        displayFeedback(question, answer);
    })
}
function handleNextQuestion() {
    $('main').on('click', '#nextQ', function (event) {
        const isOnLastQuestion = getCurrentQuestionNumber() >= QUIZ.questions.length;
        if (isOnLastQuestion) {
            displayFinalPage();
        }
        else displayQuestion();
    })
}
function handleRestartQuiz() {
    $('main').on('click', '#restartQuiz', function (event) {
        resetQuiz();
        displayIntro();
    })
}

function setUpEventHanders() {
    handleStartButton();
    handleAnswerSubmit();
    handleNextQuestion();
    handleRestartQuiz();
}

function initializeUI() {
    displayIntro();
    setUpEventHanders();
}
$(initializeUI);