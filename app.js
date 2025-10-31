//console.log("JavaScript Connected!");

var welcomeScreen = document.getElementById("welcomeScreen");
var typeScreen = document.getElementById("typeScreen");
var infoScreen = document.getElementById("infoScreen");
var quizScreen = document.getElementById("quizScreen");
var resultScreen = document.getElementById("resultScreen");



var btnYesStart = document.getElementById("btnYesStart");
var btnNoStart = document.getElementById("btnNoStart");
var btnHTML = document.getElementById("btnHTML");
var btnCSS = document.getElementById("btnCSS");
var btnJS = document.getElementById("btnJS");



var inp_name = document.getElementById("inp_name");
var inp_fname = document.getElementById("inp_fname");
var inp_roll = document.getElementById("inp_roll");
var inp_email = document.getElementById("inp_email");
var inp_inst = document.getElementById("inp_inst");
var btnStartQuiz = document.getElementById("btnStartQuiz");



var stuName = document.getElementById("stuName");
var quizTypeLabel = document.getElementById("quizTypeLabel");
var timerDisplay = document.getElementById("timerDisplay");
var qNumber = document.getElementById("qNumber");
var qText = document.getElementById("qText");
var optionsList = document.getElementById("optionsList");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var submitBtn = document.getElementById("submitBtn");




var resName = document.getElementById("resName");
var resEmail = document.getElementById("resEmail");
var resRoll = document.getElementById("resRoll");
var resInst = document.getElementById("resInst");
var resTotal = document.getElementById("resTotal");
var resCorrect = document.getElementById("resCorrect");
var resIncorrect = document.getElementById("resIncorrect");
var resPerc = document.getElementById("resPerc");
var resStatus = document.getElementById("resStatus");
var reviewList = document.getElementById("reviewList");
var topTimer = document.getElementById("topTimer");



var selectedType = "";
var questions = [];
var userAnswers = [];
var currentIndex = 0;
var totalQuestions = 20;
var countdownTimer = null;
var timeRemaining = 20 * 60;




var htmlQuestions =[
  {
    q:"HTML stands for?",
    options:["Hyper Text Markup Language","High Text Making Language","Hyper Tool Markup Language","Home Tool Markup"],
    a:0
  },
  {
    q:"Which tag is used for paragraph?", 
    options:["<p>","<para>","<pg>","<text>"], 
    a:0
  },
  {
    q:"Which tag is used for line break?", 
    options:["<br>","<lb>","<break>","<newline>"], 
    a:0
  },
  {
    q:"Which tag creates a link?", 
    options:["<a>","<link>","<url>","<href>"], 
    a:0
  },
  {
    q:"Which tag shows an image?", 
    options:["<img>","<pic>","<src>","<image>"], 
    a:0
  },
  {
    q:"Which tag is used for list items?", 
    options:["<li>","<ol>","<ul>","<item>"], 
    a:0
  },
  {
    q:"Which tag makes text bold?", 
    options:["<b>","<strong>","<bold>","<bb>"], 
    a:0
  },
  {
    q:"Which tag makes text italic?", 
    options:["<i>","<em>","<it>","<italic>"], 
    a:0
  },
  {
    q:"Which tag makes a table?", 
    options:["<table>","<tab>","<grid>","<sheet>"], 
    a:0
  },
  {
    q:"Which tag adds a heading?", 
    options:["<h1>","<head>","<heading>","<title>"], 
    a:0
  },
  {
    q:"Which tag shows a list?", 
    options:["<ul>","<list>","<ol>","<item>"], a:0
  },
  {
    q:"Which tag creates a form?", 
    options:["<form>","<input>","<field>","<set>"], a:0
  },
  {
    q:"Which tag adds a button?", 
    options:["<button>","<click>","<press>","<submit>"], a:0
  },
  {
    q:"Which tag defines HTML document start?", 
    options:["<html>","<head>","<doc>","<main>"], 
    a:0
  },
  {
    q:"Which tag adds title in page?", 
    options:["<title>","<head>","<caption>","<name>"], 
    a:0
  },
  {
    q:"Which tag adds comments?", 
    options:["<!-- comment -->","// comment","/* comment */","<comment>"], 
    a:0
  },
  {
    q:"Which tag adds a text box?", 
    options:["<input>","<text>","<box>","<field>"], 
    a:0
  },
  {
    q:"Which tag adds a dropdown?", 
    options:["<select>","<option>","<list>","<drop>"],
     a:0
  },
  {
    q:"Which tag adds video?", 
    options:["<video>","<media>","<movie>","<play>"], 
    a:0
  },
  {
    q:"Which tag adds audio?", 
    options:["<audio>","<sound>","<music>","<voice>"], 
    a:0
  }
];


