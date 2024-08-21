function submit(e){/*https://stackoverflow.com/questions/63540236/use-js-to-determine-if-all-form-fields-are-filled-and-correctly#:~:text=You%20can%20select%20all%20the,input%20with%20more%20precise%20selector. */
    e.preventDefault();
    var fname = document.getElementById('fname');
    if(fname.value == ""){
        alert("Not complete");
        var fname = document.getElementsByClassName('firstnameinput');
        fname.style.border = '0.01em solid red';

    } else{
        var element = document.getElementById('alert');
        element.style.display = 'block';
    }
}

function submitButtonListener(){
    var element = document.getElementById('submit');
    element.addEventListener('click', submit);
}

document.addEventListener('DOMContentLoaded', submitButtonListener);