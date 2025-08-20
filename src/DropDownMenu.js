// DropDownMenu.js
export class DropDownMenu {
  constructor(options = {}) {
    // Merge provided options with default values
    this.options = {
      label: '',
      icon: '',
      menuItems: [],
      onMouseenter: this.defaultOnMouseenter,
      onMouseleave: this.defaultOnMouseleave,
      onMenuItemClick: this.defaultOnMenuItemClick,
      ...options
    };

    this.element = this.createElement();
    this.menu = this.element.querySelector('.drop-down');

    this.setupEventListeners();
  }

  createElement() {
    const { label, icon, menuItems } = this.options;
    
    // Create HTML for the icon
    const iconHTML = icon ? `<span class="material-symbols-outlined">${icon}</span>` : '';
    
    // Create HTML for the menu items
    const menuItemsHTML = menuItems.map(item =>
      `<li data-value="${item.value}">${item.label}</li>`
    ).join('');
    
    const templateHTML = `
      <div class="dropdown-component">
        <button class="dropdown-menu-button" type="button">
          ${iconHTML}
          <span class="button-label">${label}</span>
        </button>
        <ul class="drop-down hidden">
          ${menuItemsHTML}
        </ul>
      </div>
    `;

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = templateHTML.trim();
    return tempContainer.firstElementChild;
  }

  setupEventListeners() {
    // Use event handlers from options, which are either the user-provided ones or the defaults
    this.element.addEventListener('mouseenter', this.options.onMouseenter.bind(this));
    this.element.addEventListener('mouseleave', this.options.onMouseleave.bind(this));
    this.menu.addEventListener('click', this.options.onMenuItemClick.bind(this));
  }
  
  // Default behavior methods
  defaultOnMouseenter(ev) {
    const menu = ev.currentTarget.querySelector('.drop-down');
    if (menu) {
      menu.classList.remove('hidden');
    }
  }

  defaultOnMouseleave(ev) {
    const menu = ev.currentTarget.querySelector('.drop-down');
    if (menu) {
      menu.classList.add('hidden');
    }
  }
  
  defaultOnMenuItemClick(ev) {
    const menu = ev.currentTarget;
    if (menu) {
      menu.classList.add('hidden');
    }
    if (ev.target.tagName === 'LI') {
      const selectedValue = ev.target.getAttribute('data-value');
      const selectedText = ev.target.textContent;
      console.log(`Selected value: ${selectedValue}, Selected text: ${selectedText}`);
    }
  }
}

