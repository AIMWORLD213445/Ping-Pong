function count(inputNumber) {
  var counter = 1;
  var numHolder = []
  for (i=0; i<inputNumber; i++) {
    numHolder [i] = counter + " "
    counter++;
  };
  return numHolder
};







$(document).ready(function() {
    $("form#numberInput").submit(function(event){
      event.preventDefault();
      var inputNumber = parseInt($("input#number").val());
      $("#displayArea").append(count(inputNumber));
    });
});
