const menuButton = document.querySelector('#menu');
let header = document.getElementById('header');
let userName1 = document.getElementById('username1');
let userName2 = document.getElementById('username2');
let homeButton = document.querySelector('#homeButton');
let addButton = document.getElementById('add')

homeButton.addEventListener('click', ()=>{
    window.location.reload();
    
})

function getUser(){
    let userInput = prompt('What is your username?');
    if (userInput == ''){
        userInput = 'Stranger';
    }
    userName1.textContent = `Hi ${userInput}! welcome to catbox!`;
    userName2.textContent = `Hi ${userInput}! welcome to catbox!`;
    

}

menuButton.addEventListener('click', ()=>{
    alert("Function not yet available.")
})

addButton.addEventListener('click', ()=>{
    alert("Function not yet available");
})

getUser();