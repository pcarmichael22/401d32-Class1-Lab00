'use strict';

const hello = require('../src/hello');

const greeting = hello.sayHello('Peter');
const goodbye = hello.sayGoodbye();

console.log(greeting, goodbye);