function validateEmail(email)
{
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(email))
        {
            //alert('Please enter a valid email address.');
            return true;
        }
        return false;
}

var login = [];
login = JSON.parse(window.localStorage.getItem('login'));
var correctEmail = login[0].email;
var correctPassword = login[0].passowrd;

var x= login[1].session;
//alert(x);
if(x == 1){
    document.getElementById('logged_in').style.display = 'block';
    
    setTimeout(function(){
        window.location = "image.html";
    },2000);
}


//alert(correctEmail + ' ' + correctPassword);
//document.getElementById('logged_in').style.display = 'none';
document.getElementById('login_success').style.display = "none";
document.getElementById('login_failed').style.display = "none";
function submit(){

    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;

    if(inputEmail == ''){
        document.getElementById('login_failed').style.display = "none";
        document.getElementById('email_empty').style.display = "block";
        document.getElementById('email_error').style.display = "none";
        document.getElementById('password_empty').style.display = "none";
    } else {
        document.getElementById('email_empty').style.display = "none";
        if(validateEmail(inputEmail)){
            document.getElementById('email_error').style.display = "block";
        } else {
            document.getElementById('email_error').style.display = "none";
            if(inputPassword == ''){
                document.getElementById('password_empty').style.display = "block";
            } else {
                document.getElementById('password_empty').style.display = "none";
                if(correctEmail == inputEmail && correctPassword == inputPassword){
                    
                    document.getElementById('login_success').style.display = "block";
                        document.getElementById('login_failed').style.display = "none";
                        login[1].session = 1;
                        window.localStorage.setItem('login', JSON.stringify(login));
                    setTimeout(function(){
                        window.location = 'user.html';    
                    }   , 2000);
                    
                    
                }
                else{
                        document.getElementById('login_success').style.display = "none";
                        document.getElementById('login_failed').style.display = "block";
                }
            }
        }
    }
    
    
    
    
    
    
    
}
 
function reset(){
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login_success').style.display = "none";
document.getElementById('login_failed').style.display = "none";
}