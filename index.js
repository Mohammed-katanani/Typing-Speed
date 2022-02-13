let show=document.querySelector(".show");
let level=document.querySelector(".captain span:nth-child(1)");
let seconds =document.querySelector(".captain span:nth-child(2)");
let start=document.querySelector(".start");
let input=document.querySelector(".text");
let contenerWord=document.querySelector(".contener-word");
let timer=document.querySelector(".seconds span");
let Score=document.querySelector(".score span:nth-child(1)");
let topScore =document.querySelector(".score span:nth-child(2)");
let finishMessage = document.querySelector(".finish");
let mainLevel = document.querySelector(".level  ");


// Level[0].onclick()=()=>console.log(level.value);

// console.log(input.value)
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];
  let levels={
      "hard":2,
      "normal":4,
      "easy":7
  }
  let defaultLevelName , defaultLevelSeconds ;
 

//   level.innerHTML=Object.keys(levels)[Object.keys(levels).indexOf("normal")];

function selectLevel(){
    mainLevel.remove();
    defaultLevelName =mainLevel.value;
    defaultLevelSeconds = levels[defaultLevelName];
    timer.innerHTML=defaultLevelSeconds;
    seconds.innerHTML=defaultLevelSeconds;
    level.innerHTML=defaultLevelName;
    Score.innerHTML=0;
    topScore.innerHTML=words.length;
}

  input.onpaste = ()=> false;
  start.onclick =  ()=> {
    selectLevel();
      start.remove();
    input.focus();
    // Generate Word Function
    genWords();
  }
function genWords(){
  let index =Math.floor(Math.random()*words.length);
  let showWord=words[index];
  words.splice(index,1);
  show.innerHTML=showWord;
  contenerWord.innerHTML='';
for (let i = 0; i < words.length; i++) {
    let newDiv =document.createElement("div");
    let newtext =document.createTextNode(words[i]);
    newDiv.appendChild(newtext);
    contenerWord.appendChild(newDiv);
}
  // Call Start Play Function
  startPlay();
}
let first=0;
function  startPlay(){
    if(first==0){
        timer.innerHTML=defaultLevelSeconds*2;
        first++;
    }else  timer.innerHTML=defaultLevelSeconds;
 let start = setInterval(()=>{
        timer.innerHTML--;
        if(timer.innerHTML==0){
            clearInterval(start);
            if(input.value.toLowerCase()==show.innerHTML.toLowerCase()){
            Score.innerHTML++;
            input.value='';
            if(words.length>0){
                genWords();
                contenerWord.remove();
            }else good();
        }else gameOver();
        }
    },1000)
}
function gameOver(){
    
    let newDiv =document.createElement("div");
    let newtext =document.createTextNode('game Over');
    newDiv.appendChild(newtext);
    newDiv.classList.add("bad");
    finishMessage.appendChild(newDiv);
}
function good(){
    let newDiv =document.createElement("div");
    let newtext =document.createTextNode('Congrats');
    newDiv.appendChild(newtext);
    newDiv.classList.add("good");
    finishMessage.appendChild(newDiv);
}
