//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on("load", function() {
    this.className = "tasty"
  })
}

function pressIt() {
  $("input").on("keydown", function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === 71) {
      alert("You pressed the 'G' key!")
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form will be submitted now")
  })
}

$(document).ready(function(){

// call functions here

});
