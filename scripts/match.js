//import { shuffleDeck, getCardValue, getCardSuit, createDeck, drawCard } from './deck.js';

let matchCards = [];
let deck = [];


function createDeck() {
    const suits = ["C", "D", "H", "S"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
    let newDeck = [];
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push(value + suit);
      }
    }
    return newDeck;
  }

  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }


deck = createDeck();

function getCardValue(card) {
    return parseInt(card.substring(0, card.length - 1));
  }
  
  function getCardSuit(card) {
    return card[card.length - 1];
  }

function getRandomElements(arr, numElements) {
    // Shuffle the array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    
    // Return the first numElements elements
    return arr.slice(0, numElements);
  }
  
  
  const randomElements = getRandomElements(deck, 6);
  
  console.log(randomElements);

const matchFirstCard = randomElements[0]; 
const matchSecondCard = randomElements[1];
const matchThirdCard = randomElements[2];
const matchFourthCard = randomElements[3];
const matchFifthCard = randomElements[4];
const matchSixthCard = randomElements[5];

const firstCardValue = getCardValue(matchFirstCard);  // Get the card's value
const firstCardSuit = getCardSuit(matchFirstCard);  // Get the card's suit

const secondCardValue = getCardValue(matchSecondCard);  // Get the card's value
const secondCardSuit = getCardSuit(matchSecondCard);  // Get the card's suit

const thirdCardValue = getCardValue(matchThirdCard);  // Get the card's value
const thirdCardSuit = getCardSuit(matchThirdCard);  // Get the card's suit

const fourthCardValue = getCardValue(matchFourthCard);  // Get the card's value
const fourthCardSuit = getCardSuit(matchFourthCard);  // Get the card's suit

const fifthCardValue = getCardValue(matchFifthCard);  // Get the card's value
const fifthCardSuit = getCardSuit(matchFifthCard);  // Get the card's suit

const sixthCardValue = getCardValue(matchSixthCard);  // Get the card's value
const sixthCardSuit = getCardSuit(matchSixthCard);  // Get the card's suit



      // Update the first card's image to the correct card
      const suitMap = {
        C: 'clubs',
        D: 'diamonds',
        H: 'hearts',
        S: 'spades'
      };
      
     // let cardSuit = 'C'; // Make sure the suit is a string
      //console.log(suitMap[cardSuit]); // Output: clubs

      // Update the  card's image to the correct card
     let firstCardElement = `../images/cards/${suitMap[firstCardSuit[0]]}/${firstCardValue}${firstCardSuit[0]}.png`;
     let secondCardElement = `../images/cards/${suitMap[secondCardSuit[0]]}/${secondCardValue}${secondCardSuit[0]}.png`;
     let thirdCardElement = `../images/cards/${suitMap[thirdCardSuit[0]]}/${thirdCardValue}${thirdCardSuit[0]}.png`;
     let fourthCardElement = `../images/cards/${suitMap[fourthCardSuit[0]]}/${fourthCardValue}${fourthCardSuit[0]}.png`;
     let fifthCardElement = `../images/cards/${suitMap[fifthCardSuit[0]]}/${fifthCardValue}${fifthCardSuit[0]}.png`;
     let sixthCardElement = `../images/cards/${suitMap[sixthCardSuit[0]]}/${sixthCardValue}${sixthCardSuit[0]}.png`;

  console.log(firstCardElement);
  console.log(secondCardElement);
  console.log(thirdCardElement);
  console.log(fourthCardElement);
  console.log(fifthCardElement);
  console.log(sixthCardElement);





const memoryGameSection = document.createElement("section");
memoryGameSection.className = "memory-game";




const firstMemoryCardDiv = document.createElement("div");
firstMemoryCardDiv.className = "memory-card";
firstMemoryCardDiv.setAttribute("data-framework" , matchFirstCard);

const secondMemoryCardDiv = document.createElement("div");
secondMemoryCardDiv.className = "memory-card";
secondMemoryCardDiv.setAttribute("data-framework" , matchSecondCard);

const thirdMemoryCardDiv = document.createElement("div");
thirdMemoryCardDiv.className = "memory-card";
thirdMemoryCardDiv.setAttribute("data-framework" , matchThirdCard);

const fourthMemoryCardDiv = document.createElement("div");
fourthMemoryCardDiv.className = "memory-card";
fourthMemoryCardDiv.setAttribute("data-framework" , matchFourthCard);

