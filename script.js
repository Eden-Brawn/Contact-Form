function submit(){/*https://stackoverflow.com/questions/63540236/use-js-to-determine-if-all-form-fields-are-filled-and-correctly#:~:text=You%20can%20select%20all%20the,input%20with%20more%20precise%20selector. */
    var fname = document.getElementById("firstname");
    if(fname.value == ""){
        alert("Not complete");

    } 
}

function submitButtonListener(){
    var element = document.getElementById('submit');
    element.addEventListener('click', submit);
}

document.addEventListener('DOMContentLoaded', submitButtonListener);