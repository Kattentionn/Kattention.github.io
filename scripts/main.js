let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/赵今麦.jpg') {
        myImage.setAttribute('src', 'images/童锦程.jpg');
        myHeading.innerHTML = myName + '还是做渣男吧';
    } else {
        myImage.setAttribute('src', 'images/赵今麦.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = myName + '也是赵今麦的狗呢';
    }
}

myButton.onclick = function () {
    setUserName();
}