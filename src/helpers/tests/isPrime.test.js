#!/usr/bin/env node
import { strict as assert } from 'assert';
import prime from '../isPrime.js';

assert(prime(0) === 'no');
assert(prime(1) === 'no');
assert(prime(2) === 'yes');
assert(prime(3) === 'yes');
assert(prime(4) === 'no');
assert(prime(7) === 'yes');

assert(prime(24) === 'no');
assert(prime(13) === 'yes');
