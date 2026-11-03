import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProjectEstimate, validateInquiryForm, AVAILABLE_ADDONS } from './estimator';

test('calculateProjectEstimate computes baseline landing page values correctly', () => {
  const result = calculateProjectEstimate('landing', [], 'standard');
  assert.equal(result.basePriceMin, 2200);
  assert.equal(result.basePriceMax, 3500);
  assert.equal(result.addonTotal, 0);
  assert.equal(result.totalMin, 2200);
  assert.equal(result.totalMax, 3500);
  assert(result.estimatedDaysMin >= 5);
  assert(result.estimatedDaysMax > result.estimatedDaysMin);
  assert(result.formattedRange.includes('$2,200'));
});

test('calculateProjectEstimate accounts for addons', () => {
  const firstAddon = AVAILABLE_ADDONS[0]; // 600
  const secondAddon = AVAILABLE_ADDONS[1]; // 800
  const result = calculateProjectEstimate('landing', [firstAddon.id, secondAddon.id], 'standard');

  assert.equal(result.addonTotal, 1400);
  assert.equal(result.totalMin, 2200 + 1400);
  assert.equal(result.totalMax, 3500 + 1400);
});

test('calculateProjectEstimate handles expedited timeline multiplier', () => {
  const standardResult = calculateProjectEstimate('website', [], 'standard');
  const fastResult = calculateProjectEstimate('website', [], 'fast');

  // Fast rate should have 1.25x surcharge
  assert(fastResult.totalMin > standardResult.totalMin);
  // Fast timeline should be fewer days
  assert(fastResult.estimatedDaysMin < standardResult.estimatedDaysMin);
});

test('validateInquiryForm checks required fields accurately', () => {
  const invalid = validateInquiryForm({
    name: '',
    email: 'invalid-email',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert(invalid.errors.name);
  assert(invalid.errors.email);
  assert(invalid.errors.message);

  const valid = validateInquiryForm({
    name: 'Sarah Chen',
    email: 'sarah@hyperdrive.ai',
    message: 'We are launching our AI developer platform next month and need a high-converting landing page.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
