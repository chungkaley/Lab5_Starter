// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Phone Num with Parentheses Returns True', () =>{
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Phone Num with Dashes Returns True', () =>{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Phone Num Too Short Returns False', () =>{
  expect(isPhoneNumber('123-456')).toBe(false);
});
test('Phone Num with Special Characters Returns False', () =>{
  expect(isPhoneNumber('123-456-!!!!')).toBe(false);
});

test('Valid Email Returns True', () =>{
    expect(isEmail('kac101@ucsd.edu')).toBe(true);
});
test('Email with SubDomain Returns True', () =>{
    expect(isEmail('chungkaley@mail.com')).toBe(true);
});
test('Email Without @ Returns False', () =>{
    expect(isEmail('kac101ucsd.edu')).toBe(false);
});
test('Email Without com/edu Returns False', () =>{
    expect(isEmail('kac101@ucsd')).toBe(false);
});

test('Password With Mix of Letters/Numbers Returns True', () =>{
    expect(isStrongPassword('FSV17MC')).toBe(true);
});
test('Password Starts With Underscores Returns True', () =>{
    expect(isStrongPassword('FSSV17MC19_')).toBe(true);
});
test('Password Less Than 5 Letters/Numbers/Characters Returns False', () =>{
    expect(isStrongPassword('12ab')).toBe(false);
});
test('Password Starts With A Number Returns False', () =>{
    expect(isStrongPassword('123abc')).toBe(false);
});

test('Date With Slashs Returns True', () =>{
    expect(isDate('05/04/2026')).toBe(true);
});
test('Date With Single Digit Month/Date Returns True', () =>{
    expect(isDate('5/4/2026')).toBe(true);
});
test('Date With Dashes Returns False', () =>{
    expect(isDate('05-04-2026')).toBe(false);
});
test('Date With Year First Returns False', () =>{
    expect(isDate('2026/05/04')).toBe(false);
});

test('6 digit Hex Color Returns True', () =>{
    expect(isHexColor('#FFFFFF')).toBe(true);
});
test('#3 Digit Hex Color Returns True', () =>{
    expect(isHexColor('#000')).toBe(true);
});
test('Hex Color With Invalid Letters Returns False', () =>{
    expect(isHexColor('#FF')).toBe(false);
});
test('Hex Color Without # Symbol Returns False', () =>{
    expect(isHexColor('#GGGGGG')).toBe(false);
});



