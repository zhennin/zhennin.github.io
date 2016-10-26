function check() {


var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if (question1 == "cheetah") {
correct++;
}

if (question2 == "blood") {
correct++;
}

if (question3 == "miu") {
correct++;
}

var messages = ["Good job!!", "That's alright", "You really need to focus more"];
var pictures = ["img/win.jpeg", "img/meh.jpeg", "img/fail.jpg"];

var range;


if (correct < 1) {
range = 2;
}

if (correct > 0 && correct < 3) {
	range = 1;
}

if (correct > 2) {
	range = 0;

}


document.getElementById("message").innerHTML = messages[range];
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = " you got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];


}