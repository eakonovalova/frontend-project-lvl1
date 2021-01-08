#!/usr/bin/env node
import assert from 'power-assert';
import findGcd from '../findGcd.js';

assert(findGcd(1, 5) === 1);
assert(findGcd(5, 10) === 5);
assert(findGcd(2, 26) === 2);
