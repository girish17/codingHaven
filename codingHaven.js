/* @author: girish, elijah*/
var count = 0
document.getElementById("postQuestion").onclick =  function postQuestion() {
    var question = '<span class="questionText">' + ++count + '. ' + document.getElementById("question").value + '</span><br>'
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
    var answer = '<span id="answerTextElement"> A. ' + document.getElementById("answerText").value + '</span><br>'
    //Hide the answer div containg textarea and post question button
    document.getElementById("answerDiv").remove()
    document.getElementById("postedQuestions").innerHTML += answer
}

document.getElementById("searchText").onkeydown = () => {
    var searchString = document.getElementById("searchText").value
    var searchDiv = document.createElement('div')
    searchDiv.setAttribute("id", "searchDiv")
    var questionTexts = document.getElementsByClassName("questionText")
    for(var i=0; i<questionTexts.length; i++)
    {
        if((searchString.length  > 0) && (questionTexts[i].innerHTML.search(searchString) > -1)) {
            searchDiv.innerHTML = questionTexts[i].innerHTML
            document.getElementById("searchText").after(searchDiv)
        }
        else {
            if(document.getElementById("searchDiv") != null) {
                document.getElementById("searchDiv").remove()
            }
        }
    }

}