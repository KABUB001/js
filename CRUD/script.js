function validateForm(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    if(name == ""){
        alert("Le nom est recquis");
        return false;
    }

    if(age == ""){
        alert("L'age est recquis");
        return false;
    }
    else if(age < 1){
        alert("Age must not be zero or less than zero");
        return false;
    }

    if(address == ""){
        alert("L'addresse est recquise");
        return false;
    }

    if(email == ""){
        alert("L'email est recquis");
        return false;
    }

}