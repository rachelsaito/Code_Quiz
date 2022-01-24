var question1 = {
    Qtitle: "What language is this page using for logic?",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    correctAnswer: "A"
}

var question2 = {
Qtitle: "What language is used for styling web pages?",
    optionA: "Apple",
    optionB: "CSS",
    optionC: "Bootstrap",
    optionD: "HTML",
    correctAnswer: "B"
}

var question3 = {
Qtitle: "What markup language acts as the framework for a web page?",
    optionA: "CSS",
    optionB: "JavaScript",
    optionC: "HTML",
    optionD: "API",
    correctAnswer: "C"
}

var question4 = {
Qtitle: "Which of these is a scripting language?",
    optionA: "html",
    optionB: "css",
    optionC: "english",
    optionD: "javascript",
    correctAnswer: "D"
}

var currentQuestion = document.querySelector(".questionText");      
document.querySelector(".questionText").innerHTML = question1.Qtitle
document.querySelector(".optionBtn1").onclick = function(){
console.log('Btn 1 success!')
if(currentQuestion.innerHTML == question1.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question2.Qtitle
document.querySelector(".optionBtn1").innerHTML = question2.optionA
document.querySelector(".optionBtn2").innerHTML = question2.optionB
document.querySelector(".optionBtn3").innerHTML = question2.optionC
document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question3.Qtitle
document.querySelector(".optionBtn1").innerHTML = question3.optionA
document.querySelector(".optionBtn2").innerHTML = question3.optionB
document.querySelector(".optionBtn3").innerHTML = question3.optionC
document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question4.Qtitle
document.querySelector(".optionBtn1").innerHTML = question4.optionA
document.querySelector(".optionBtn2").innerHTML = question4.optionB
document.querySelector(".optionBtn3").innerHTML = question4.optionC
document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
alert("incorrect!")
alert("All done!")
window.location.href = './index.html'
}
}
document.querySelector(".optionBtn2").onclick = function(){
console.log('Btn 2 success!')
if(currentQuestion.innerHTML == question1.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question2.Qtitle
document.querySelector(".optionBtn1").innerHTML = question2.optionA
document.querySelector(".optionBtn2").innerHTML = question2.optionB
document.querySelector(".optionBtn3").innerHTML = question2.optionC
document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question3.Qtitle
document.querySelector(".optionBtn1").innerHTML = question3.optionA
document.querySelector(".optionBtn2").innerHTML = question3.optionB
document.querySelector(".optionBtn3").innerHTML = question3.optionC
document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question4.Qtitle
document.querySelector(".optionBtn1").innerHTML = question4.optionA
document.querySelector(".optionBtn2").innerHTML = question4.optionB
document.querySelector(".optionBtn3").innerHTML = question4.optionC
document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
alert("incorrect!")
alert("All done!")
window.location.href = './index.html'
}
}
document.querySelector(".optionBtn3").onclick = function(){
console.log('Btn 3 success!')
if(currentQuestion.innerHTML == question1.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question2.Qtitle
document.querySelector(".optionBtn1").innerHTML = question2.optionA
document.querySelector(".optionBtn2").innerHTML = question2.optionB
document.querySelector(".optionBtn3").innerHTML = question2.optionC
document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
alert("incorrect!")
currentQuestion.innerHTML = question3.Qtitle
document.querySelector(".optionBtn1").innerHTML = question3.optionA
document.querySelector(".optionBtn2").innerHTML = question3.optionB
document.querySelector(".optionBtn3").innerHTML = question3.optionC
document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question4.Qtitle
document.querySelector(".optionBtn1").innerHTML = question4.optionA
document.querySelector(".optionBtn2").innerHTML = question4.optionB
document.querySelector(".optionBtn3").innerHTML = question4.optionC
document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
alert("incorrect!")
alert("All done!")
window.location.href = './index.html'
}
}
document.querySelector(".optionBtn4").onclick = function(){
console.log('Btn 4 success!')
if(currentQuestion.innerHTML == question1.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question2.Qtitle
document.querySelector(".optionBtn1").innerHTML = question2.optionA
document.querySelector(".optionBtn2").innerHTML = question2.optionB
document.querySelector(".optionBtn3").innerHTML = question2.optionC
document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question3.Qtitle
document.querySelector(".optionBtn1").innerHTML = question3.optionA
document.querySelector(".optionBtn2").innerHTML = question3.optionB
document.querySelector(".optionBtn3").innerHTML = question3.optionC
document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
alert("correct!")
currentQuestion.innerHTML = question4.Qtitle
document.querySelector(".optionBtn1").innerHTML = question4.optionA
document.querySelector(".optionBtn2").innerHTML = question4.optionB
document.querySelector(".optionBtn3").innerHTML = question4.optionC
document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
alert("correct!")
alert("All done!")
window.location.href = './index.html'
}
}
