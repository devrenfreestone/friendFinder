console.log("friends.js linked");

const questionHtml = $("#questions")

//holds finalized questions to push into survey.html
var qArray = [];
var fullq =[];

//holds questions themselves
var questions = ["Intelligence is important to me","I enjoy spending time with other people",
	"Humor is important to me","Honesty is important to me","I enjoy cooking","I workout regularly",
	"I enjoy sugary foods","Bacon is life","Binge watching Netflix is a valid passtime",
	"I will be your date for ice cream whenever you want"]

//populates qArray

var newQuestion = () =>{
	for (let i = questions.length - 1; i >= 0; i--) {
		qArray.push({text: questions[i],response: [1,2,3,4,5]})
	}
	for(let j = 0; j<qArray.length; j++) {
		let qNumber = j + 1;
		
		fullq.push("Question " + qNumber + ": " + qArray[j].text + "<br>" + "<form><input type ='radio' name='option' value='qArray[j].response'</form>" + "<br>");

	}
		$("#questions").html(fullq);
};

newQuestion();


