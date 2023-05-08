#!/usr/bin/env node

import minimist from "minimist";
// rpsls-cli.js
import { rpsls } from './lib/rpsls.js';
import { playGameCLI } from './game-cli.js';

playGameCLI(rpsls, process.argv.slice(2));
