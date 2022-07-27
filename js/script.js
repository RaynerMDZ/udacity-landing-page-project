/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sections = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Finds section ids in the document.
const findSections = () => {
    const sections = document.querySelectorAll('section');
    const sectionArray = [];
    sections.forEach(item => {
        sectionArray.push(item.id);
    });
    return sectionArray;
};

sections = findSections();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNav = (sections) => {
    const nav = document.querySelector('.navbar__menu')
    const navList = document.querySelector('#navbar__list');

    sections.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        const link = document.createElement('a');
        link.classList.add('nav-link');
        link.href = `#${item.toLowerCase()}`;
        const number = item.slice(-1);
        item = item.slice(0, -1);
        link.textContent = `${capitalize(item)} ${number}`;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    nav.appendChild(navList);
}

createNav(sections);

// Add class 'active' to section when near top of viewport
const activateSection = (item) => {

    const href = document.querySelector(`a[href^="#${item.id}"]`);

    const section = item.getBoundingClientRect();
    const top = section.top;
    const bottom = section.bottom;
    if (top < 0 && bottom > 0) {
        href.classList.add('active');
        item.classList.add('active');
    } else {
        item.classList.remove('active');
        href.classList.remove('active');
    }
};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu


// Scroll to section on link click

// Set sections as active
const sectionsList = document.querySelectorAll('section');
sectionsList.forEach(item => {
        document.addEventListener('scroll', () => activateSection(item));
    }
);

// Creates Navigation menu
