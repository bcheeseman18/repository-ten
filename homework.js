/**
 * Make a quiz game.

Make a quiz game that pulls random questions from this awesome Jeopardy question API. 
Make an AJAX request to the following URL and you'll get back a question, answer, category, and point value, among other things.

Your challenge:

Retrieve a question when the page loads and display it on the screen. Each question should display the category, point value, and the question text. 
You should also have a text box that people can type their answer into, and a button they can click to submit their answer.

Keep track of the user's score. When the user clicks the 'guess' button, you should check to see if they got the answer right. 
If they did, increase their score by the value of the question (provided in the AJAX response). If they didn't, no points are awarded or lost.

After users guess, load a new question.

Hint: you can create the HTML that you need ahead of time and just change the textContent whenever you get a new question. 
You don't need to create a bunch of new elements for each question.
 */


function makeQuestion(newQuestion) {
    let parent = document.querySelector('main ul');//container


    //Make an AJAX request to the following URL and you'll get back a 
    //question, answer, category, and point value, among other things.
    //question in a <p>
    let category = document.querySelector('.Category');
    category.textContent = newQuestion.title;

    let que = document.querySelector('.Question');
    que.textContent = newQuestion.question;

    let answer = document.querySelector('.Answer');
    answer.textContent = newQuestion.answer;

    let pointValue = document.querySelector('.PointValue');
    pointValue.textContent = newQuestion.value;

    // You should also have a text box that people can type their answer into, 
    // and a button they can click to submit their answer.





}


// ---------------------- AJAX -------------------------------


window.addEventListener('load', function () {

let score = 0;

    function getNewQuestion() {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://jservice.io/api/random');
        request.addEventListener('load', function () {


            let response = JSON.parse(request.responseText);
            let newQuestion = {
                title: response[0].category.title,
                question: response[0].question,
                answer: response[0].answer,
                value: response[0].value,
            };

            console.log(response);
            makeQuestion(newQuestion);


// record the score for the first correct answer, then continue adding
// new scores to the current score

if (response[0].question === response[0].answer); {
score = score + response[0].value;
console.log(score);
} else }
console.log('false'); 

let newScore = document.querySelector('.Score');
    newScore.textContent = score;

        });

        request.send();
        
    }

  
    getNewQuestion();

            let btn = document.querySelector('.button');
            btn.addEventListener('click', function () {
                console.log('new question');
                getNewQuestion();
            });

        


});


window.addEventListener('load', function () {

});

