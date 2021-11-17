// Create a div
let myDiv = document.createElement(`div`);

// Set Attributes
myDiv.setAttribute(`id`, `newDiv`);
myDiv.setAttribute(`class`, `box`);

let divContent = document.createTextNode(`We are adding a text to our div`); // it's not a paragraph tag
//Add note to new div element variable
myDiv.appendChild(divContent);

// Add myDiv to the body of the HTML
document.body.appendChild(myDiv);

// Creating a paragraph tag
let newParagraph = document.createElement(`p`);
newParagraph.setAttribute(`id`, `newParagraph`);
newParagraph.innerHTML = `<strong>This is my paragraph</strong>`;
myDiv.appendChild(newParagraph);

//Create a button
let myButton = document.createElement(`button`);

myButton.setAttribute(`id`, `myButton`);
myButton.setAttribute(`class`, `myButton`); // The id and class can be identical
myButton.innerHTML = `Click Me`;

// Add button to div
// myDiv.appendChild(myButton);
// Add button before the paragraph
myDiv.insertBefore(myButton, newParagraph);
let p = document.createElement(`p`);
myDiv.appendChild(p);

myButton.addEventListener(`click`, function() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    myButton.style.color = `rgb(${r},${g},${b})`;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    myDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    p.innerHTML = `rgb(${r},${g},${b})`;
})