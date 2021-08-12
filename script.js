//Room descriptions page
function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("mySearch");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
//for price range
//TODO: NOT SURE WHY THIS HAS TO BE PUT IN THE HTML FILE, STACKOVERFLOW SAID ITS CUZ IT HAS TO BE LOADED FIRST BEFORE ITS USED?
//HOW TO OVERCOME THAT WHILE PLACING THIS IN EXTERNAL FILE?

//Individual Room Descriptions Page


//Bookings Page
function openTab(evt, tabName){
    var i, tab, step;
    tab = document.getElementsByClassName("tab")
    for (i=0; i < tab.length; i++){
        tab[i].style.display = "none"
    }
    step = document.getElementsByClassName("step")
    for (i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace(" active","")
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}  
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text1");
  if (checkBox.checked == true){
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}
//validation
function validation() {
  const form = [document.getElementById("checkOut"),document.getElementById("phoneNumber"),document.getElementById("guestsAdult"),document.getElementById("noSmoking"),document.getElementById("cardExp")]

  for (i=0; i< form.length;i++) {
    if (!form[i].checkValidity()) {
      // document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
    document.getElementsByClassName("step")[i].style.background = "url('allimages/check.svg')";
    document.getElementsByClassName("step")[i].style.backgroundColor = "#0A1931";
    document.getElementsByClassName("step")[i].innerHTML = "'"
    } 
  }
}

function next() { //TODO: i think for both only see the first one then the button  works alr
  const form = [document.getElementById("checkIn"),document.getElementById("checkOut")]

for (i=0; i< form.length;i++) {
  if (!form[i].checkValidity()) {
  } else {
    openTab(event,'contactForm');
  } 
}
}

function next1() { //TODO: only name works
  const form = [document.getElementById("name"),document.getElementById("emailAddress"),document.getElementById("phoneNumber")]

for (i=0; i< form.length;i++) {
  if (!form[i].checkValidity()) {
  } else {
    openTab(event,'guests')
  } 
}
}


// const form = [document.getElementById("checkIn"),document.getElementById("checkOut")]

// for (i=0; i< form.length;i++) {
//   if (!form[i].checkValidity()) {
//   } else {
//     openTab(evt,'contactForm');
//     //smth forcing it to go to a new page
//   } 
// }