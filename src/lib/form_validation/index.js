var validatejs = require("validate.js");

export const fieldNames = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

export const constraints = {
    [fieldNames.EMAIL]: {
        presence: {
            allowEmpty: false,
            message: '^Please enter an email address'
        },
        email: {
            message: '^Please enter a valid email address'
        }
    },

    [fieldNames.PASSWORD]: {
        presence: {
            allowEmpty: false,
            message: '^Please enter a password'
        },
        length: {
            minimum: 6,
            message: '^Your password must be at least 6 characters'
        }
    }
}

export const validate = (fieldName, value) => {
    const result = validatejs({ [fieldName]: value }, constraints);

    // If there is an error message, return it!
    if (result && result[fieldName]) {
    // Return only the field error message if there are multiple
        return result[fieldName][0];
    }

    return '';
}

export const validateAll = (fields) => {
    return validatejs(fields, constraints);
}

// Validation Script
import React from 'react';

export const isValidEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  console.log('Invalid email address');
  return (false);

};

export const isNumberInput = inputtxt => {
  const numbers = /^[0-9]+$/;
  if(inputtxt.value.match(numbers)) {
    console.log('Valid number string input');
    return true;
  }
  console.log('Not a valid number string input');
  return false;

};

export const isNumberString = value => {
  const numbers = /^[0-9]+$/;
  value = value.replace(/\D/g, '');
  console.log('Value stripped', value);
  if(value.match(numbers)) {
    console.log('Valid number string');
    return true;
  }
  console.log('Non valid number string');
  return false;

};

export const required = inputtx => {
  if (inputtx.value.length == 0) {
    alert('message');
    return false;
  }
  return true;
};

export const isValidPhoneNumber = value => {
  const phoneno = /^\d{10}$/;
  if(value.match(phoneno)) {
    console.log('Valid phone number');
    return true;
  }
  console.log('Not a valid phone');
  return false;

};

export default validate;
