/* @author: girish, elijah*/
var count = 0
function postAnswer() {
    var answer = $('<span id="answerTextElement"> A. ' + $("#answerText").val() + '</span><br>') 
    //Hide the answer div containg textarea and post question button
    $("#answerDiv").remove()
    $("#postedQuestions").append(answer)
    $("#postQuestion").show()
}

function cancel() {
    $("#cancelBtn").remove()
    $("#answerDiv").remove()
    var button = $('input')
    button.type = "button"
    button.value = "Answer"
    button.id = "answerButton"
    button.onclick = loadAnswerTextArea
    $("#question" + count).after(button)

}
function loadAnswerTextArea() {
    $("#answerButton").remove()
    var answerDiv =$('div')
    answerDiv.attr("id", "answerDiv")
    var textAreaEle = '<textarea name="answerText" id="answerText" rows="20" cols="70" required="required" placeholder="Please type your answer here"></textarea>'
    answerDiv.html(textAreaEle)
    var postAnswerButton = $('div')
    var inputBtn = '<input id="postAnswer" type="submit" value="Post Answer" onclick="postAnswer()">'
    inputBtn += '<input id="cancelBtn" type="button" value="Cancel" onclick="cancel()">'
    postAnswerButton.html(inputBtn)
    $("#postedQuestions").append(answerDiv)
    $("#answerText").after(postAnswerButton)
}
$(document).ready(function(){
    $("#postQuestion").click(function() {
            var question = $("#question").val()
            if (question.length != 0) {
                $("#postQuestion").hide()
                var question = '<span class="questionText" id="question' + ++count + '">' + count + '. ' + $("#question").val() + '</span><br>'
                var button = '<input type="button" value="Answer" class="answerButton" id="answerButton" onclick="loadAnswerTextArea()">'
                $("#postedQuestions").append(question + button) 
            }
            else {
                alert("Please type a question and click on post")
            }
    })
    $("#searchText").change(function() {
            var searchString = $("#searchText").val()
            var searchDiv = document.createElement('div')
            searchDiv.setAttribute("id", "searchDiv")
            var questionTexts = $(".questionText")
            for (var i = 0; i < questionTexts.length; i++) {
                if ((searchString.length > 0) && (questionTexts[i].innerHTML.search(searchString) > -1)) {
                    searchDiv.innerHTML += questionTexts[i].innerHTML + '<br>'
                }
            }
            if ($("#searchDiv") != null) {
                $("#searchDiv").remove()
            }
            $("#searchText").after(searchDiv)
        })

    $("#clearBtn").click(function(){
            $("#question").val("")
            $("#postQuestion").show()
    })

    $("#signUpBtn").click(function(){
            $("#username").hide()
            $("#password").hide()
    })
    
})
