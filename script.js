function submit(e){/*https://stackoverflow.com/questions/63540236/use-js-to-determine-if-all-form-fields-are-filled-and-correctly#:~:text=You%20can%20select%20all%20the,input%20with%20more%20precise%20selector. */
    e.preventDefault();
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var emailadd = document.getElementById('emailadd');
    var generalenquiry = document.querySelector('input[name=enquiryg]');
    var supportrequest = document.querySelector('input[name=enquirys]');
    var message = document.getElementById('message');
    var checkbox = document.querySelector('input[name=checkbox]');
    if(fname.value == "" || lname.value == "" || emailadd.value == "" ||
        !generalenquiry ||  !supportrequest ||
        message.value == "" || !checkbox
    ){
        if(fname.value == ""){
            fname.style.border = '0.01em solid red';
        }
        if(lname.value == ""){
            lname.style.border = '0.01em solid red';
        }
        if(emailadd.value == ""){
            emailadd.style.border = '0.01em solid red';
        }
        if(!generalenquiry.value){
            fieldset.style.border = '0.01em solid red';
        }
        if(!supportrequest){
            fieldset.style.border = '0.01em solid red';  
        }
        if(message.value == ""){
            message.style.border = '0.01em solid red';
        }
        if(!checkbox){
            checkbox.style.border = '0.01em solid red';
        }
        
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