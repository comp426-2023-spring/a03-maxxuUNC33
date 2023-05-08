#!/usr/bin/env node


// rps-cli.js
import { rps } from './lib/rpsls.js';
import { playGameCLI } from './game-cli.js';

playGameCLI(rps, process.argv.slice(2));
