/*function getGeolocationAllow(data) {
   let location = data.coords; 
}
function getGeolocationFail() {
   const fallbackLocation = { latitude: 48.8575, longitude: 2.2982 }
}
navigator.geolocation.getCurrentPosition(getGeolocationAllow, getGeolocationFail)
console.log("hello friend")*/
let answer = ""
let submit = ""
let nextBttn = document.getElementById('nextBttn');
nextBttn.addEventListener('click', function (){
   fetch('http://jservice.io/api/random')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      response.json().then(function(data) {
        answer = data[0].answer;
        let category = data[0].category.title;
        let question = data[0].question;
        document.getElementById("category").innerHTML = category;
        document.getElementById("question").innerHTML = question;
        //document.getElementById("answer").innerHTML = answer;
        revealAnswerButton("click")
        submitAnswerButton("click")
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

});
function revealAnswerButton(){
  document.getElementById("answer").style.display = "block";
  revealAnswer.addEventListener('click', function(){
  let revealAnswer =document.getElementById("answer").innerHTML = answer;
  document.getElementById("score").innerHTML = score;
  score.innerHTML = '<div id="score"><b> STREAK:0 </b><span class="score-count"></span></div>';
  document.getElementById("nextBttn").innerHTML = '<div id="nextBttn">Reset Game</div>'
  nextBttn.addEventListener('click', function(){ 
    location.reload() 
    // can i some how reset the game to the initial browser screen here?
  })
})
}
function submitAnswerButton(){
  document.getElementById("submit").innerHTML = submit;
  let userAnswer = document.getElementsByName("userAnswer").value
  document.getElementById('submit').addEventListener('click', function(){
    if (userAnswer.value.toString().toLowerCase() === data[0].answer.value) {
      document.createElementById("div").innerHTML = "Correct!"
   } else{
     document.createElementById("div").innerHTML = "Incorrect!"
     } 
  document.getElementById("score").innerHTML = score;
  score.innerHTML = '<div id="score"><b> STREAK:0 </b><span class="score-count"></span></div>';
 //userAnswer to answer=data[].answer boolean maybe? or player-answer === answer?
 //assign +1 to score for correct submitAnswerButton clicks, else reset score to 0 on userSubmit clicks 
  })
}

 