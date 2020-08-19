// let myImage = document.querySelector("img");
// myImage.onclick = function () {
//     let myScr = myImage.getAttribute("src");
//     // alert(myScr);
//     if (myScr === "./images/logo_firefox.png") {
//         myImage.setAttribute("src", "./images/logo_chrome.png");
//     } else {
//         myImage.setAttribute("src", "./images/logo_firefox.png");
//     }
// }



// let myHeading = document.querySelector("h1");
// // myHeading.textContent = "Hello world!";
// let myButton = document.querySelector("button");

// // alert(localStorage.getItem("name"));
// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     myHeading.textContent = "Welcome, " + localStorage.getItem("name");
// }

// myButton.onclick = function () {
//     setUserName();
// }

// function setUserName() {
//     let myName = prompt("Please input your name:");
//     if (!myName || myName === null) {
//         setUserName()
//     } else {
//         localStorage.setItem("name", myName);
//         myHeading.textContent = "Welcome, " + myName;
//     }
// }


// const list = document.createElement('ul');
// const info = document.createElement('p');
// const html = document.querySelector('html');

// info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

// document.body.appendChild(info);
// document.body.appendChild(list);

// html.onclick = function () {
//     const listItem = document.createElement('li');
//     const listContent = prompt('What content do you want the list item to have?');
//     listItem.textContent = listContent;
//     list.appendChild(listItem);

//     listItem.onclick = function (e) {
//         e.stopPropagation();
//         const listContent = prompt('Enter new content for your list item');
//         this.textContent = listContent;
//     }
// }






