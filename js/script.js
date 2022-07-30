// jshint esversion: 6

// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Click to main page

const clickMain = () => {
    
};