'use strict';

const hello = require('../../src/hello');

describe('Testing Hello Module', () => {
  it('works when given a string', () => {
    let message = hello.sayHello('Peter');
    let expectedOutput = 'Hello, Peter';
    expect(message).toEqual(expectedOutput);
  });

  it('returns null when given an array', () => {
    let message = hello.sayHello(['Jabuc']);
    expect(message).toEqual(null);
  });
});