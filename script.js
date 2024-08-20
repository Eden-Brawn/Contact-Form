function submit(){
    window.alert('Message Sent\! \n Thanks for completing the form. We\'ll be in touch soon\!');
}

function submitButtonListener(){
    var element = document.getElementById('submit');
    element.addEventListener('click', submit);
}

document.addEventListener('DOMContentLoaded', submitButtonListener);