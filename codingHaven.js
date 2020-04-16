var count = 0
document.getElementById("postQuestion").onclick =  function postQuestion(formDetails) {
    var question = ++count + '. ' + document.getElementById("question").value + '<br>'
    var button = '<input type="button" value="Answer" class="answerButton" id="answerButton" onclick="loadAnswerTextArea()">'
    document.getElementById("postedQuestions").innerHTML += question+button
}

function loadAnswerTextArea() {
    document.getElementById("answerButton").remove()
    var answerDiv = document.createElement('div')
    answerDiv.setAttribute("id", "answerDiv")
    answerDiv.innerHTML = '<textarea name="answerText" id="answerText" rows="20" cols="70" required="required" placeholder="Please type your answer here"></textarea>'
    var postAnswerButton = document.createElement('div')
    postAnswerButton.innerHTML = '<input id="postAnswer" type="submit" value="Post Answer" onclick="postAnswer()">'
    document.getElementById("postedQuestions").appendChild(answerDiv)
    document.getElementById("answerText").after(postAnswerButton)  
}

function postAnswer() {
    alert("Answer posted successfully")
    var answer = 'A. ' + document.getElementById("answerText").value + '<br>'
    //Hide the answer div containg textarea and post question button
    document.getElementById("answerDiv").remove()
    document.getElementById("postedQuestions").innerHTML += answer
}