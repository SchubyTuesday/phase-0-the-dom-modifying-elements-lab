const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the newHeader element
newHeader.id = 'victory';

// Set the text inside newHeader
newHeader.textContent = 'Charlie is the champion';