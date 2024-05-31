const fBtn = document.querySelector(".first-btn");
const fBtnCont = document.querySelector(".btn");
const page1 = document.querySelector(".page1");

fBtn.addEventListener("click", () => {
  fBtnCont.classList.add("clicked");

  page1.classList.add("hidden");
  Page2Begin.classList.remove("hidden");
  // nextQuestion.classList.remove("hidden")
});

// ===Page 2===
const sound = document.querySelector(".sound");

const option = document.querySelector(".option");
const opt = document.querySelector(".opt");
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const opt4 = document.querySelector(".opt4");
const scoreCard = document.querySelector(".scorecard");
const Timer = document.querySelector(".timer");
const Page2Begin = document.querySelector(".Page2-begin");
const submit = document.querySelector(".submit");
const correctAns = document.querySelector(".correct-ans");
const wrongAns = document.querySelector(".wrong-ans");
const nextBtn = document.querySelector(" .nextbtn");
const pageLast = document.querySelector(" .pagelast");

const answer = opt4;

//sound//
sound.addEventListener("click", () => {
  console.log("sound-clicked");
  sound.classList.toggle("unmute");
});
// const  ques=["q1,q2,q3"]
//timer//
let counter = 30;
let timeout;

function myTimer() {
  if (counter == -1) {
    clearTimeout(timeout);
  } else if (counter > 9) {
    Timer.innerHTML = `00:${counter}`;
    counter--;
    timeout = setTimeout(myTimer, 1000);
  } else {
    Timer.innerHTML = `00:0${counter}`;
    counter--;
    timeout = setTimeout(myTimer, 1000);
  }
  colorChange();
}

myTimer();

function colorChange() {
  if (counter < 5) {
    Page2Begin.classList.add("lesser");
  } else if (counter < 15) {
    Page2Begin.classList.add("less");
  }
}
colorChange();
submit.addEventListener("click", () => {
  myStopFunction();
});

function myStopFunction() {
  clearTimeout(timeout);
}
//score//
let i = 0;
function scoreChange() {
  i++;
  scoreCard.innerHTML = `${i}/25`;
}
//options//

function showRightAns() {
  answer.style.border = " 3px solid green";
  answer.classList.add("clicked-rt");
}

opt1.addEventListener("click", (e) => {
  console.log("opt1 click");

  option.classList.toggle("selected-ans1");

  submit.addEventListener("click", () => {
    if (e.target == answer) {
      opt1.classList.add("clicked-rt");
      opt1.style.border = " 3px solid green";
      scoreChange();
    } else {
      opt1.classList.add("clicked-wrg");
      opt1.style.border = " 3px solid red";
      showRightAns();
    }
  });
});

opt2.addEventListener("click", (e) => {
  console.log("opt2 click");
  option.classList.toggle("selected-ans2");

  submit.addEventListener("click", () => {
    if (e.target == answer) {
      opt2.classList.add("clicked-rt");
      opt2.style.border = " 3px solid green";
      scoreChange();
    } else {
      opt2.classList.add("clicked-wrg");
      opt2.style.border = " 3px solid red";
      showRightAns();
    }
  });
});

opt3.addEventListener("click", (e) => {
  console.log("opt3 click", e.target);
  option.classList.toggle("selected-ans3");

  submit.addEventListener("click", () => {
    if (e.target == answer) {
      opt3.classList.add("clicked-rt");
      opt3.style.border = " 3px solid green";
      scoreChange();
    } else {
      opt3.classList.add("clicked-wrg");
      opt3.style.border = " 3px solid red";
      showRightAns();
    }
  });
});

opt4.addEventListener("click", (e) => {
  console.log("opt4 click", e.target);
  option.classList.toggle("selected-ans4");

  submit.addEventListener("click", () => {
    if (e.target == answer) {
      opt4.classList.add("clicked-rt");
      opt4.style.border = " 3px solid green";
      scoreChange();
    } else {
      opt4.classList.add("clicked-wrg");
      opt4.style.border = " 3px solid red";
      showRightAns();
    }
  });
});
//next
nextBtn.addEventListener("click", (e) => {
  Page2Begin.classList.add("hidden");
  pageLast.classList.remove("hidden");
  // nextQuestion.classList.remove("hidden")
});

//last pg//
const strtAgn = document.querySelector(".strt-agn");
const pagelast = document.querySelector(".pagelast");
// const progressBar = document.querySelector(".progress-bar");
// const progress = document.querySelector(".progress");
strtAgn.addEventListener("click", () => {
  fBtnCont.classList.add("clicked");

  pagelast.classList.add("hidden");
  Page2Begin.classList.remove("hidden");
  // nextQuestion.classList.remove("hidden")
});
// let numQues = 5;
// let w = 4 * numQues;
// progressBar.style.width = `${w}%`;
