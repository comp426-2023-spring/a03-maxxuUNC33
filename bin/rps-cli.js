#!/usr/bin/env node

import minimist from "minimist";
// rps-cli.js
import { rps } from './lib/rpsls.js';
import { playGameCLI } from './game-cli.js';

playGameCLI(rps, process.argv.slice(2));
