function submit(){
    
}

function submitButtonListener(){
    var element = document.getElementById('submit');
    element.addEventListener('click', submit);
}

document.addEventListener('DOMContentLoaded', submitButtonListener);