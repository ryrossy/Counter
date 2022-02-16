//--------------------------------------------------------------
// Event CHALLENGES
//--------------------------------------------------------------

//--------------------------------------------------------------
// EXERCISE 1) Create a basic markup to experiment on then use JS to add
//             a tranditional HTML attribute event listener to a node.
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 2) Why is it consider bad practice to use this method?
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 3) Write a function, then call it with your previous onclick event listener
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 4) What happens if we have brackets() on the function we call in our 
//             event listener
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 5) Now use addEventListener to call the function.
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 6) What are the first, second, and third parameters that we 
//             pass into the addEventListener method?
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 7) Add an event listener on your body for a keydown.  When the event
//             is listened to, it should console log the event object.  
//             HINT: pass event or e into the callback function that your event listener
//             calls
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 8) Look at the event object and then apply a conditional (an if statement)
//             to the callback function.  The conditional should return true or false 
//             based on a property value pair in your event object
//             EXAMPLE: if(e.clientX > 500) {} or e.altKey ? ... : ...
//--------------------------------------------------------------


//--------------------------------------------------------------
// EXERCISE 9) On your body add a click listener and console.log(e.target) and e.currentTarget
//             Try click around and see what you log.  Why do the two return different results
//             and how is it an example of bubbling?
//---------------------------------------------------------------


const btnPlus = document.querySelector('.container')
const span = document.getElementById('span')
let counter = 0

btnPlus.addEventListener('click', (e)=> {
    // console.log(e.target)
    // console.log(e.target.classList.contains('btn1'))

    if(e.target.classList.contains('btn1')){
    counter++
    span.textContent = counter
    }
    if(e.target.classList.contains('btn2')){
    counter--
    span.textContent = counter
    }
    e.stopImmediatePropagation()
})

document.body.addEventListener ('click', () => {
    console.log('You Clicked')
})

