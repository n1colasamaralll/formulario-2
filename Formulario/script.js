function validateform(){
    var fname = document.getElementById('fname').Value.trim();
    var email = document.getElementById('email').Value.trim();
    var message = document.getElementById('message').value.trim();

    if(fname === ''){
        alert('preencha o campo nome!');
        return false;
    }

    if(email === ''){
        alert('preencha o campo E-mail!');
        return false;
    }

    if(message === ''){
        alert('preencha o campo messagem!');
        return false;
    }

    return true;

}
