//adding readlinesync
var readlineSync = require("readline-sync");
//adding or importing CHALK for that Style
const chalk = require('chalk');
//Defining my styles
const h1 = chalk.bgBlackBright
const h2 = chalk.magentaBright
const Q = chalk.bold.blueBright
const RA = chalk.bold.greenBright
const WA = chalk.bold.redBright
const R = chalk.yellowBright
const C = chalk.cyanBright
//
console.log("-------::--- The Office Trivia 👨‍💼🏢 ---::-------\n");
//user name input
var userName = readlineSync.question(R('Enter your name -  '));
console.log();
//Welcome and Rules
console.log(h1('Hi ' + userName + '!'));
console.log();
console.log(R("Are you ready?!"));
console.log(WA("\nLets go through some rules first."));
console.log("\n1. There are 3 levels\n" + h2("   i) Novice 😶 - 5 Questions\n Answer 4 question right to get in level Rookie.\n  ii) Rookie 😅 - 4 Questions\n Answer 3 question right to get in level True Fan\n iii) True Fan 😎  - 3 Questions\n Answer 3 question right to be the WINNERR\n and and you get a Dundie 🏆 🤩 "));
console.log("2. Answer the questions by pressing the number key correspoding to your answer.") 
console.log(chalk.white("------------------------------------"));
console.log(Q("\nLet's start!"));



var QBL1 = [
  {
    q: "1. What is the name of the paper company they work at?  ",
    a: ["Dander Muffin", "Dunder Mifflin", "Duder Miffin", "Dudler Miflinn"],
    key: 1
  },

  {
    q: "2. What's the name of their city?  ",
    a:["Stamford", "Philadelphia", "Scranton", "Utica"],
    key: 2
  },

  {
    q: "3. Who does Jim end up with?  "  ,
    a: ["Karen", "Katy", "Pam", "Angela"],
    key: 2
  },

  {
    q: "4. What kind of farm does Dwight own?  ",
    a: ["Beet Farm", "Wheat Farm", "Carrot Farm", "Cabbage Farm"],
    key: 0
  },

  {
    q: "5. Which character does Michael hate?  ",
    a: ["Oscar", "Toby", "kevin", "Ryan"],
    key: 1
  },
]
var QBL2 = [
  {
    q: "1. When Dwight is explaining his perfect crime, what's the name of the girl?  ",
    a: ["Tiffany", "Tania","Tatiana","Amy"],
    key: 0
  },

  {
    q: "2. What item of Andy's did Jim put in jello?  ",
    a: ["Wallet", "Calculator", "Stapler", "Scissors"],
    key: 1
  },

  {
    q: "3. What was the name of the show that Michael was on as a kid?",
    a: ["Funtown", "Fun Fun", "That Fun Show", "Fundle Bundle"],
    key: 3
  },

  {
    q: "4. What's Pam's favorite flavor of yogurt?",
    a: ["Mixed Berry", "Strawberry", "Mixed Fruits", "Vanilla"],
    key: 0
  }
]
var QBL3 = [
  {
    q: "1. What are the themes of each of the three rooms at Schrute Farm, also known as 'The Beets Motel'?  ",
    a: ["America, Irrigation, Nighttime", "Beets, Bears, the Schrute Family", "America, Beets, Schrute Family", "America, Beets Farm, Twilight"],
    key: 0
  },

  {
    q: "2. What hobby does Stanley take up after retiring?",
    a: ["Knitting", "Wood Carving", "Baking", "None"],
    key: 1
  },

  {
    q: "3. Which of these items was NOT in the teapot that Jim gave to Pam for Secret Santa?",
    a: ["Hot Sauce Packets", "His Yearbook Photo", "Movie Ticket Stub", "Mini Golf Pencil"],
    key: 2
  }
]

var QB = [QBL1, QBL2, QBL3]
//Global Score Variable
var score = 0
var scoreDB = [
  {name: "Dwight", score: 12},
  {name: "BEETS", score: 11},
  {name: "Andy", score: 9}
]

//Function play

function lvl (QB, lvl){
  console.log(h1("\n--------------" +" Level " + lvl + " --------------\n"))
  var n = QB.length;
  var correctAnswer = 0
  for (var i = 0; i < n; i++){
    console.log(C(QB[i].q))
    var userAnswer = readlineSync.keyInSelect(QB[i].a,"",{cancel:false, guide:false})
    if (userAnswer === QB[i].key) {
    console.log(RA("Right !!"))
    score = score + 1;
    correctAnswer = correctAnswer + 1 
  } else {
    console.log(WA("Wrong :-("))
  }
console.log(chalk.white("-------------------------------------------")) 
  }
  console.log("Your level "+ lvl + " score: " +correctAnswer+"\n")
  return correctAnswer
}

function play() {
  var levels = 3;
  var points = lvl(QB[0],"Novice 😶")
  //won level one 
  if (points >= 4){
    console.log("Congratulations! You are advancing to Level Rookie")
    points = lvl(QB[1],"Rookie 😅")
    //won level 2
    if(points >= 3){
      console.log("You made it! You are advancing to Level True Fan")
    points = lvl(QB[2],"True Fan 😎")

    //won lvl 3
    if (score == 12){
      console.log("Yayyy 🎊🎉 You did it " + userName +" !! 🎊🎉")
      console.log("Your final score is " + score + " 🤩🤩")
      console.log("Here you go! 🥇")
    }else if(score == 11){
      console.log(userName +" Ahh so close, but Better Luck Next Time")
      console.log("Your final score is " + score)
      console.log("Here you go! 🥈")
    }else{
      console.log("\n"+userName +" You played very well! ")
      console.log("Your final score is " + score)
      console.log("Here you go! 🥉")
      console.log("👏")
    }
    }//lost level two
    else{
      console.log(userName+" You were almost there :-0")
      console.log("Your final score is " + score)
    }
    
  }//lost level one
  else{
    console.log("\n"+ userName +" ik You tried")
    console.log("\nYour final score is " + score)
  }  
console.log("\nScoreboard")
console.log(scoreDB)
if(score === scoreDB[0].score)
console.log("If you think you should be there too, send me screenshot of your score, I'll update the scoreboard.")

console.log("Share this quiz with your friends/ office colleagues😁, here's the link" + "https://replit.com/@AyeshaShaikh2/The-Office-Trivia?embed=1&output=1")
}

play()
