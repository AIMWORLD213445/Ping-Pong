//back end

function count(inputNumber) {
  var numHolder = [];
  for (i = 1; i < inputNumber+1; i++) {
    numHolder.push(i);
  };
  for (i = 0; i < inputNumber; i++) {
    if ((numHolder[i] % 15 === 0)){
        numHolder[i] = "ping-pong";
    } else if((numHolder[i] % 5 === 0)){
        numHolder[i] = "pong";
    } else if((numHolder[i] % 3 === 0)){
      numHolder[i] ="ping";
    }
   };
  return numHolder;
};

//front end

$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    $("#displayArea").append(count(inputNumber));
  });
});

$(function(){
  $("#main").click(function(){
    $(this).hide();
  });
});

$("#resetBtn").click(function() {
  $("#main").show();
});
