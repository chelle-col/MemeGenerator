const list = document.querySelector('#memelist');
const tempSpace = document.querySelector('#tempSpace');
const form = document.querySelector('#memeForm');
const imgForm = document.querySelector("#website");
const topTextForm = document.querySelector("#tpText");
const bottomTextForm = document.querySelector("#btText");
var imH;
var imW;

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
    let li = document.createElement('li');
    let i = createMemeImg(img);
    let tt = createMemeTpText(tpText)
    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'Remove Meme';
    
    li.appendChild(i);   //add the image and text to the list of Memes
    li.appendChild(tt);
    list.appendChild(li); //add to the page


    let bt = createMemeBtText(btText, tt.offsetWidth);  //then create bottom text. 
    li.appendChild(bt);      //so we can use the width of the top to offset the bottom text
    li.appendChild(rmvBtn);
}

function createMemeImg(imgString){
    let img = document.createElement("img");
    img.setAttribute("src", imgString);
        //resize image
    imW = img.naturalWidth;
    imH = img.naturalHeight;
        //resize longest of two sides to 400px -> smaller side proportionally
    if(imW>imH){  //w is longest side
        imH = (imH*300)/imW;
        imW = 300;
    }else{
        imW = (imW*300)/imH;
        imH = 300;
    }
        //set the dimentions of the image
    img.width = imW; 
    img.height = imH;

    img.classList.add('relativeImg');
    return img;
}

function createMemeTpText(text){
    let span = document.createElement('span')
    span.innerText = text;
    span.classList.add('relativeTextTop');

    tempSpace.appendChild(span); //add span to html to get offsetwidth
    let w = span.offsetWidth;
    let half = (imW + w)/2;      //math to find where to start for center

    span.style.left = `-${half}px`;
    span.style.top = `-${imH - 20}px`;

    return span;
}

function createMemeBtText(text, num){
    let span = document.createElement('span')
    span.innerText = text;
    span.classList.add('relativeTextBottom'); 
    
    tempSpace.appendChild(span); //add span to html to get offsetwidth
    let w = span.offsetWidth;
    let half = (imW + w)/2; //math to find where to start for center
    span.style.left = `-${half + num}px`;//add the length of the origonal string

    return span;
}