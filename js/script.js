//back end

function count(inputNumber) {
  var counter = 1;
  var numHolder = []
  for (i = 0; i < inputNumber; i++) {
    numHolder [i] = counter + " "
    counter++;
  };
    for (i = 0; i < inputNumber; i++) {
  if ((numHolder[i] % 15 === 0)=== true){
    numHolder[i] = "ping-pong" + " "
  } else if((numHolder[i] % 5 === 0)=== true){
    numHolder[i] = "pong" + " "
  } else if((numHolder[i] % 3 === 0)=== true){
    numHolder[i] ="ping" + " "
  }
};
  var resultString = numHolder.toString()
  return resultString.split(",")
};

//front end

$(document).ready(function() {
    $("form#numberInput").submit(function(event){
      event.preventDefault();
      var inputNumber = parseInt($("input#number").val());
      $("#displayArea").append(count(inputNumber));
    });
});
