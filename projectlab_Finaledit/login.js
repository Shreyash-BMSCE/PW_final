
    function validateForm() {
        var iuser = document.forms["Form"].username.value;
        var ipassword = document.forms["Form"].password.value;
        if(ipassword!="s1s1s1" || ipassword=="" || iuser=="" || iuser=="@" || iuser=="!"|| iuser=="%"|| iuser=="&" || iuser=="*") {
            alert("Invalid username or password");
            return false;
        }
        
    } 