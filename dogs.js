const QUIZ = {
    questions: [
        {
            text: "Which dog breed doesn't bark?",
            blurb: "The only breed not to bark is the Basenji...but they can scream, yodel and whine!",
            charity: "https://www.basenjirescue.org/DOGS/default.asp",
            image: "images/dognose.png",
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
            image: "images/whitePup.png",
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
            image: "images/husky.png",
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
            image: "images/colliePup.png",
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
            image: "images/goldenPups.png",
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
            charity: "http://bigdogshugepaws.com/dogs/newfoundland",
            image: "images/paddledogs.png",
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
            charity: "http://www.southeastbloodhoundrescue.net/",
            image: "images/frenchie.png",
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
            image: "images/fence.png",
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
            image: "images/pibble.png",
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
            image: "images/adultGolden.png",
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
            blurb: "Of those 900 million, 200 Million are estimated to be strays, so the message adopt don't shop is pretty sage! ",
            charity: "https://www.mnn.com/family/pets/stories/25-creative-ways-to-help-animal-shelters",
            image: "images/smilingDog",
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

function resetQuiz (){
    QUIZ.answers = [];
}

function getCurrentQuestionNumber() {
    return QUIZ.answers.length;
}
function getCurrentQuestion() {
    return QUIZ.questions[getCurrentQuestionNumber()];
}
function getScore() {
    return QUIZ.questions.filter(question => question.isCorrect).length;
}


function generateHeader (){
   return `
   <p>Question Number:${getCurrentQuestionNumber()}</p >
   <p>Your Score:${getScore()}</p>
   `
}
function generateIntro (){
      return `
      <img src="images/pibbleInHat.png" class="pibbleInHat" alt="Pitbull with hat on">
      <p>You love dogs? Of course you love dogs, <br>
          I mean, what are you? A serial killer? Just kidding.<br>
          Anyway, back to the puppies, you love 'em, <br>
          you have 'em, you pet 'em, or you want 'em. <br>
          So why don't you go ahead and take this little quiz <br>
          about our furry friends so you can learn more about them!
      </p>
      <button id="startButton">Let's Go!</button> 
      `
}
function generateQuestion(question) {
    return `
    <img src="${question.image}" class="questionPic" alt="picture of cute dog">
    <form>
        <fieldset>
            <legend>${questions.text}</legend>
            <ol>
          ${question.answers.map((answer, index)=>{
              return `
              <li>
              <label for="answer${index}">
                  <input type="radio" value="${index}" name="answer" id="answer${index}">${answer.text}</input>
              </label>
          </li>`
          }).join("\n")}
     </ol>
        </fieldset>
    </form>`
}

function generateFeedbackPage(question, answer){
    return `
    <img src="${question.image}" class="answerPic" alt="cute dog">
    <section class="infoAnswer" role="information">
            <p>You got it ${answer.isCorrect?"right":"wrong"}</p>
            <p>${question.blurb}</p>
    </section>
    <button id="nextQ">Another Treat?</button>
    <div class="charity" role="link to charities">
            <p>Like these dogs? Check out <a href="${question.charity}">this</a> charity to learn more!</p>
        </div>
    `
}

function generateFinalPage (){
    return `
    <img src="images/rosette.png" class="rosette">
            <p id="finalResult">Good job, you got ${getScore()}/${QUIZ.questions.length}</p>
            <p>Thanks for taking this quiz! <br>
               There are a lot of dogs and strays out there. <br>
                But, there is so much we can do. <br>
               You don't have to adopt a dog (or cat), you can <br>
               transport, donate time, money, items, or skills. <br>
               <a href="https://www.dosomething.org/us/facts/11-facts-about-animal-homelessness">200 Million</a> strays is a lot, <br>
               and our furry friends can always use a helping hand!
            </p>
            <button id="restartQuiz">Another Round?</button>
            <h3>Want to check out any of those links?</h3>
            <ol class="charityList">
                <li><a href="https://www.basenjirescue.org/DOGS/default.asp">Basenji Rescue</a></li>
                <li><a href="http://www.stola.org/">Saluki Rescue</a></li>
                <li><a href="https://dlrrphoenix.org/">Phoenix Lab Rescue</a></li>
                <li><a href="http://www.glenhighlandfarm.com/sbcr.htm">Collie Rescue</a></li>
                <li><a href="https://saveagreekstray.org/el/">Greek Stray Rescue</a></li>
                <li><a href="http://bigdogshugepaws.com/dogs/newfoundland">Newfie Rescue</a></li>
                <li><a href="http://www.southeastbloodhoundrescue.net/">Bloodhound Rescue</a></li>
                <li><a href="https://www.greatdanerescueinc.com/">Great Dane Rescue</a></li>
                <li><a href="https://kspca-kenya.org/">Kenyan SPCA</a></li>
                <li><a href="http://www.fight4them.org/">Fight4Them (Dog Fighting Prevention & Rescue)</a></li>
                <li><a href="https://www.mnn.com/family/pets/stories/25-creative-ways-to-help-animal-shelters">Other ways to help!</a></li>
            </ol>
    `
}
function displayIntro(){
    $("header").html(generateHeader());
    $("main").html(generateIntro());
}
function displayQuestion (question = getCurrentQuestion()){
    $("header").html(generateHeader());
    $("main").html(generateQuestion(question));
}

function handleStartButton() {
        $('main').on('click', '.startButton', function (event) {
        displayQuestion();
    })
}


function setUpEventHanders(){
    handleStartButton();
}

function initializeUI(){
    displayIntro();
    setUpEventHanders();
}
$(initializeUI);