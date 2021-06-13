const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const mainDiv = document.querySelector('.choices');
const wrapperDiv = document.querySelector('.wrapper');
const resetDiv = document.querySelector(".reset")
const historyDiv = document.querySelector(".history")
const choices = ['rock','paper','scissors'];


const scoreDataBase = {
    'rock': {'rock':0.5,'paper':0,'scissors':1},
    'paper': {'rock':1,'paper':0.5,'scissors':0},
    'scissors': {'rock':0,'paper':1,'scissors':0.5}
}

const imageDataBase = {
          'rock':rock.src,
          'paper':paper.src,
          'scissors':scissors.src
}




function rpsGame(choice) {
    const yourChoice = choice.id;
    console.log(yourChoice);
    const botChoice = botSelection();
    const gameScore = score(yourChoice,botChoice);
    const finalMessage = gameMessage(gameScore);
    const removeImages = removeChoices();
    const frontEndFunc = frontEnd(yourChoice,botChoice,finalMessage);
    
}

function botSelection() {
    const random = Math.floor(Math.random()*3);
    return choices[random];
}
console.log(botSelection);

function score(yourChoice,botChoice){
  
    return scoreDataBase[yourChoice][botChoice];
}

function gameMessage (gameScore) {
    let result;
    switch(gameScore) {
        case 1:
            result = {message:"You Won!",color:"black"};
            break;
        case 0.5:
            result = {message:"You Tied",color:'yellow'};
            break;
        case 0:
            result = {message:'You Lost!',color:'red'};
            break;
        default:
            result = "GameScore undefined"
    }
    return result;
}

function removeChoices(){
    rock.remove();
    paper.remove();
    scissors.remove();
}

function frontEnd(yourChoice,botChoice,finalMessage) {
    mainDiv.innerHTML = `<img class='results' id="yourChoice" src="${imageDataBase[yourChoice]}" alt="${yourChoice}" width="100px" height="100px"/><h2 class='results' style="color:${finalMessage['color']}">${finalMessage['message']}</h2><img class='results' id="botChoice" src="${imageDataBase[botChoice]}" alt="${botChoice}" width="100px" height="100px"/>`;
    resetDiv.innerHTML = `<button onclick="restart()">Restart</button>`;
}

function condition(){
  let history ="Start each round by touching rock or paper or scissor.<br> Result: rock crushes scissors, scissors cut paper, paper covers rock.Restart ,play till you win ";
  return historyDiv.innerHTML= history
}

function restart(){
    location.reload();
}















// const image = document.createElement('img');
// image.src = 'http://pngimg.com/uploads/stone/stone_PNG13605.png';
// image.alt = 'rock';
// image.width = '100';
// image.height= '100';



// mainDiv.innerHTML = `<img src="http://pngimg.com/uploads/stone/stone_PNG13605.png" alt="Rock" width="100px" height="100px"/>`

// mainDiv.appendChild(image);