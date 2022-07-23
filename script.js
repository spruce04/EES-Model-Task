//dom selectors
const slider = document.getElementById("slideMe");
const content = document.getElementById("content");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const yearDisplay = document.getElementById("yearText");

//determine text based on slider value
function textDecide() {
  yearDisplay.innerHTML = year(slider.value);
  switch (slider.value) {
    case ('1'):
      content.innerHTML = `Images go here.`;
      break;
    
}}; 

//function to move backwards
function movePrevious() {
  if (slider.value == 1) {
    return; 
  }
  else {
    slider.value = slider.value - 1;
    textDecide();
  }
};

//function to move forwards
function moveNext() {
  if (slider.value == MaxValue) {
    return;
  }
  else {
    slider.value = parseInt(slider.value) + 1;
    textDecide();
  }
};

//determine the year based on slider range
function year(param){
  switch (param) {
    case ('1'):
      return 'Year';
}};

//change text when slider is touched - computer
slider.addEventListener("click", function() {
  textDecide();
});
//change text when slider is touched - mobile
slider.addEventListener("touchend", function() {
  textDecide()
}); 

//move to previous when previous button is pressed
previous.addEventListener("click", function() {
  movePrevious();
});
//move to next when next button is clicked
next.addEventListener("click", function() {
  moveNext();
})

//set text to beginning when program initially loads
textDecide();