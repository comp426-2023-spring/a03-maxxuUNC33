#!/usr/bin/env node

// game-cli.js
function displayHelp(gameName) {
  console.log(`Usage: ${gameName} [SHOT]`);
  console.log(`Play ${gameName.toUpperCase()}`);
  console.log('');
  console.log('  -h, --help      display this help message and exit');
  console.log('  -r, --rules     display the rules and exit');
  console.log('');
  console.log('Examples:');
  console.log(`  ${gameName}        Return JSON with single player ${gameName.toUpperCase()} result.`);
  console.log(`                    e.g. {"player":"rock"}`);
  console.log(`  ${gameName} rock   Return JSON with results for ${gameName.toUpperCase()} played against a simulated opponent.`);
  console.log(`                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

function displayRules(rules) {
  console.log(`Rules:`);
  for (const rule of rules) {
    console.log(`  - ${rule}`);
  }
}

export function playGameCLI(gameFunction, args) {
  const gameName = gameFunction.name;
  const rules = {
    rps: [
      "Scissors CUTS Paper",
      "Paper COVERS Rock",
      "Rock CRUSHES Scissors",
      ],
      rpsls: [
      "Scissors CUTS Paper",
      "Paper COVERS Rock",
      "Rock CRUSHES Lizard",
      "Lizard POISONS Spock",
      "Spock SMASHES Scissors",
      "Scissors DECAPITATES Lizard",
      "Lizard EATS Paper",
      "Paper DISPROVES Spock",
      "Spock VAPORIZES Rock",
      "Rock CRUSHES Scissors",
      ],
      };
      
      try {
      if (args.includes('-h') || args.includes('--help')) {
      displayHelp(gameName);
      } else if (args.includes('-r') || args.includes('--rules')) {
      displayRules(rules[gameName]);
      } else {
      const playerChoice = args[0] || null;
      const result = gameFunction(playerChoice);
      console.log(JSON.stringify(result));
      }
      } catch (error) {
      console.error(error.message);
      displayHelp(gameName);
      displayRules(rules[gameName]);
      }
}