const fifthMemoryCardDiv = document.createElement("div");
fifthMemoryCardDiv.className = "memory-card";
fifthMemoryCardDiv.setAttribute("data-framework" , matchFifthCard);

const sixthMemoryCardDiv = document.createElement("div");
sixthMemoryCardDiv.className = "memory-card";
sixthMemoryCardDiv.setAttribute("data-framework" , matchSixthCard);

const seventhMemoryCardDiv = document.createElement("div");
seventhMemoryCardDiv.className = "memory-card";
seventhMemoryCardDiv.setAttribute("data-framework" , matchFirstCard);

const eighthMemoryCardDiv = document.createElement("div");
eighthMemoryCardDiv.className = "memory-card";
eighthMemoryCardDiv.setAttribute("data-framework" , matchSecondCard);

const ninthMemoryCardDiv = document.createElement("div");
ninthMemoryCardDiv.className = "memory-card";
ninthMemoryCardDiv.setAttribute("data-framework" , matchThirdCard);

const tenthMemoryCardDiv = document.createElement("div");
tenthMemoryCardDiv.className = "memory-card";
tenthMemoryCardDiv.setAttribute("data-framework" , matchFourthCard);

const eleventhMemoryCardDiv = document.createElement("div");
eleventhMemoryCardDiv.className = "memory-card";
eleventhMemoryCardDiv.setAttribute("data-framework" , matchFifthCard);

const twelfthMemoryCardDiv = document.createElement("div");
twelfthMemoryCardDiv.className = "memory-card";
twelfthMemoryCardDiv.setAttribute("data-framework" , matchSixthCard);



const firstFrontFaceImg = document.createElement("img");
const secondFrontFaceImg = document.createElement("img");
const thirdFrontFaceImg = document.createElement("img");
const fourthFrontFaceImg = document.createElement("img");
const fifthFrontFaceImg = document.createElement("img");
const sixthFrontFaceImg = document.createElement("img");
const seventhFrontFaceImg = document.createElement("img");
const eighthFrontFaceImg = document.createElement("img");
const ninthFrontFaceImg = document.createElement("img");
const tenthFrontFaceImg = document.createElement("img");
const eleventhFrontFaceImg = document.createElement("img");
const twelfthFrontFaceImg = document.createElement("img");

firstFrontFaceImg.src = firstCardElement;
secondFrontFaceImg.src = secondCardElement;
thirdFrontFaceImg.src = thirdCardElement;
fourthFrontFaceImg.src = fourthCardElement;
fifthFrontFaceImg.src = fifthCardElement;
sixthFrontFaceImg.src = sixthCardElement;
seventhFrontFaceImg.src = firstCardElement;
eighthFrontFaceImg.src = secondCardElement;
ninthFrontFaceImg.src = thirdCardElement;
tenthFrontFaceImg.src = fourthCardElement;
eleventhFrontFaceImg.src = fifthCardElement;
twelfthFrontFaceImg.src = sixthCardElement;



const backFaceImg1 = document.createElement("img");
backFaceImg1.src = `../images/cards/cardbacks.png`;

const backFaceImg2 = document.createElement("img");
backFaceImg2.src = `../images/cards/cardbacks.png`;

const backFaceImg3 = document.createElement("img");
backFaceImg3.src = `../images/cards/cardbacks.png`;

const backFaceImg4 = document.createElement("img");
backFaceImg4.src = `../images/cards/cardbacks.png`;

const backFaceImg5 = document.createElement("img");
backFaceImg5.src = `../images/cards/cardbacks.png`;

const backFaceImg6 = document.createElement("img");
backFaceImg6.src = `../images/cards/cardbacks.png`;

const backFaceImg7 = document.createElement("img");
backFaceImg7.src = `../images/cards/cardbacks.png`;

const backFaceImg8 = document.createElement("img");
backFaceImg8.src = `../images/cards/cardbacks.png`;

const backFaceImg9 = document.createElement("img");
backFaceImg9.src = `../images/cards/cardbacks.png`;

const backFaceImg10 = document.createElement("img");
backFaceImg10.src = `../images/cards/cardbacks.png`;

const backFaceImg11 = document.createElement("img");
backFaceImg11.src = `../images/cards/cardbacks.png`;

const backFaceImg12 = document.createElement("img");
backFaceImg12.src = `../images/cards/cardbacks.png`;

const docBody = document.querySelector("body");



docBody.appendChild(memoryGameSection);

