let questionNumber = 0;

let time = 0;
let numberCorrect = 0;
let numberWrong = 0;

// Questions: array of objects
let questions = [
    {
        question: "Which is NOT a name of one of the two eels who are Ursula’s sidekicks?",
        options: ["Flotsam", "Jetsum", "Epsum"],
        correctAnswer: 'Epsum',
        image: 'assets/images/ursula-eels.jpg',
        beenUsed: false
    },
    {
        question: "Which Disney princess has a raccoon as a sidekick?",
        options: ["Jasmine", "Pocahontas", "Merida",
            "Mulan"],
        correctAnswer: 'Pocahontas',
        image: 'assets/images/raccoon.jpg',
        beenUsed: false
    }, {
        question: "What is Boo's real name?",
        options: ["Ally", "Mary", "Sara",
            "Kelly"],
        correctAnswer: 'Mary',
        image: 'assets/images/boo.jpg',
        beenUsed: false
    }, {
        question: "What does Cinderella's fairy godmother turn into a carriage?",
        options: ["A turnip", "A pumpkin", "A mouse",
            "The prince"],
        correctAnswer: 'A pumpkin',
        image: 'assets/images/cinderella-carriage.jpg',
        beenUsed: false
    }, {
        question: "Who is Princess Aurora's prince? ",
        options: ["Prince Charming", "Prince William", "Prince Philip",
            "Prince"],
        correctAnswer: 'Prince Philip',
        image: 'assets/images/prince-philip.jpg',
        beenUsed: false
    }, {
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
        image: 'assets/images/gaston.jpg',
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
    $('#questionNumber').text(questionNumber);
    $('#questionTotal').append(' of 10');
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

    // if this.html = correctAnswer run correct answer, else wrong answer
    if ($(this)[0].innerText === i.correctAnswer) {
        console.log('good job')
        numberCorrect++;
    }
    // turn answer red if incorrect
    else {
        $(this).removeClass('#btn btn-outline-secondary').addClass('#btn btn-outline-danger');
        numberWrong++;
    }
    // no matter what, set correctanswer to green
    correctAnswerGreen()
    // display next question button
    $('#nextQ').html(
        "<button id='nextQuestion' type=button class='btn btn-primary'>Next Question</button>"
    )
    $('#nextQ').css('display', 'flex');
    // if on question 10, show end game
    if (progressStatus === 100) {
        $('#nextQuestion').text('End Game');

    }
}


// no matter what, set correctanswer to green
let correctAnswerGreen = function () {
    let optionsArray = $("[id='option']")
    for (x in optionsArray) {
        if (optionsArray[x].innerText === i.correctAnswer) {
            optionsArray[x].className = '#btn btn-outline-success m-3 rounded';
        }
    }
}


let nextQuestion = function () {
    // hide self
    $('#nextQ').css('display', 'none');
    // if on 10th question, run endGame
    if ($('#nextQuestion').text() === 'End Game') {
        endGame();
    }
    else {
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
            `<button id='option' value=${x} type="button" class="btn btn-outline-secondary m-3" style="width:200px">${i.options[x]}</button>`
        )
    }
}

let endGame = function () {
    // clear question
    $('#question').html('');
    // clear options
    $('#options').html('');
    // clear image
    $('#image').attr('src', '')
    // fill score
    let yourGrade = '';
    switch(numberCorrect) {
        case 10:
        yourGrade = 'A+'
          break;
        case 9:
        yourGrade = 'A-'
          break;
        case 8:
        yourGrade = 'B'
          break;
        case 7:
        yourGrade = 'C'
          break;
        case 6:
        yourGrade = 'D'
          break;
        default:
        yourGrade = 'F'
      }
    $('#scoreboard').html(
        `<div><h2>Number Correct: <b>${numberCorrect}</b></h2></div><br>
        <div><h2>Number Wrong: <b>${numberWrong}</b></h2></div><br>
        <div><h1>Your Grade: <b>${yourGrade}</b></h1></div><br>
        <div><button class='btn btn-primary'>Start New Game</button></div>`
    )
}


let resetGame = function () {
    // set all questions beenUsed to false
    // set score to 0
}


// Event Listeners

// startGame
$('#startGame').on('click', startGame);
// answerClick
$(document).on('click', '#option', answerClicked);
// nextQuestion
$(document).on('click', '#nextQuestion', nextQuestion);
    // New Game
