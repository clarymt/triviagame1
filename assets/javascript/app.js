    //generate quiz questions by creating array
    //the create array for each question
    const questionSet = [
        {
            triviaQuestion: "Which WAS NOT a band name the group considered before 'Nirvana'?",
            multipleChoice: ["Skid Row", "Pen Cap Chew", "Ted Ed Fred", "Sonic Youth"],
            answer: "Sonic Youth",
            image: "./assets/images/image1.gif"
        },

        {
            triviaQuestion: "Kurt Cobain dropped out of high school, and shortly after became a: ",
            multipleChoice: ["Waiter", "Janitor", "Chef", "Garbage Truck Driver"],
            answer: "Janitor",
            image: "./assets/images/image2.gif"

        },

        {
            triviaQuestion: "How much did Nirvanas first album, 'Bleach' cost to make?",
            multipleChoice: ["$606.17", "$1504.69", "$250", "$2475.19"],
            answer: "$606.17",
            image: "./assets/images/image3.gif"

        },

        {
            triviaQuestion: "What was 'Smells Like Teen Spirit' insprired by?",
            multipleChoice: ["Cobain's old girlfriend's deodorant", "Cigarettes and Alcohol", "Cobain when he was the school janitor", "The bands first concert at a local college"],
            answer: "Cobain's old girlfriend's deodorant",
            image: "./assets/images/image4-.gif"

        },

        {
            triviaQuestion: "What was their 3rd album, 'In Utero' origininally titled?",
            multipleChoice: ["Fetus Police", "All Apologies", "I Hate Myself and Want To Die", "Anatomy of a Heart-Shaped Box"],
            answer: "I Hate Myself and Want To Die",
            image: "./assets/images/image4.gif"

        },

        {
            triviaQuestion: "Nirvana's most successful album 'Nevermind' sold how many copies?",
            multipleChoice: ["10 million", "20 million", "30 million", "40 million"],
            answer: "30 million",
            image: "./assets/images/image5.gif"

        },

        {
            triviaQuestion: "What was the budget for the making of 'Nevermind'?",
            multipleChoice: ["$25,000", "$65,000", "$85,000", "$105,000"],
            answer: "$65,000",
            image: "./assets/images/image6.gif"

        },


        {
            triviaQuestion: "What allegedly began Nirvana's notorious lust for destroying their set equipment?",
            multipleChoice: ["One of their former Drummers consistently messing up", "Drugs", "The band being upset for Weird Al making fun of them"],
            answer: "One of their former Drummers consistently messing up",
            image: "./assets/images/image7.gif"

        },

        {
            triviaQuestion: "During the 1992 VMAs Cobain spat on a piano he thought was a part of Guns n Roses set, but it the piano was in fact played by ______.",
            multipleChoice: ["David Bowie", "Ray Charles", "Bruce Springsteen", "Elton John"],
            answer: "Elton John",
            image: "./assets/images/image8.gif"

        },

        {
            triviaQuestion: "How many drummers came and went in the band before they found David Grohl, who would later create the Foo Fighters?",
            multipleChoice: ["1", "2", "3", "4"],
            answer: "4",
            image: "./assets/images/image9.gif"

        },
    ];


    console.log(questionSet)
    //variables we need to intitialize the trivia
    let count = 25;
    let currQuestion = 0;
    let score = 0;
    let lost = 0;
    let timer;

    //call function after timer reaches zero
    function questionNext() {
      //need timer to recognize when questionset has ended
        const questionSetEnd = (questionSet.length - 1) === currQuestion;
        if (questionSetEnd) {
            summary();
        } 
        
        else {
            currQuestion++;
            loadQuestion();
        }
    }        
       
         //whenever function is called the entire set can be timed
        function timeStop() {
            clearInterval(timer);
            lost++;
            $("#game").html('<p> Correct answer: ' + questionSet[currQuestion].answer + '</p> <img src=' + questionSet[currQuestion].image + '> </img>');
            setTimeout(questionNext, 3000);
        }

        function countDown(){
            count--;
            $('#timer').html('Time left: ' + count);

            if (count === 0) {
                timeStop();
            }
        }
    
    //calling quesiton and options on html
    function loadQuestion() {
    
        count = 25;
        timer = setInterval(countDown, 1000);

        const question = questionSet[currQuestion].triviaQuestion;
        const choices = questionSet[currQuestion].multipleChoice;
        
        $('#timer').html('Time left: ' + count);
        $('#game').html(`<h4>${question}</h4> 
            ${loadMultipleChoice(choices)}
            ${remainingQuestions()}
       `)
    }

    function loadMultipleChoice(choices) {
        let result = '';
        for ( let i = 0; i < choices.length; i++) {
            result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }
        return result;
    }
//Need onclick function to acknowledge correct answer and incorrect answer
$(document).on('click', '.choice', function() {
    clearInterval(timer); //set timer clear within the click function
    const answerChoice = $(this).attr('data-answer');
    const correctChoice = questionSet[currQuestion].answer;

    if (correctChoice === answerChoice) {
        score++;
        $("#game").html('<p> Correct answer: ' + correctChoice + '</p> <img src=' + questionSet[currQuestion].image + '> </img>');
        setTimeout(questionNext, 3000);
        //console.log("yes")
    }

    else{
        lost ++;
        $("#game").html('<p> Correct answer: ' + correctChoice + '</p> <img src=' + questionSet[currQuestion].image + '> </img>');
        setTimeout(questionNext, 3000);
        //console.log("no")
    }

    //console.log('clicky clicky picky clicky', answerChoice);
});

//create game summary

function summary() {
    const result = `
    <p>The existentialism of this trivia game has become self aware to its own demise, game over.</p>
     <p>Questions Correct: ${score}</p>
     <p>Questions Incorrect: ${lost}</p>
     <p>Questions in Total: ${questionSet.length}</p>
    <button  id="reset"> Play Again </button>
    `;
    $('#game').html(result);
}

$(document).on('click','#reset',function() {
    count = 2;
    currQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();

});

function remainingQuestions() {
    const remainQuestion = questionSet.length - (currQuestion);
    const totalQuestions = questionSet.length;
    return `<p class='left'>Remaining Questions: ${remainQuestion}/${totalQuestions}</p>`;
}

$('#start').click(function(){
    $('#start').remove();
    $('#timer').html(count);
    loadQuestion();
});