memoryGameSection.appendChild(firstMemoryCardDiv);
memoryGameSection.appendChild(secondMemoryCardDiv);
memoryGameSection.appendChild(thirdMemoryCardDiv);
memoryGameSection.appendChild(fourthMemoryCardDiv);
memoryGameSection.appendChild(fifthMemoryCardDiv);
memoryGameSection.appendChild(sixthMemoryCardDiv);
memoryGameSection.appendChild(seventhMemoryCardDiv);
memoryGameSection.appendChild(eighthMemoryCardDiv);
memoryGameSection.appendChild(ninthMemoryCardDiv);
memoryGameSection.appendChild(tenthMemoryCardDiv);
memoryGameSection.appendChild(eleventhMemoryCardDiv);
memoryGameSection.appendChild(twelfthMemoryCardDiv);

firstMemoryCardDiv.appendChild(firstFrontFaceImg);
firstMemoryCardDiv.appendChild(backFaceImg1);

secondMemoryCardDiv.appendChild(secondFrontFaceImg);
secondMemoryCardDiv.appendChild(backFaceImg2);

thirdMemoryCardDiv.appendChild(thirdFrontFaceImg);
thirdMemoryCardDiv.appendChild(backFaceImg3);

fourthMemoryCardDiv.appendChild(fourthFrontFaceImg);
fourthMemoryCardDiv.appendChild(backFaceImg4);

fifthMemoryCardDiv.appendChild(fifthFrontFaceImg);
fifthMemoryCardDiv.appendChild(backFaceImg5);

sixthMemoryCardDiv.appendChild(sixthFrontFaceImg);
sixthMemoryCardDiv.appendChild(backFaceImg6);

seventhMemoryCardDiv.appendChild(seventhFrontFaceImg);
seventhMemoryCardDiv.appendChild(backFaceImg7);

eighthMemoryCardDiv.appendChild(eighthFrontFaceImg);
eighthMemoryCardDiv.appendChild(backFaceImg8);

ninthMemoryCardDiv.appendChild(ninthFrontFaceImg);
ninthMemoryCardDiv.appendChild(backFaceImg9);

tenthMemoryCardDiv.appendChild(tenthFrontFaceImg);
tenthMemoryCardDiv.appendChild(backFaceImg10);

eleventhMemoryCardDiv.appendChild(eleventhFrontFaceImg);
eleventhMemoryCardDiv.appendChild(backFaceImg11);

twelfthMemoryCardDiv.appendChild(twelfthFrontFaceImg);
twelfthMemoryCardDiv.appendChild(backFaceImg12);



// css

const bodyStyles = document.body;
bodyStyles.style.backgroundColor = "#163b16";
bodyStyles.style.display = "flex";
bodyStyles.style.height = "100vh";

memoryGameSection.style.width = "640px";
memoryGameSection.style.height = "640px";
memoryGameSection.style.backgroundColor = "red";
memoryGameSection.style.margin = "auto";
memoryGameSection.style.display = "flex";


const memCard = document.getElementById('memory-card');

firstMemoryCardDiv.style.width = "calc(25% - 10px)";
firstMemoryCardDiv.style.height = "calc(33% - 10px)";
firstMemoryCardDiv.style.position = "relative";
firstMemoryCardDiv.style.margin = "5px";
firstMemoryCardDiv.style.transform = "scale(1)";
firstMemoryCardDiv.style.transformStyle = "preserve-3d";
firstMemoryCardDiv.style.transition = "transform .5s";


secondMemoryCardDiv.style.width = "calc(25% - 10px)";
secondMemoryCardDiv.style.height = "calc(33% - 10px)";
secondMemoryCardDiv.style.position = "relative";
secondMemoryCardDiv.style.margin = "5px";
secondMemoryCardDiv.style.transform = "scale(1)";
secondMemoryCardDiv.style.transformStyle = "preserve-3d";
secondMemoryCardDiv.style.transition = "transform .5s";

thirdMemoryCardDiv.style.width = "calc(25% - 10px)";
thirdMemoryCardDiv.style.height = "calc(33% - 10px)";
thirdMemoryCardDiv.style.position = "relative";
thirdMemoryCardDiv.style.margin = "5px";
thirdMemoryCardDiv.style.transform = "scale(1)";
thirdMemoryCardDiv.style.transformStyle = "preserve-3d";
thirdMemoryCardDiv.style.transition = "transform .5s";

