function message(msg) {
    document.getElementById("test").innerHTML = msg;
}

function appearIt(){
    var x = document.getElementById("test");
    x.style.display = "block";
}

function hideIt(){
    var x = document.getElementById("test");
    x.style.display = "none";
}

function checkBoxPhone() {
    if (document.getElementById("checkBox").checked){
        document.getElementById("phone").style.display = "inline";
        document.getElementById("phonenumber").setAttribute('required', true);
    } else {
        document.getElementById("phonenumber").removeAttribute('required');
        document.getElementById("phone").style.display = "none";
    }
}