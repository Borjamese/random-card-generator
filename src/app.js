/* eslint-disable */
import "bootstrap";
import "./style.css";

import "bootstrap";
import "./style.css";

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }

  return cards;
}

function displayRandomCard(cards, container) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const { value, suit } = card;

  let entity;
  suit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + suit.toLowerCase() + ";");

  const cardElement = document.createElement("div");
  cardElement.classList.add("card", suit.toLowerCase());
  cardElement.innerHTML =
    '<span class="card-value-suit top">' +
    value +
    entity +
    "</span>" +
    '<span class="card-suit">' +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    value +
    entity +
    "</span>";

  container.appendChild(cardElement);

  return cardElement;
}

const cardContainer = document.querySelector(".card-container");
const cards = deckBuilder();
const card = displayRandomCard(cards, cardContainer);
