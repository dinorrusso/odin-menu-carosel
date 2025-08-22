// src/js/main.js  
import './styles/styles.css';
import { DropDownMenu } from './DropDownMenu';


function testDropDownComponent(){

const menuContainer = document.querySelector(".menu-container");
console.log('menuContainer:', menuContainer);

// Example usage with defaults
const dd1 = new DropDownMenu({
  label:"Menu",
  icon: "menu",
  menuItems: [
    { value: 'about', label: 'About' },
    { value: 'settings', label: 'Settings...' },
    { value: 'help', label: 'Help' },
    { value: 'exit', label: 'Exit' }
  ]

});

menuContainer.appendChild(dd1.element);

// Example usage with custom options
const dd2 = new DropDownMenu({
  label: "User Menu",
  icon: "account_circle",
  menuItems: [
    { value: 'profile', label: 'Profile' },
    { value: 'logout', label: 'Log Out' }
  ]
});
//document.body.appendChild(dd2.element);
menuContainer.appendChild(dd2.element);
}
//this instantiates and tests teh component
testDropDownComponent();
//this is the event listener for the css dropdown 
//as per the exercise
const toggleButton = document.querySelector('.togglemenubutton');
toggleButton.addEventListener('click', () => {
  const ddMenu = document.getElementById('ddmenu1');
  if(ddMenu.classList.contains('hidden')){
    ddMenu.className = 'ddmenu';
  }else{
    ddMenu.classList.add('hidden');
  }
});
//////////////////////////////////////////////////////////
// code for the carousel
//
const carouselConstainer = document.querySelector(".carousel-container");
const carouselCards = document.querySelectorAll(".carousel-card");
const carouselPreviousButton = document.querySelector(".button-left");
const carouselNextButton = document.querySelector(".button-right");
const carouselPositionIndicators = document.querySelector(".carousel-position-indicators");
let currentSelectionIndex = 0;

//generate the position indicators based on number of carousel-cards
carouselCards.forEach((card, index) => {
  const html = `
    <label>
      <input 
        class="position-indicator" 
        type="radio" 
        name="carousel-card" 
        value="${index + 1}" 
        title="Go to card ${index + 1}">
      <span></span>
    </label>
  `;
  //add the html to the doc
  carouselPositionIndicators.insertAdjacentHTML('beforeend', html);
});

//add logic for the position indicators
function unselectAll(){
  //unselect all
    carouselCards.forEach((card) => {
      card.classList.remove("carousel-card-selected");
    });
    positionIndicators.forEach((indicator) => {
      indicator.checked = false;
    });
}
function select(atIndex){
    carouselCards[atIndex].classList.add("carousel-card-selected");
    positionIndicators[atIndex].checked = true;
    currentSelectionIndex = atIndex;
}
const positionIndicators = document.querySelectorAll(".position-indicator");
positionIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    //unselect all
   unselectAll();
    //select the card and the indicator
    select(index);
  });
});
// add the logic for the previous and next buttons
carouselPreviousButton.addEventListener("click", () => {
  unselectAll();
  const min = 0;
  const max = carouselCards.length-1;
  if(currentSelectionIndex === min){
    currentSelectionIndex = max;
  } else{
    currentSelectionIndex -= 1;
  }
  select(currentSelectionIndex)
});
carouselNextButton.addEventListener("click", () => {
  unselectAll();
  const min = 0;  
  const max = carouselCards.length-1;
  if(currentSelectionIndex === max){
    currentSelectionIndex = min;
  } else{
    currentSelectionIndex += 1;
  }
  select(currentSelectionIndex);
});

//select the first item on page load
carouselCards[currentSelectionIndex].classList.add("carousel-card-selected");
positionIndicators[currentSelectionIndex].classList.add("position-indicator-selected");