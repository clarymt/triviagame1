$( document ).ready(function() {
//generate quiz questions by creating array
//the create array for each question
const questionSet = [
    {
        question: "Which WAS NOT a band name the group considered before 'Nirvana'?",
        multipleChoice: ["Skid Row", "Pen Cap Chew", "Ted Ed Fred", "Sonic Youth"],
        answer: "Sonic Youth"
    },

    {
        question: "Kurt Cobain dropped out of high school, and shortly after became a: ",
        multipleChoice: ["Waiter.", "Janitor.", "Chef.", "Garbage Truck Driver."],
        answer: "Janitor"
    },

    {
        question: "How much did Nirvanas first album, 'Bleach' cost to make?",
        multipleChoice: ["$606.17", "$1504.69", "$250", "$2475.19"],
        answer: "$606.17"
    },

    {
        question: "What was 'Smells Like Teen Spirit' insprired by?",
        multipleChoice: ["Cobain's old girlfriend's deodorant", "Cigarettes and Alcohol", "Cobain when he was the school janitor", "The bands first concert at a local college"],
        answer: "Cobain's old girlfriend's deodorant"
    },

    {
        question: "What was their 3rd album, 'In Utero' origininally titled?",
        multipleChoice: ["Fetus Police", "All Apologies", "I Hate Myself and Want To Die", "Anatomny of a Heart-Shaped Box"],
        answer: "I Hate Myself and Want To Die"
    },

    {
        question: "Nirvana's most successful album 'Nevermind' sold how many copies?",
        multipleChoice: ["10 million", "20 million", "30 million", "40 million"],
        answer: "30 million"
    },

    {
        question: "What was the budget for the making of 'Nevermind'?",
        multipleChoice: ["$25,000", "65,000", "$85,000", "$105,000"],
        answer: "$65,000"
    },


    {
        question: "What allegedly began Nirvana's notorious lust for destroying their set equipment?",
        multipleChoice: ["One of their former Drummers consistently messing up", "Drugs", "The band being upset for Weird Al making fun of them"],
        answer: "One of their former Drummers consistently messing up"
    },

    {
        question: "During the 1992 VMAs Cobain spat on a piano he thought was a part of Guns n Roses set, but it the piano was in fact played by ______.",
        multipleChoice: ["David Bowie", "Ray Charles", "Bruce Springsteen", "Elton John"],
        answer: "Elton John"
    },

    {
        question: "How many drummers came and went in the band before they found David Grohl, who would later create the Foo Fighters?",
        multipleChoice: ["1", "2", "3", "4"],
        answer: "4"
    },
];
console.log(questionSet)
 //variables we need to intitialize the trivia
 let count = 25;
 let currQuestion = 0;
 let score = 0;
 let lost = 0;
 let timer; 
//calling quesiton and options on html
function loadQuestion() {
    const question = questionSet[currQuestion].question;
    const choices = questionSet[currQuestion].choices;

    $('#game').html('<th scope="col" >' + question + '</th>')
}
 loadQuestion();
});

