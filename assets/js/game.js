let questionNumber = 0;

let time = 0;
let numberCorrect = 0;
let numberWrong = 0;

// Questions: array of objects
let questions = [
    {
        question: "In Aladdin, what is the name of Jasmine’s pet tiger? ",
        options: ["Rajah", "Aboo", "Peeta",
            "King"],
        correctAnswer: 'Rajah',
        image: 'assets/images/jasmine-rajah.jpg',
        beenUsed: false
    },
    {
        question: "In Beauty and the Beast, how many eggs does Gaston say he eats in order to stay \“roughly the size of barge\”?",
        options: ["5 Dozen", "3 Dozen", "18",
            "5"],
        correctAnswer: '5 Dozen',
        image: 'assets/images/gustov.jpg',
        beenUsed: false
    },
    {
        question: "Which Disney princess has no royal ties?",
        options: ["Mulan", "Cinderella", "Belle",
            "Merida"],
        correctAnswer: "Mulan",
        image: 'assets/images/princesses.jpg',
        beenUsed: false
    },
    {
        question: "What is the name of the pub that Flynn brings Rapunzel to in Tangled?",
        options: ["The Smug Rooster", "The Snuggly Duckling", "Ye Olde Pub",
            "The Red Moose"],
        correctAnswer: "The Snuggly Duckling",
        image: 'assets/images/tangled.jpg',
        beenUsed: false
    },
    {
        question: "In The Lion King, what side of Scar's face is his scar on?",
        options: ["Left", "Right"],
        correctAnswer: 'Left',
        image: 'assets/images/scar.png',
        beenUsed: false
    },
];

 
let progressStatus = 10;
let startGame = function () {
    console.log('start game clicked');
    // Hide self
    $('#startGame').css("display", "none");
    // Set question number
    questionNumber++;
    $('#questionTotal').html(' of 10');
    $('#questionNumber').text(questionNumber);
    // set question
    setQuestion();
    // start progress bar
    $('.progress').html(
        `<div id='progressBar' class="progress-bar" role="progressbar" style="width: ${progressStatus}%;" 
        aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>`
    )

    // start timer

        // if timer = 0 run wrongAnswer
}


let answerClicked = function () {
    console.log('answer clicked');
    // stop timer
    // console.log($(this)[0])
    // if this.html = correctAnswer run correct answer, else wrong answer
    if ($(this)[0].innerText === i.correctAnswer) { 
        console.log('good job')
    }
    // turn answer red if incorrect
    else {
        $(this).removeClass('#btn btn-outline-secondary').addClass('#btn btn-outline-danger');
    }
    // no matter what, set correctanswer to green
    correctAnswerGreen()
    // display next question button
    $('#nextQ').html(
    "<button id='nextQuestion' type=button class='btn btn-primary'>Next Question</button>"
    )
}

  // no matter what, set correctanswer to green
let correctAnswerGreen = function() {
    let optionsArray =  $("[id='option']")
    for (x in optionsArray) {
        if (optionsArray[x].innerText === i.correctAnswer) {
            optionsArray[x].className = '#btn btn-outline-success';
        }
    }
}


let nextQuestion = function () {
    // questionNumber++
    questionNumber++;
    $('#questionNumber').text(questionNumber);
    // change progress bar based on question number
    progressStatus += 10;
    $('#progressBar').css('width', progressStatus + '%')
    // clear options
    $('#options').html('')
    // run set question
    setQuestion()

    // start timer
}

let i = '';

let setQuestion = function () {
    // select question randomly from questions
    i = questions[Math.floor(Math.random() * questions.length)];
    //  checks to see if question already used, grabs new one if it is
    do {
        i = questions[Math.floor(Math.random() * questions.length)];
    }
    while (i.beenUsed);
    // sets question to used
    i.beenUsed;
   
    // fill question image
    $('#image').attr('src', i.image);
    // fill question text
    $('#question').text(i.question);

    // loop to create question answer options elements
    for (x in i.options) {
        let optionNum = 'option' + x;
        console.log(optionNum)
        $('#options').append(
            //template literals
            `
                <button id='option' value=${x} type="button" class="btn btn-outline-secondary m-3" style="width:200px">${i.options[x]}</button>
            `
        )
    }
}

let resetGame = function() {
    // set all questions beenUsed to false
    // set score to 0
}


// On Click Functions
    // startGame
        $('#startGame').on('click', startGame);
    // answerClick
        $(document).on('click', '#option', answerClicked);
    // nextQuestion
        $(document).on('click', '#nextQuestion', nextQuestion);
    // New Game


    let answeredCorrect = function () {
        // numberCorrect++
        numberCorrect++;
    }
    
    let andsweredWrong = function () {
        // numberWrong++
        numberWrong++;
    }