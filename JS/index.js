//PSUEDO CODE

//I want the javascript to rotate the class rotate when the mouse enters the Element.
//onHover is the function. 
//Target it to the correct Element. 
//Element doesn't have class typically but it's added. 
//Mouse leave would rotate it back. 

//END PSUEDO CODE

//ADDING ROTATE CLASS ON CLICK

console.log("Did this load??");

const aboutMe = document.querySelector('#aboutMe');
//VARIABLE IS WHAT YOU'RE TARGETTING. 
addEventListener('click', () => {
    aboutMe.classList.add('rotate');
});
//Function is what you want the thing to do. 

const resume = document.querySelector('#resume');
addEventListener('click', () => {
    resume.classList.add('rotate');
});

const myWork = document.querySelector('#myWork');
addEventListener('click', () => {
    myWork.classList.add('rotate');
});
