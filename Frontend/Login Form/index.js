var email = "prateek@cronj.com";
var password="Prateek";

document.getElementById('login_success').style.display = "none";
document.getElementById('login_failed').style.display = "none";
function submit(){
    
    if(email == document.getElementById('email').value && password == document.getElementById('password').value){
        
        document.getElementById('login_success').style.display = "block";
        document.getElementById('login_failed').style.display = "none";
        
        window.location = 'table.html';
    }
    else{
        document.getElementById('login_success').style.display = "none";
        document.getElementById('login_failed').style.display = "block";
    }
    
    
}
function reset(){
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login_success').style.display = "none";
document.getElementById('login_failed').style.display = "none";
}