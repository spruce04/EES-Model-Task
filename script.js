//dom selectors
const slider = document.getElementById("slideMe");
const imageDisplay = document.getElementById("content");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const yearDisplay = document.getElementById("yearText");
const textDisplay = document.getElementById("description");
const auto = document.getElementById("autoplay");


//determine the time frame based on slider range
function year(param) {
  switch (param) {
    case ('1'):
      return '60 million BCE';
    case ('2'):
      return '60 million BCE \r';
    case ('3'):
      return '60 million BCE \r \r'; // \r is used to differentiate between the years for content purposes.
    case ('4'):
      return '60-50 million BCE';
    case ('5'):
      return '50 million BCE';
    case ('6'):
      return '40 million BCE';
    case ('7'):
      return '40 million BCE \r';
    case ('8'):
      return 'Present Day';
}};

//determine image based on slider value
function imageDecide() {
  yearDisplay.innerHTML = year(slider.value);
  switch (slider.value) {
    case ('1'):
      imageDisplay.innerHTML = '<img src="./Images/Scene One.PNG" height="auto" width="95%">';
      break;
    case ('2'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Two.PNG" height="auto" width="110%">';
      break;
    case ('3'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Three.PNG" height="auto" width="110%">';
      break;
    case ('4'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Four.PNG" height="auto" width="110%">';
      break;
    case ('5'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Five.PNG" height="auto" width="110%">';
      break;
    case ('6'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Six and Seven.PNG" height="auto" width="110%">';
      break;
    case ('7'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Six and Seven.PNG" height="auto" width="110%">';
      break;
    case ('8'):
      imageDisplay.innerHTML = '<img src="./Images/Scene Final.PNG" height="auto" width="110%">';
}}; 

//determine text based on slider value
function textDecide() {
  switch (slider.value) {
    case ('1'):
      textDisplay.innerHTML = 'India, resting upon the northwards moving Indo-Australian plate, moved on a northward trajectory at around 9 - 16cm per year.';
      break;
    case ('2'):
      textDisplay.innerHTML = 'The heavier continental eurasian plate subducted the oceanic crust which the Indo-Australian plate rested upon. This gradually pushed sediments from the ocean floor onto the Eurasian Plate, in a process known as accretionary wedging.';
      break;
    case ('3'):
      textDisplay.innerHTML = 'In addition to accretionary wedging, explosive volcanic activity would have occurred on the Eurasian Plate, triggered by the partial melting of oceanic crust.';
      break;
    case ('4'):
      textDisplay.innerHTML = 'Over time, as the continental Indian crust grew closer to the continental Eurasian crust, the accretionary wedge would have increased in size.';
      break;
    case ('5'):
      textDisplay.innerHTML = 'The continental Indian crust collided with Asia for the first time, forming a convergent boundary. This slowed the speed of the plates to around 4-6 cm per year.';
      break;
    case ('6'):
      textDisplay.innerHTML = 'The eurasian crust buckled over the indian crust, but was unable to subduct it. This caused the continental crust to thicken and rise. This process continued to slowly push up the crust, forming the Tibetan plateau.';
      break;
    case ('7'):
      textDisplay.innerHTML = 'The thickening of the crust also ended volcanic activity in the himalayan region, as magma would cool before reaching the earth’s surface.';
      break;
    case ('8'):
      textDisplay.innerHTML = 'The Himalayas are the largest mountain range on earth, and continue to rise at over 1cm each year. The crust under the Himalayas is 78KM deep, almost twice as deep as most other crust on earth. Due to the tectonic activity  which occurs in the region, the Himalayas often experience earthquakes.';
      break;
}};

//determine image and text at the same time
function contentDecide() {
  imageDecide()
  textDecide()
};

//function to move backwards
function movePrevious() {
  if (slider.value == 1) {
    return; 
  }
  else {
    slider.value = slider.value - 1;
    contentDecide();
  }
};

//function to move forwards
function moveNext() {
  if (slider.value == 8) {
    return;
  }
  else {
    slider.value = parseInt(slider.value) + 1;
    contentDecide();
  }
};

//function for the autoplay
function autoPlay(a) {
  setTimeout(function() {
  slider.value ++;
  contentDecide();
  }, 10000 * a);
}

function callAuto() {
  for (let a = slider.value; a < 8; a++) {
    autoPlay(a);
  }
}

//change content when slider is touched - computer
slider.addEventListener("click", function() {
  contentDecide();
});
//change content when slider is touched - mobile
slider.addEventListener("touchend", function() {
  contentDecide()
}); 

//move to previous when previous button is pressed
previous.addEventListener("click", function() {
  movePrevious();
});
//move to next when next button is clicked
next.addEventListener("click", function() {
  moveNext();
})

//call autoplay function when autoplay button is clicked
auto.addEventListener("click", function() {
  callAuto();
})

//set content to beginning when program initially loads
contentDecide();