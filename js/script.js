
// jshint esversion: 6

// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// MODAL

const MODAL_TRIGGER = document.querySelector('.btn-modal'),
      MODAL_MENU_TRIGGER = document.querySelector('.btn-list-item'),
      MODAL = document.querySelector('.overlay'),
      MODAL_CLOSE = document.querySelector('.modal__close');


MODAL_TRIGGER.addEventListener('click', (e) => {
    console.log(e.target);
    MODAL.classList.add('show');
    document.body.style.overflow = 'hidden';
});

MODAL_MENU_TRIGGER.addEventListener('click', (e) => {
    console.log(e.target);
    MODAL.classList.add('show');
    document.body.style.overflow = 'hidden';
});

function closeModal(x) {
 x.classList.remove('show');
 document.body.style.overflow = '';
};

MODAL_CLOSE.addEventListener('click', closeModal(MODAL));

// const AREA = document.querySelector('.modal__dialog');

MODAL.addEventListener('click', (e) => {
 if (e.target === MODAL || e.target === MODAL_CLOSE) {
  closeModal(MODAL);
 }
});

document.addEventListener('keydown', (e) => {
 if (e.code === "Escape" && MODAL.classList.contains('show')) {
  closeModal(MODAL);
 }
});

// join us text

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});