fourthMemoryCardDiv.style.width = "calc(25% - 10px)";
fourthMemoryCardDiv.style.height = "calc(33% - 10px)";
fourthMemoryCardDiv.style.position = "relative";
fourthMemoryCardDiv.style.margin = "5px";
fourthMemoryCardDiv.style.transform = "scale(1)";
fourthMemoryCardDiv.style.transformStyle = "preserve-3d";
fourthMemoryCardDiv.style.transition = "transform .5s";

fifthMemoryCardDiv.style.width = "calc(25% - 10px)";
fifthMemoryCardDiv.style.height = "calc(33% - 10px)";
fifthMemoryCardDiv.style.position = "relative";
fifthMemoryCardDiv.style.margin = "5px";
fifthMemoryCardDiv.style.transform = "scale(1)";
fifthMemoryCardDiv.style.transformStyle = "preserve-3d";
fifthMemoryCardDiv.style.transition = "transform .5s";

sixthMemoryCardDiv.style.width = "calc(25% - 10px)";
sixthMemoryCardDiv.style.height = "calc(33% - 10px)";
sixthMemoryCardDiv.style.position = "relative";
sixthMemoryCardDiv.style.margin = "5px";
sixthMemoryCardDiv.style.transform = "scale(1)";
sixthMemoryCardDiv.style.transformStyle = "preserve-3d";
sixthMemoryCardDiv.style.transition = "transform .5s";

seventhMemoryCardDiv.style.width = "calc(25% - 10px)";
seventhMemoryCardDiv.style.height = "calc(33% - 10px)";
seventhMemoryCardDiv.style.position = "relative";
seventhMemoryCardDiv.style.margin = "5px";
seventhMemoryCardDiv.style.transform = "scale(1)";
seventhMemoryCardDiv.style.transformStyle = "preserve-3d";
seventhMemoryCardDiv.style.transition = "transform .5s";

eighthMemoryCardDiv.style.width = "calc(25% - 10px)";
eighthMemoryCardDiv.style.height = "calc(33% - 10px)";
eighthMemoryCardDiv.style.position = "relative";
eighthMemoryCardDiv.style.margin = "5px";
eighthMemoryCardDiv.style.transform = "scale(1)";
eighthMemoryCardDiv.style.transformStyle = "preserve-3d";
eighthMemoryCardDiv.style.transition = "transform .5s";

ninthMemoryCardDiv.style.width = "calc(25% - 10px)";
ninthMemoryCardDiv.style.height = "calc(33% - 10px)";
ninthMemoryCardDiv.style.position = "relative";
ninthMemoryCardDiv.style.margin = "5px";
ninthMemoryCardDiv.style.transform = "scale(1)";
ninthMemoryCardDiv.style.transformStyle = "preserve-3d";
ninthMemoryCardDiv.style.transition = "transform .5s";

tenthMemoryCardDiv.style.width = "calc(25% - 10px)";
tenthMemoryCardDiv.style.height = "calc(33% - 10px)";
tenthMemoryCardDiv.style.position = "relative";
tenthMemoryCardDiv.style.margin = "5px";
tenthMemoryCardDiv.style.transform = "scale(1)";
tenthMemoryCardDiv.style.transformStyle = "preserve-3d";
tenthMemoryCardDiv.style.transition = "transform .5s";

eleventhMemoryCardDiv.style.width = "calc(25% - 10px)";
eleventhMemoryCardDiv.style.height = "calc(33% - 10px)";
eleventhMemoryCardDiv.style.position = "relative";
eleventhMemoryCardDiv.style.margin = "5px";
eleventhMemoryCardDiv.style.transform = "scale(1)";
eleventhMemoryCardDiv.style.transformStyle = "preserve-3d";
eleventhMemoryCardDiv.style.transition = "transform .5s";

twelfthMemoryCardDiv.style.width = "calc(25% - 10px)";
twelfthMemoryCardDiv.style.height = "calc(33% - 10px)";
twelfthMemoryCardDiv.style.position = "relative";
twelfthMemoryCardDiv.style.margin = "5px";
twelfthMemoryCardDiv.style.transform = "scale(1)";
twelfthMemoryCardDiv.style.transformStyle = "preserve-3d";
twelfthMemoryCardDiv.style.transition = "transform .5s";



/*
.memory-card {
    width: calc(25% - 10px);
    height: calc(33% - 10px);
    position: relative;
    margin: 5px;
    transform: scale(1);
    transform-style: preserve-3d;
    transition: transform .5s;
}
 */  