var cssQuestions = [
  {
    q:"CSS stands for?", 
    options:["Cascading Style Sheets","Creative Style System","Colorful Style Sheet","Code Style Syntax"], 
    a:0

  },
  {
    q:"CSS is used for?", 
    options:["Styling web pages","Writing scripts","Making databases","Creating images"], 
    a:0

  },
  {
    q:"Which property changes text color?", 
    options:["color","font-color","text-color","fg"],
     a:0

  },
  {
    q:"Which property sets background color?", 
    options:["background-color","bgcolor","color-bg","back"], 
    a:0

  },
  {
    q:"Which property changes font size?",
     options:["font-size","text-size","size","font"], 
    a:0

  }
  ,
  {
    q:"Which selector targets id?", 
    options:["#id",".id","id","*id"], 
    a:0

  },
  {
    q:"Which selector targets class?", 
    options:[".class","#class","class","@class"], 
    a:0

  },
  {
    q:"Which property adds space inside element?", 
    options:["padding","margin","gap","border"], 
    a:0

  },
  {

    q:"Which property adds space outside element?", 
    options:["margin","padding","space","border"], 
    a:0
  },
  {
    q:"Which property sets border color?",
     options:["border-color","color","outline","edge"], 
     a:0
    },
  {
    q:"Which property makes corners round?",
     options:["border-radius","corner","round","radius"], 
     a:0
    },
  {
    q:"Which property centers text?", 
    options:["text-align","align","center","text-center"], 
    a:0
  },
  {
    q:"Which property makes text bold?", 
    options:["font-weight","bold","text-bold","strong"], 
    a:0
  },
  {
    q:"Which property sets height?",
     options:["height","h","size","top"], 
     a:0
    },
  {
    q:"Which property sets width?",
     options:["width","w","size","side"], 
     a:0
    },
  {
    q:"Which property adds shadow to box?", 
    options:["box-shadow","shadow","border-shadow","outline"],
     a:0
  },
  {
    q:"Which property adds shadow to text?",
     options:["text-shadow","font-shadow","shadow","text-glow"], 
    a:0
  },
  {
    q:"Which property sets background image?", 
    options:["background-image","image","bg","img"],
     a:0
  },
  {
    q:"Which property changes cursor?", 
    options:["cursor","mouse","pointer","style"],
     a:0
  },
  {
    q:"Which property sets display type?", 
    options:["display","type","show","layout"],
     a:0
  }
];



var jsQuestions = [
  {
    
    q:"JavaScript is used for?",
     options:["Making web pages interactive","Styling websites","Writing SQL","Creating PDFs"], 
     a:0
    },
  {
    
    q:"Which keyword declares a variable?", 
    options:["var","let","const","int"], 
    a:0
  },
  {
    
    q:"Which shows a message box?",
     options:["alert()","show()","print()","message()"],
     a:0
  },
  {
    
    q:"Which symbol is used for comments?", 
    options:["//","**","!!","@@"] ,
     a:0
     },
  {
    
    q:"Which operator adds two numbers?",
    options:["+", "-", "*", "/"],
    a:0
  },
  {
    
    q:"Which operator compares two values?", 
    options:["==","=","+=","<>"], a:0},
  {
    
    q:"Which function converts string to number?",
     options:["parseInt","toString","Number.to","stringToInt"], a:0},
  {
    
    q:"Which event runs when page loads?", 
    options:["load","ready","start","init"], 
    a:0
  },
  {
    q:"Which adds an element to end of array?",
     options:["push","pop","shift","add"], 
    a:0
  },
 
  {
    q:"Which removes last element of array?",
     options:["pop","push","remove","delete"], 
    a:0
  },
  {
    q:"Which checks if value is NaN?",
     options:["isNaN","isNumber","isNull","isEmpty"], 
    a:0
  },
  {
    q:"Which function prints in console?", 
    options:["console.log","print","echo","document.write"], 
    a:0
  },
  {
    q:"Which creates an object?", 
    options:["{}","[]","()","<>"], 
    a:0

  },
  {
    q:"Which repeats code?", options:["for","if","break","stop"], 
    a:0

  },
  {
    q:"Which runs code after time?", 
    options:["setTimeout","setInterval","delay","after"], 
    a:0
  },
  {
    q:"Which gets data from localStorage?", 
    options:["localStorage.getItem","get","storage.get","read"], 
    a:0
  },
  {
    q:"Which converts number to string?", 
    options:["toString","parseInt","Stringify","string"], 
    a:0
  },
  {
    q:"Which parses JSON string?", 
    options:["JSON.parse","JSON.stringify","parseJSON","toJSON"], 
    a:0
  },
  {
    q:"Which adds event listener?", 
    options:["addEventListener","listen","onClick","attach"], 
    a:0
  },
  {
    q:"Which keyword defines a function?", 
    options:["function","def","fun","create"],
     a:0
  }
];




btnNoStart.onclick = function(){
  alert("OK — Come back when you want to take the quiz.");
};
btnYesStart.onclick = function(){
  welcomeScreen.style.display = "none";
  typeScreen.style.display = "block";
};

btnHTML.onclick = function(){ chooseType("HTML"); 

};
btnCSS.onclick = function(){ chooseType("CSS"); 

};
btnJS.onclick = function(){ chooseType("JavaScript"); 

};

