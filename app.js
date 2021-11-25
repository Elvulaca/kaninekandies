// js for dog age
function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
// end dog age js
// var yourAge = window.prompt("Please Enter Your Age: ")
// if (yourAge < 13)
//     window.alert("You are" + " " + yourAge + " " + "years old, you must be at least 18 to visit this site!");
// if (yourAge >= 13)
//     window.alert("You are" + " " + yourAge + " " + "Thank You For Choosing Dog CBD Treats!");
// if (yourAge < 18)
//     location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
// //    end js for dog age
const recipe = {
    title: "Mole",
    serving: 2,
    ingredients: ['cumin', 'cinnamon', 'cocoa']
};
console.log(`${recipe.title}`);
console.log(`serving:${recipe.serving}`);
console.log(`ingredients:`)

document.getElementByID('title').innerHTML = 'title:' + recipe.title;
document.getElementByID('servingsize').innerHTML = 'serving:' + recipe.serving;
document.getElementByID('ingredients').innerHTML = 'ingredients:' + recipe.ingredients;

for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(`${recipe.ingredients[i]}`);
};

var sibling = {
    name: "Tomas",
    age: 34,
    single: false,
    children: ["Matty Bear"],
    order: "older",
    gender: "male",
};

//new keyword setting the values

var sibling = new Object();
sibling.name = "Tomas";
sibling.age = 34;
sibling.single = false;
sibling.children = ["Matty Bear"];
sibling.order = "older";
sibling.gender = "male";
delete sibling.gender;

sibling.single = true;
var meeting = (`Hello I am ${sibling.name} I am ${sibling.age} Am I single${sibling.single} I am a ${sibling.gender}`);
console.log(meeting);

var fortunes = [

    "You will win a <em>1000</em> dollars! Yippee!",
    "If you want to know the meaning of life, Look it up in the dictionary",
    "You will reconnect with a long lost friend.",
    "You're screwed",
    "You will pass your exams",
    "True love is a cat",
    "Smile, you never know who is falling in love with it",
];

function tellFortune() {


    var randomNumber = Math.floor(Math.random() * fortunes.length);


    console.log("random number: " + randomNumber);


    document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {


}
// start js code for age verifier
var yourAge = window.prompt("Please Enter Your Age: ")
if (yourAge < 13)
    window.alert("You are" + " " + yourAge + " " + "years old, you must be at least 18 to visit this site!");
if (yourAge >= 13)
    window.alert("You are" + " " + yourAge + " " + "Thank You For Choosing Dog CBD Treats!");
if (yourAge < 18)
    location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
//end js code for age verifier

var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}
for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}
// start card js
clickAndSelect()

function clickAndSelect() {
    let cards = Array.from(document.querySelectorAll('.card')),
        elements = []

    // Add child nodes to clickable elements
    cards.forEach(card => {
        elements = elements.concat(Array.from(card.children))
    })

    // Attach to mouse events
    elements.forEach(element => {

        // click: Disable
        element.addEventListener('click', e => e.preventDefault())

        // mousedown: Log the timestamp
        element.addEventListener('mousedown', e => {
            let card = e.target.closest(".card")
            card.setAttribute('data-md', Date.now())
        })

        // mouseup: Determine whether to click
        element.addEventListener('mouseup', e => {

            // Only one please
            e.stopPropagation();

            let card = (e.target.classList.contains("card")) ? e.target : e.target.closest('.card'),
                then = card.getAttribute('data-md'),
                now = Date.now()

            // Allow 200ms to distinguish click from non-click
            if (now - then < 200) {

                // Visit the link in the card
                // Change 'a' to a class if you have multiple links
                window.location = card.querySelector('a').href

                // Remove for production
                card.classList.add('visited')
                console.log(card.querySelector('a').href)

            }

            // Clean up
            card.removeAttribute('data-md')

        })
    })
}
// end card js


// function myCars (drivetrain , engine , milePerGallon , color , trim) {
//     this.drivetrain = drivetrain;
//     this.engine = engine;
//     this.milePerGallon = milePerGallon;
//     this.color = color;
//     this.trim = trim;
// };

// myCars.prototype.readThis = function () {
//     document.getElementById("cars").innerHTML = 
//     "drivetrain " + this.drivetrain + "</br>" + 
//     " engine " + this.engine + "</br>" +
//     " milePerGallon " + this.milePerGallon + "</br>" +
//     " color " + this.color + "</br>" +
//     " trim " + this.trim;
// };

// var carOne = new myCars (
//     "Automatic",
//     "V12",
//     "23 MPG",
//     "black",
//     "couple",
// );

// myCars.readThis();