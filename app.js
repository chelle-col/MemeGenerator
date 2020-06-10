const list = document.querySelector('#memelist');
const tempSpace = document.querySelector('#tempSpace');
const form = document.querySelector('#memeForm');
const imgForm = document.querySelector("#website");
const topTextForm = document.querySelector("#tpText");
const bottomTextForm = document.querySelector("#btText");

list.addEventListener('click', function(evt){
    if(evt.target.tagName === 'BUTTON'){
        evt.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    createMeme(imgForm.value,
            topTextForm.value,
            bottomTextForm.value);
    imgForm.value = '';
    topTextForm.value = '';
    bottomTextForm.value = '';
})


function createMeme(img, tpText, btText){
    let div = document.createElement('div');
    div.style.backgroundImage = `url(${img})`;
    let tt = createMemeTpText(tpText)

    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'Remove Meme';
    rmvBtn.classList.add('buttonStyle');

    div.appendChild(tt);
    list.appendChild(div); //add to the page

    let bottomText = createMemeBtText(btText);
    div.appendChild(bottomText);
    div.appendChild(rmvBtn);
}

function createMemeTpText(text){
    let span = document.createElement('span')
    span.innerText = text;
    span.classList.add('topText');
    return span;
}

function createMemeBtText(text, num){
    let span = document.createElement('span')
    span.innerText = text;
    span.classList.add('bottomText'); 
    return span;
}