function chooseType(typeName){
  selectedType = typeName;
  typeScreen.style.display = "none";
  infoScreen.style.display = "block";
  quizTypeLabel.innerText = typeName;

  if (typeName === "HTML") {
    questions = htmlQuestions.slice(0, totalQuestions);
  } else if (typeName === "CSS") {
    questions = cssQuestions.slice(0, totalQuestions);
  } else {
    questions = jsQuestions.slice(0, totalQuestions);
  }
}

btnStartQuiz.onclick = function(){
  if (!inp_name.value || !inp_email.value || !inp_roll.value || !inp_inst.value) {
    alert("Please fill all fields");
    return;
  }
  stuName.innerText = inp_name.value;
  infoScreen.style.display = "none";
  startQuiz();
};

function startQuiz() {
  userAnswers = [];
  currentIndex = 0;
  timeRemaining = 20 * 60;
  quizScreen.style.display = "block";
  showQuestion(currentIndex);
  startCountdown();
}

function showQuestion(index) {
  qNumber.innerText = "Question " + (index + 1) + " / " + totalQuestions;
  qText.innerText = questions[index].q;
  optionsList.innerHTML = "";

  for (var i = 0; i < questions[index].options.length; i++) {
    var opt = document.createElement("label");
    opt.className = "option-label";
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = i;
    radio.className = "option-input";

    if (userAnswers[index] !== undefined && parseInt(userAnswers[index]) === i) {
      radio.checked = true;
    }

    var txt = document.createTextNode(questions[index].options[i]);
    opt.appendChild(radio);
    opt.appendChild(txt);
    optionsList.appendChild(opt);

    radio.onclick = (function (idx) {
      return function () {
        var sel = document.querySelector('input[name="option"]:checked');
        if (sel) {
          userAnswers[index] = sel.value;
          nextBtn.disabled = false;
          if (index === totalQuestions - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
          } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
          }
        }
      };
    })(i);
  }

  prevBtn.disabled = index === 0;
  if (userAnswers[index] !== undefined) {
    nextBtn.disabled = false;
    if (index === totalQuestions - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  } else {
    nextBtn.disabled = true;
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

prevBtn.onclick = function () {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    showQuestion(currentIndex);
  }
};

nextBtn.onclick = function () {
  var sel = document.querySelector('input[name="option"]:checked');
  if (!sel) {
    alert("Please select an option first");
    return;
  }
  userAnswers[currentIndex] = sel.value;
  if (currentIndex < totalQuestions - 1) {
    currentIndex = currentIndex + 1;
    showQuestion(currentIndex);
  } else {
    submitQuiz();
  }
};

submitBtn.onclick = function () {
  if (confirm("Submit quiz now?")) {
    submitQuiz();
  }
};

function startCountdown() {
  updateTimerDisplay();
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(function () {
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      alert("Time is over. The quiz will be submitted automatically.");
      submitQuiz();
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  var mm = Math.floor(timeRemaining / 60);
  var ss = timeRemaining % 60;
  timerDisplay.innerText = (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
  topTimer.innerText = timerDisplay.innerText;
}

function submitQuiz() {
  if (countdownTimer) clearInterval(countdownTimer);
  var correct = 0, incorrect = 0;
  for (var i = 0; i < totalQuestions; i++) {
    var userAns = userAnswers[i];
    if (userAns === undefined) incorrect++;
    else if (parseInt(userAns) === questions[i].a) correct++;
    else incorrect++;
  }

  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  resName.innerText = inp_name.value;
  resEmail.innerText = inp_email.value;
  resRoll.innerText = inp_roll.value;
  resInst.innerText = inp_inst.value;
  resTotal.innerText = totalQuestions;
  resCorrect.innerText = correct;
  resIncorrect.innerText = incorrect;
  var percent = Math.round((correct / totalQuestions) * 100);
  resPerc.innerText = percent;
  resStatus.innerText = percent >= 70 ? "Excellent — You Passed!" : "Sorry — You Failed.";
  resStatus.style.color = percent >= 70 ? "#4caf50" : "#f44336";

  reviewList.innerHTML = "";
  for (var j = 0; j < totalQuestions; j++) {
    var item = document.createElement("div");
    item.className = "review-item";
    var qh = document.createElement("div");
    qh.innerText = (j + 1) + ". " + questions[j].q;
    qh.style.fontWeight = "600";
    item.appendChild(qh);
    for (var k = 0; k < questions[j].options.length; k++) {
      var optdiv = document.createElement("div");
      optdiv.style.padding = "6px";
      optdiv.style.borderRadius = "6px";
      optdiv.style.marginBottom = "4px";
      if (k === questions[j].a) {
        optdiv.classList.add("result-correct");
      } else if (userAnswers[j] !== undefined && parseInt(userAnswers[j]) === k && k !== questions[j].a) {
        optdiv.classList.add("result-wrong");
      }
      optdiv.innerText = questions[j].options[k];
      item.appendChild(optdiv);
    }
    reviewList.appendChild(item);
  }
}
