#!/usr/bin/env node

import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6;
const dice = args.dice || 2; 
const rolls = args.rolls || 1;

console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));