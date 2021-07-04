const inputs = document.querySelectorAll('input'); //selects all inputs on page

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));


let img =  document.getElementById('img');
let button = document.getElementById('button');
let rotate = document.getElementById('rotate');
let rotateActivate = false;

button.addEventListener('change', function() {
    //check whether uploaded file is jpeg or png file type -- if not, display alert
    if (this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png') {
        alert('File type not recognized. Please upload .jpeg or .png file.');
    } else {
        //if file type is indeed image, display the image in the 'Your image' field
        img.style.display = 'block';
        img.src = URL.createObjectURL(this.files[0]);
        //if image is displayed, get rid of the 'your image' placeholder
        document.getElementById("placeholder").style.visibility =
          'hidden';
    }
})

/* Allows user to rotate image */

rotate.addEventListener('click', rotateImage);

let rotation = 0;
function rotateImage() {
    rotation +=45;
    if (rotation === 360) {
        rotation = 0;
    }

    img.style.transform = `rotate(${rotation}deg)`;
    img.style.margin = '100px';
}

/* Download button 

const downloadField = document.querySelector('img#img.image-preview');


function downloadImage() {


}

downloadField.addEventListener = ('click', downloadImage);
*/

/*
It works, but it doesn't allow user to keep rotating beyond 4 clicks.

let numberOfClicks = 0;
function clickCounter(e) {
    numberOfClicks++;
    if (numberOfClicks === 1) {
        img.style.transform = 'rotate(90deg)';
        img.style.margin = '100px'
    } else if (numberOfClicks === 2) {
        img.style.transform = 'rotate(180deg)';
        img.style.margin = '100px';
    } else if (numberOfClicks === 3) {
        img.style.transform = 'rotate(270deg)';
        img.style.margin = '100px';
    } else if (numberOfClicks === 4) {
        img.style.transform = 'rotate(360deg)';
        img.style.margin = '100px';
    } else {
        img.style.margin = '100px';
    }
}

*/
 