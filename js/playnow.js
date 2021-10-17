function getResult()
{
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("txtPass").value;
    let conPass = document.getElementById("txtConPass").value;
    let gender = document.getElementById("optGender").value;
    let address = document.getElementById("taAddress").value;
    let checkAgree = document.getElementById("cbAgree").checked;

    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!name) alert("Name must be filled!");
    else if(!email) alert("Email must be filled!");
    else if(!reg.test(email)) alert("Invalid email");
    else if(!pass) alert("Password must be filled!");
    else if(pass.length<4) alert("Password must be more than 3 characters!");
    else if(!conPass) alert("confirm password must be filled");
    else if(conPass!=pass) alert("Password does not match");
    else if(!gender) alert("Gender must be filled!");
    else if(!address) alert("Address must be filled!");
    else if(!address.startsWith("Jl.")) alert("Invalid address (Starts with 'Jl. ')");
    else if(!checkAgree) alert("You must agree with the terms and conditions!");
    else {
        alert("Register Confirmed");
        location.reload(true);
}
    
}