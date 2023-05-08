#!/usr/bin/env node

// lib/rpsls.js
function getRandomChoice(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  
  function determineResult(player, opponent, rules) {
    if (player === opponent) return "draw";
    return rules[player].includes(opponent) ? "win" : "lose";
  }
  
  export function rps(playerChoice = null) {
    const choices = ["rock", "paper", "scissors"];
    const rules = {
      rock: ["scissors"],
      paper: ["rock"],
      scissors: ["paper"],
    };
  
    return game(playerChoice, choices, rules);
  }
  
  export function rpsls(playerChoice = null) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const rules = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    };
  
    return game(playerChoice, choices, rules);
  }
  
  function game(playerChoice, choices, rules) {
    if (playerChoice) playerChoice = playerChoice.toLowerCase();
  
    if (playerChoice && !choices.includes(playerChoice)) {
      throw new Error(`Invalid choice: ${playerChoice}`);
    }
  
    const player = playerChoice || getRandomChoice(choices);
    const opponent = getRandomChoice(choices);
    const result = determineResult(player, opponent, rules);
  
    return {
      player,
      opponent,
      result,
    };
  }
  