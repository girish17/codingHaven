var count = 0
document.getElementById("postQuestion").onclick =  function postQuestion(formDetails) {
    var question = ++count + '. ' + document.getElementById("question").value + '<br>'
    var button = '<input type="button" value="Answer" class="answerButton" id="answerButton" onclick="loadAnswerTextArea()">'
    document.getElementById("postedQuestions").innerHTML += question+button
}

function loadAnswerTextArea() {
    document.getElementById("answerButton").hidden = true
    var textArea = document.createElement('div')
    textArea.innerHTML = '<textarea name="answerText" id="answerText" rows="20" cols="70" required="required" placeholder="Please type your answer here"></textarea>'
    var postAnswerButton = document.createElement('div')
    postAnswerButton.innerHTML = '<input id="postAnswer" type="submit" value="Post Answer" onclick="postAnswer()">'
    document.getElementById("answerButton").after(textArea)
    document.getElementById("answerText").after(postAnswerButton)
}

function postAnswer() {
    alert("Answer posted successfully")
}