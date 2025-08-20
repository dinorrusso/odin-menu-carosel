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
//document.body.appendChild(dd1.element);

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
testDropDownComponent();
const toggleButton = document.querySelector('.togglemenubutton');
toggleButton.addEventListener('click', () => {
  const ddMenu = document.getElementById('ddmenu1');
  if(ddMenu.classList.contains('hidden')){
    ddMenu.className = 'ddmenu';
  }else{
    ddMenu.classList.add('hidden');
  }
});
/*
const dropDownMenu = document.querySelector(".drop-down");
const dropDownMenuButton = document.querySelector(".dropdown-menu-button");

//sow the dropdown when the mouse hovers over the button
dropDownMenuButton.addEventListener("mouseenter", () => {
        console.log('dropDownMenuButton mouseenter');
        // make it visible CSS
        dropDownMenu.className = "drop-down";
      });
//respond to a dropdown option being clicked
dropDownMenu.addEventListener("click", (event) => {
        // make it invisible CSS
        dropDownMenu.classList.add("hidden");
        //if an option was clicked
        if (event.target.tagName === 'LI') {
          const selectedValue = event.target.getAttribute('data-value');
          console.log('selectedValue = ', selectedValue);
          const selectedText = event.target.textContent;
          console.log('selectedText = ', selectedText);
        }
      });
dropDownMenu.addEventListener("mouseleave", (event) => {
        // make it invisible CSS
        dropDownMenu.classList.add('hidden');
      });
*/

/*
function createDropDownMenu(options){
  const template = document.createElement("template");
  
  //capture the icon text for the template
  let iconHTML = ""
  if (options.icon) {
    iconHTML = `<span class="material-symbols-outlined">${options.icon}</span>`;
  }
  //capture the menu items text for the template
  let menuItemsHTML = '';
  if (options.menuItems && options.menuItems.length > 0) {
      menuItemsHTML = options.menuItems.map(item =>
      `<li data-value="${item.value}">${item.label}</li>`
    ).join('');
  }
  

  //here's the rest of the template
  const templateHTML = `
  <div class = "dropdown-component">
    <button class = "dropdown-menu-button" id="ddmb2" type="button">
      ${iconHTML}
      <span class="button-label">${options.label}</span>
    </button>
    <ul class="drop-down hidden">
      ${menuItemsHTML}
    </ul>
  </div>
  `

   // Create a temporary container
  const tempContainer = document.createElement('div');

  // Set the HTML string inside
  tempContainer.innerHTML = templateHTML;

  const dropDownMenu = tempContainer.firstElementChild;
  if (options.onMouseenter){
    dropDownMenu.addEventListener("mouseenter", options.onMouseenter);

  }
  if (options.onMouseleave){
    dropDownMenu.addEventListener("mouseleave", options.onMouseleave);

  }

  return dropDownMenu;
}

const myDD = createDropDownMenu({
  label: "My Test Menu",
  icon: "menu",
  menuItems: [
                { value: 'option1', label: '1' },
                { value: 'option2', label: '2' },
                { value: 'option3', label: '3' },
              ],
  onMouseenter: (ev) => {
    const dropdownDiv = ev.target;
    console.log('you entered...', dropdownDiv);
    const dropdownUl = dropdownDiv.querySelector('ul');
    console.log('dropdownUl:', dropdownUl);
    dropdownUl.className = "drop-down";
  },
  onMouseleave: (ev) => {
    const dropdownDiv = ev.target;
    console.log('you left...', dropdownDiv);
    const dropdownUl = dropdownDiv.querySelector('ul');
    console.log('dropdownUl:', dropdownUl);
    dropdownUl.classList.add("hidden");
    console.log('dropdownUl:', dropdownUl);
  }
  });
console.log('myDD=', myDD);
document.body.appendChild(myDD);
*/