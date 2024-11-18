import { printDeck, printDeckValues, getCardValue, getCardSuit, shuffleDeck, dealDeck } from './deck.js';

// Define suits and values for cards
const suits = ["C", "D", "H", "S"]; // Clubs, Diamonds, Hearts, Spades
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

// Create an empty array for the deck, player hand, and dealer hand
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerMoney = 100; 
let gameOver = false;  // Track if the game is over

// Initialize the deck properly before use
deck = createDeck();  // Create the deck
shuffleBlackjackDeck(deck);    // Shuffle the deck

// Function to display the hands of the player and dealer
function displayHands() {
  const playerHandElement = document.getElementById('player-cards');
  const dealerHandElement = document.getElementById('dealer-cards');
  const playerScoreElement = document.getElementById('player-score');
  const dealerScoreElement = document.getElementById('dealer-score');

  // Clear the current displayed hands
  playerHandElement.innerHTML = '';
  dealerHandElement.innerHTML = '';

  // Display the player's hand
  playerHand.forEach(card => {
    const cardElement = document.createElement('div');
    const cardValue = getCardValue(card); // Extract value
    const cardSuit = getCardSuit(card);   // Extract suit
    cardElement.textContent = `${card} (${cardValue} of ${cardSuit})`;
    playerHandElement.appendChild(cardElement);
  });

  // Display the dealer's hand (show only one card)
  dealerHand.forEach(card => {
    const cardElement = document.createElement('div');
    const cardValue = getCardValue(card); // Extract value
    const cardSuit = getCardSuit(card);   // Extract suit
    cardElement.textContent = `${card} (${cardValue} of ${cardSuit})`;
    dealerHandElement.appendChild(cardElement);
  });

  // Update and display the scores
  playerScoreElement.textContent = calculateScore(playerHand);
  dealerScoreElement.textContent = calculateScore(dealerHand);
}

// Function to start a new game of Blackjack
function startBlackjack() {
  // Create and shuffle the deck
  deck = createDeck(); // Ensure the deck is created first
  shuffleBlackjackDeck(deck);   // Shuffle the deck

  // Deal initial cards
  playerHand = [drawCard(deck), drawCard(deck)];
  dealerHand = [drawCard(deck), drawCard(deck)];

  // Display the hands on the page
  displayHands();
}

// Function to create a deck of 52 cards
function createDeck() {
  let newDeck = [];
  for (let suit of suits) {
    for (let value of values) {
      newDeck.push(value + suit);
    }
  }
  return newDeck;
}

// Function to shuffle the deck using the Fisher-Yates shuffle algorithm
function shuffleBlackjackDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    // Get a random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at indices i and j
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Function to draw a card from the deck
function drawCard(deck) {
  return deck.pop(); // Remove and return the top card
}

// Function to calculate the score of a hand
function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;

  // Loop through each card and calculate the score
  hand.forEach(card => {
    // Ensure card is a string
    if (typeof card !== 'string') {
      console.error('Expected a string, but got:', typeof card, card);
      return;  // Skip this card if it's not a string
    }

    const cardValue = card.slice(0, -1);  // Get the numeric part of the card
    if (cardValue === "A") {
      aceCount++;
      score += 11;
    } else if (["K", "Q", "J"].includes(cardValue)) {
      score += 10;
    } else {
      score += parseInt(cardValue, 10);  // Convert numeric card values to integers
    }
  });

  // Adjust the score if there are Aces and the total is over 21
  while (score > 21 && aceCount > 0) {
    score -= 10;
    aceCount--;
  }

  return score;
}

// Function to handle "Hit" action
function hit() {
  if (gameOver) return;

  // Draw a card and add it to the player's hand
  playerHand.push(drawCard(deck));

  // Display the updated hands
  displayHands();

  // Check if the player busted
  if (calculateScore(playerHand) > 21) {
    gameOver = true;
    alert("You busted! Dealer wins!");
  }
}

// Function to handle "Stand" action
function stand() {
  if (gameOver) return;

  // The dealer's turn
  let dealerScore = calculateScore(dealerHand);

  // Dealer keeps drawing cards until they have at least 17 points
  while (dealerScore < 17) {
    dealerHand.push(drawCard(deck));
    dealerScore = calculateScore(dealerHand);
  }

  // Display the updated hands
  displayHands();

  // Determine the winner and show the result
  const playerScore = calculateScore(playerHand);
  let resultMessage = "";

  if (dealerScore > 21) {
    resultMessage = "Dealer busted! You win!";
  } else if (playerScore > dealerScore) {
    resultMessage = "You win!";
  } else if (playerScore < dealerScore) {
    resultMessage = "Dealer wins!";
  } else {
    resultMessage = "It's a tie!";
  }

  alert(resultMessage);

  gameOver = true;

  promptForNewGame();  // Ask for a new game after the alert
}

// Function to prompt for new game and bet
function promptForNewGame() {
  // Ask if the player wants to play again
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    // Ask how much they'd like to bet
    const betAmount = parseInt(prompt("How much would you like to bet?"));
    if (betAmount > playerMoney) {
      alert("You don't have enough money to make that bet!");
      promptForNewGame();  // Retry the bet prompt
    } else if (betAmount > 0) {
      playerMoney -= betAmount; // Deduct bet amount
      alert(`You have $${playerMoney} left.`);
      resetGame();
    } else {
      alert("Invalid bet amount.");
      promptForNewGame();  // Retry the bet prompt
    }
  } else {
    alert("Thanks for playing!");
  }
}

// Function to reset the game with new hand
function resetGame() {
  gameOver = false;
  playerHand = [];
  dealerHand = [];
  startBlackjack();
}

export { startBlackjack, hit, stand, resetGame, calculateScore, createDeck, drawCard, shuffleDeck };
