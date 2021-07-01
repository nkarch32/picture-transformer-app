const inputs = document.querySelectorAll('input'); //selects all inputs on page

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));


let img =  document.getElementById('img');
let button = document.getElementById('button');

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