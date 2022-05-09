const menuButton = document.querySelector('#menu');
let header = document.getElementById('header');
let userName1 = document.getElementById('username1');
let userName2 = document.getElementById('username2');
let homeButton = document.querySelector('#homeButton');
let addButton = document.getElementById('add')
let contentBox = document.querySelector('.contentBox')
let content = document.getElementById('content');
let postName = document.getElementById('postName');
let profilePic = document.getElementById('profilePic');
let post = document.getElementById('post');
let icons = document.querySelectorAll('.material-symbols-outlined');
let likeButton = document.getElementById('like')
let dislikeButton = document.getElementById('dislike')
let shareButton = document.getElementById('share');
let reportButton = document.getElementById('report');
let bigContainer = document.getElementById('bigContainer');
let addButton2 = document.getElementById('add2');

addButton.addEventListener('click', ()=>{
    let makeContent = document.createElement('div');
    makeContent.classList.add('contentBox');
    newPostUser = prompt("Repeat your username:");
    postName.textContent = `${newPostUser} says:`;
    makeContent.appendChild(profilePic);
    makeContent.appendChild(postName);
    post.textContent = prompt("What is your post?")
    makeContent.appendChild(post);
    content.append(makeContent);

})

addButton2.addEventListener('click', ()=>{
    let makeContent = document.createElement('div');
    makeContent.classList.add('contentBox');
    newPostUser = prompt("Repeat your username:");
    postName.textContent = `${newPostUser} says:`;
    makeContent.appendChild(profilePic);
    makeContent.appendChild(postName);
    post.textContent = prompt("What is your post?")
    makeContent.appendChild(post);
    content.append(makeContent);

})


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
    
    return userInput;
}

menuButton.addEventListener('click', ()=>{
    alert("Function not yet available.")
})

//addButton.addEventListener('click', ()=>{
  //  alert("Function not yet available");
//})

getUser();