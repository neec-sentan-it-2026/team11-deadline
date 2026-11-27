// test/deadline.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { daysUntil } from '../public/deadline.js';

test('3日後の締切は3', () => {
  assert.equal(daysUntil('2026-12-04', new Date(2026, 11, 1)), 3);
});