document.addEventListener('DOMContentLoaded', function(){

  let shuffledArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

  let valuesArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const board = document.getElementById("board");

  let tempValue = [];

  let colorArray = [];

  function shuffle(shuffledArray) {
    var j, x, i;
    for (i = shuffledArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = x;
    }
    return shuffledArray;
  }

  shuffle(shuffledArray);

  var timer = 60;
  document.getElementById("timer").innerHTML = timer;

  var interval = setInterval(function(){
    if (timer === 0) {
      clearInterval(interval)
      alert("Times Up! Game will reload");
      window.location.reload();
    }
    document.getElementById("timer").innerHTML = timer;
    timer--;
  },1000)



  function timer(secs,element) {
    var element = document.getElementById("element");
    countDown(50);
    element.innerHTML = secs + " seconds";
    if (secs < 1) {
      clearTimeout(timer);
      element.innerHTML = "Times Up!";
      setTimeout("location.reload(true);", timeoutPeriod);
    }
  }

  var Score = 0;
  document.getElementById("Score").innerHTML = Score;

  for (var i = 0; i < shuffledArray.length; i++) {
    const card = document.createElement("div");
    for(let j=0; j<valuesArray.length; j++) {
      card.setAttribute('id', valuesArray[i])
    }
    card.innerHTML = shuffledArray[i];
    card.setAttribute('class','card');
    board.appendChild(card);
    card.addEventListener("click", (e) => {
      let cardBool = false;
      tempValue.push(e.target);
      let colorCard = e.target.id;
      e.target.style.backgroundColor = "yellow";
      if (tempValue.length === 2) {
        if (tempValue[0].innerHTML === tempValue[1].innerHTML){
          tempValue.length = [];
          Score += 1;
          if (Score === 8) {
            alert("You Won! Game will Restart");
            window.location.reload();
          }
          document.getElementById("Score").innerHTML = Score;
        } else {
          for (var i = 0; i < tempValue.length; i++) {
            (function(i){

              setTimeout(function() {
                i.style.background = "black";
              }, 1000);

            })(tempValue[i]);
          };
          tempValue.length = [];
        }
      }
    });

  };

})
