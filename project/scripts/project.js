const year = document.querySelector("#year");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#mobilenav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});