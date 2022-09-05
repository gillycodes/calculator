const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// option value for buttons
let options = {
    fruits : ['Apple', 'Orange', 'Pinnapple', 'Mango', 'Avocado', 'pear', 'Watermelon', 'banana', 'Pawpaw', 'Cucumber'],
    animals : ['Elephant', 'Antelope', 'Dog', 'Cat', 'Monkey', 'Lion', 'Cheeta', 'Fish', 'Cow', 'Goat'],
    countries : ['Nigeria', 'Canada', 'America', 'London', 'Austrialia', 'Austria', 'Europe', 'England', 'France', 'Ghana'],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//display the option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An option</h3>`;
    let buttonCon = document.createElement('div');
    for(let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//block all buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll('.letters');
    //disable the button
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove('hide');
};

//generate words
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll('.options');
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === optionValue) {
            button.classList.add('active');
        } else {
            button.disabled = true;
        }
    });

    //initially hide letters, clear previous words
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    console.log(chosenWord);

    //replace every letter with a dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes"> _ </sapn>');
console.log(displayItem);

    //display each element as span
    userInputSection.innerHTML = displayItem;
};

//initials that will show when the page loads/when start a new game
const initializer = () => {
    winCount = 0;
    count = 0;

    //initially erase all the content and hide letters and game buttons
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add('hide');
    letterContainer.innerHTML = "";

    // create letter button
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //get letters from fromcharcode
        button.innerText = String.fromCharCode(i);
        //character button click
        button.addEventListener('click', () => {
            let charArray = chosenWord.split("");
            console.log(charArray)
            let dashes = document.getElementsByClassName('dashes');
            //if array contain clicked value, replace the matched dash with letter else draw on canvas
            if(charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        dashes[index].innerHTML = char;
                        
                        
                        

                        winCount += 1;

                        if(winCount == charArray.length) {
                            resultText.innerHTML = `<h2 
                            class="win-msg">You Win!!</h2><p>The word was 
                            <span>${chosenWord}</span></p>`;
                            //block all buttons
                            blocker();
                        }
                    }
                })
            }
        })
        letterContainer.append(button);
    }
    
    displayOptions();
};

//new game
newGameButton.addEventListener('click', initializer);
window.onload = initializer;