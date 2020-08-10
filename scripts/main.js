


let myImage = document.querySelector("img");
myImage.onclick = function () {
    let myScr = myImage.getAttribute("src");
    // alert(myScr);
    if (myScr === "./images/logo_firefox.png") {
        myImage.setAttribute("src", "./images/logo_chrome.png");
    } else {
        myImage.setAttribute("src", "./images/logo_firefox.png");
    }
}



let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
let myButton = document.querySelector("button");

// alert(localStorage.getItem("name"));
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = "Welcome, " + localStorage.getItem("name");
}

myButton.onclick = function () {
    setUserName();
}

function setUserName() {
    let myName = prompt("Please input your name:");
    if (!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Welcome, " + myName;
    }
}







