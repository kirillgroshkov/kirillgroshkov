#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import * as fs from 'fs'
import { outputTxtPath } from './paths.cnst'

const output = fs.readFileSync(outputTxtPath, 'utf8')
console.log(output)
