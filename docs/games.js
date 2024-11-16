// Define suits and values for cards
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Create an empty array for the deck, player hand, and dealer hand
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerMoney = 100; 
let gameOver = false;  // Track if the game is over

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
    cardElement.textContent = `${card.value} of ${card.suit}`;
    playerHandElement.appendChild(cardElement);
  });

  // Display the dealer's hand (show only one card)
  dealerHand.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.textContent = `${card.value} of ${card.suit}`;
    dealerHandElement.appendChild(cardElement);
  });

  // Update and display the scores
  playerScoreElement.textContent = calculateScore(playerHand);
  dealerScoreElement.textContent = calculateScore(dealerHand);
}

// Function to start a new game of Blackjack
function startBlackjack() {
  // Create and shuffle the deck
  deck = createDeck();
  shuffleDeck(deck);

  // Deal initial cards
  playerHand = [drawCard(), drawCard()];
  dealerHand = [drawCard(), drawCard()];

  // Display the hands on the page
  displayHands();
}

// Function to create a deck of 52 cards
function createDeck() {
  let newDeck = [];
  for (let suit of suits) {
      for (let value of values) {
          newDeck.push({ suit: suit, value: value });
      }
  }
  return newDeck;
}

// Function to shuffle the deck (simple Fisher-Yates shuffle)
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Function to draw a card from the deck
function drawCard() {
  return deck.pop(); // Remove and return the top card
}

// Function to calculate the score of a hand
function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;

  // Add values to score
  for (let card of hand) {
      if (card.value === 'A') {
          score += 11;
          aceCount += 1;
      } else if (['K', 'Q', 'J'].includes(card.value)) {
          score += 10;
      } else {
          score += parseInt(card.value);
      }
  }

  // Adjust for Aces if score exceeds 21
  while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount -= 1;
  }

  return score;
}

// Function to handle "Hit" action
function hit() {
  if (gameOver) return;

  // Draw a card and add it to the player's hand
  playerHand.push(drawCard());

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
      dealerHand.push(drawCard());
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
