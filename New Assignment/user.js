var login = [];
var y = window.localStorage.getItem('login');

login = JSON.parse(y);

if(login[1].session == 0){
    window.location = 'index.html';
}

function logout(){

    let login = [];
    login = JSON.parse(window.localStorage.getItem('login'));

    login[1].session = 0;
    window.localStorage.setItem('login',JSON.stringify(login));
        setTimeout(function(){
            window.location = "index.html";
        },2000);
}

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
function allLetters(name)
{
    var letters = /^[A-Za-z\s]+$/;
        if (!letters.test(name))
        {
            //alert('Please enter a valid email address.');
            return true;
        }
        return false;
}
function allNumbers(value)
{
    var numbers = /^[0-9]+$/;
        if (!numbers.test(value))
        {
            //alert('Please enter a valid email address.');
            return true;
        }
        return false;
}
function search_person(){
    var inp = document.getElementById('search_input').value;
    //alert(inp);
    var z = window.localStorage.getItem("emps");
    z = JSON.parse(z);
    zlen = z.length;
    var tb = '<table><tr><th>Name</th><th>Age</th><th>Salary</th><th>Email</th><th>Remarks</th></tr>';
    var i;
    for ( i = 0 ; i < zlen ; i++ ) {
        var checkname = z[i].addname;
        var checkemail = z[i].addemail;
        //alert(checkname + ' ' +checkemail);
        if(checkname.includes(inp) || checkemail.includes(inp)) {
            tb += '<tr>';
            tb += '<td>' + z[i].addname + '</td>';
            tb += '<td>' + z[i].addage + '</td>';
            tb += '<td>' + z[i].addsalary + '</td>';
            tb += '<td>' + z[i].addemail + '</td>';
            tb += '<td>' + z[i].addremark + '</td>';
            tb += '</tr>';
        } else {
            continue;
        }
        

    }
    tb += '</table>';
    document.getElementById('show_search').innerHTML = tb;
}


var submit = document.getElementById("submit");
submit.onclick = function () {


    //alert('prateek');
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var salary = document.getElementById('salary').value;
    var email = document.getElementById('email').value;
    var remarks = document.getElementById('remarks').value;

    

    if(name == ''){

        document.getElementById('login_success').style.display='none';
        document.getElementById('login_failed').style.display='block';
        setTimeout(function(){
            document.getElementById('login_failed').style.display='none';
           
        },3000);
        document.getElementById('name_empty').style.display = 'block';
        document.getElementById('age_empty').style.display = 'none';
        document.getElementById('salary_empty').style.display = 'none';
        document.getElementById('email_empty').style.display = 'none';
        document.getElementById('remark_empty').style.display = 'none';

    }
    else{
         if(allLetters(name)){

            document.getElementById('login_success').style.display='none';
            document.getElementById('login_failed').style.display='block';
            setTimeout(function(){
                document.getElementById('login_failed').style.display='none';
               
            },3000);
            document.getElementById('name_error').style.display = 'block';
            document.getElementById('name_empty').style.display = 'none';
            document.getElementById('age_empty').style.display = 'none';
            document.getElementById('salary_empty').style.display = 'none';
            document.getElementById('email_empty').style.display = 'none';
            document.getElementById('remark_empty').style.display = 'none';
         } else {

            if(age == ''){
                document.getElementById('login_success').style.display='none';
                document.getElementById('login_failed').style.display='block';
                setTimeout(function(){
                    document.getElementById('login_failed').style.display='none';
                   
                },3000);
                document.getElementById('name_error').style.display = 'none';
                document.getElementById('name_empty').style.display = 'none';
                document.getElementById('age_empty').style.display = 'block';
                document.getElementById('salary_empty').style.display = 'none';
                document.getElementById('email_empty').style.display = 'none';
                document.getElementById('remark_empty').style.display = 'none';
            }
            else{
                
                if(allNumbers(age)){

                    document.getElementById('login_success').style.display='none';
                    document.getElementById('login_failed').style.display='block';
                    setTimeout(function(){
                        document.getElementById('login_failed').style.display='none';
                       
                    },3000);
                    document.getElementById('name_error').style.display = 'none';
                    document.getElementById('name_empty').style.display = 'none';
                    document.getElementById('age_empty').style.display = 'none';
                    document.getElementById('age_error').style.display = 'block';
                    document.getElementById('salary_empty').style.display = 'none';
                    document.getElementById('email_empty').style.display = 'none';
                    document.getElementById('remark_empty').style.display = 'none';
                } else {

                        if(salary == ''){
                            
                            document.getElementById('login_success').style.display='none';
                            document.getElementById('login_failed').style.display='block'; 
                            setTimeout(function(){
                                document.getElementById('login_failed').style.display='none';
                               
                            },3000); 
                            document.getElementById('age_empty').style.display = 'none';
                            document.getElementById('age_error').style.display = 'none';
                            document.getElementById('salary_empty').style.display = 'block';
                            document.getElementById('email_empty').style.display = 'none';
                            document.getElementById('remark_empty').style.display = 'none';
                        } else {
                            
                                if(allNumbers(salary)){
                                    
                                    document.getElementById('login_success').style.display='none';
                                    document.getElementById('login_failed').style.display='block';
                                    setTimeout(function(){
                                        document.getElementById('login_failed').style.display='none';
                                       
                                    },3000);
                                    document.getElementById('age_empty').style.display = 'none';
                                    document.getElementById('age_error').style.display = 'none';
                                    document.getElementById('salary_empty').style.display = 'none';
                                    document.getElementById('salary_error').style.display = 'block';
                                    document.getElementById('email_empty').style.display = 'none';
                                    document.getElementById('remark_empty').style.display = 'none';

                                    } else {

                                        if(email == ''){
                                            
                                            document.getElementById('login_success').style.display='none';
                                            document.getElementById('login_failed').style.display='block';
                                            setTimeout(function(){
                                                document.getElementById('login_failed').style.display='none';
                                               
                                            },3000);
                                            document.getElementById('salary_empty').style.display = 'none';
                                            document.getElementById('salary_error').style.display = 'none';
                                            document.getElementById('email_empty').style.display = 'block';
                                            document.getElementById('remark_empty').style.display = 'none';
                                        }
                                        else{
                                            
                                            if(validateEmail(email)){
                                                
                                                document.getElementById('login_success').style.display='none';
                                                document.getElementById('login_failed').style.display='block';
                                                setTimeout(function(){
                                                    document.getElementById('login_failed').style.display='none';
                                                   
                                                },3000);
                                                document.getElementById('salary_empty').style.display = 'none';
                                                document.getElementById('salary_error').style.display = 'none';
                                                document.getElementById('email_empty').style.display = 'none';
                                                document.getElementById('email_error').style.display = 'block';
                                                document.getElementById('remark_empty').style.display = 'none';
                                            } else {

                                                if(remarks == ''){
                                                    document.getElementById('login_success').style.display='none';
                                                    document.getElementById('login_failed').style.display='block';
                                                    setTimeout(function(){
                                                        document.getElementById('login_failed').style.display='none';
                                                       
                                                    },3000);
                                                    document.getElementById('email_empty').style.display = 'none';
                                                    document.getElementById('email_error').style.display = 'none';
                                                    document.getElementById('remark_empty').style.display = 'block';
                                                } else {

                                                    document.getElementById('login_success').style.display='block';
                                                    document.getElementById('login_failed').style.display='none';
                                                    setTimeout(function(){
                                                        document.getElementById('login_success').style.display='none';
                                                       
                                                    },3000);

                                                    document.getElementById('email_empty').style.display = 'none';
                                                    document.getElementById('email_error').style.display = 'none';
                                                    document.getElementById('remark_empty').style.display = 'none';
                                                    var emps = [];
                                                    var y = window.localStorage.getItem("emps");
                                                    if (y) {
                                                        emps = JSON.parse(y);;
                                                    }
                                                    console.log(emps);
                                                    emps.push({
                                                        "addname" : name, "addage" : age, "addsalary" : salary, "addemail" : email, "addremark" : remarks
                                                    });
                                                    console.log(emps);
                                                
                                                    window.localStorage.setItem("emps", JSON.stringify(emps));
                                                    location.reload();
                                                
                                                }
                                            }
                                        }
                                    }
                            }
                        }
                    }
                    
            }
        }
}

var submit_edit = document.getElementById("submit_edit");
submit_edit.onclick = function () {
    //alert('prateek');
    var key = document.getElementById('index_object').value;
    var name = document.getElementById('name_edit').value;
    var age = document.getElementById('age_edit').value;
    var salary = document.getElementById('salary_edit').value;
    var email = document.getElementById('email_edit').value;
    var remarks = document.getElementById('remarks_edit').value;

    var emps = [];
    var y = window.localStorage.getItem("emps");
    emps = JSON.parse(y);
    if(confirm("Are you Sure you want to edit?")){
        emps[key].addname = name;
        emps[key].addage = age;
        emps[key].addsalary = salary;
        emps[key].addemail = email;
        emps[key].addremark = remarks;

        console.log(emps);

        window.localStorage.setItem("emps", JSON.stringify(emps));

        document.getElementById('container_edit').style.display = 'none';
        edit_delete_call();
    }

    
    //location.reload();

}
function list_display(){
    var x = window.localStorage.getItem('emps');
    x = JSON.parse(x);
    var xlen =x.length;
    //alert(xlen);
    var i;
    var t = '<table><tr><th>Name</th><th>Age</th><th>Salary</th><th>Email</th><th>Remarks</th></tr>';
    for ( i = 0 ; i < xlen ; i++ ) {

        t += '<tr>';
        t += '<td>' + x[i].addname + '</td>';
        t += '<td>' + x[i].addage + '</td>';
        t += '<td>' + x[i].addsalary + '</td>';
        t += '<td>' + x[i].addemail + '</td>';
        t += '<td>' + x[i].addremark + '</td>';
        t += '</tr>';
    }

    t += '</table>';

    document.getElementById('tab').innerHTML = t;
}
function edit_delete_call(){

    var x = window.localStorage.getItem('emps');
    x = JSON.parse(x);
    var xlen =x.length;
    //alert(xlen);
    var i;
    var t = '<table><tr><th>Name</th><th>Age</th><th>Salary</th><th>Email</th><th>Remarks</th><th>Edit / Delete</th></tr>';
    for ( i = 0 ; i < xlen ; i++ ) {

        t += '<tr>';
        t += '<td>' + x[i].addname + '</td>';
        t += '<td>' + x[i].addage + '</td>';
        t += '<td>' + x[i].addsalary + '</td>';
        t += '<td>' + x[i].addemail + '</td>';
        t += '<td>' + x[i].addremark + '</td>';
        t += '<td><button id="edit_' + i + '" onclick="edit(' + i + ');">Edit</button><button id="delete_' + i + '" onclick="del(' + i + ');">Delete</button>'
        t += '</tr>';
    }

    t += '</table>';

    document.getElementById('show_table').innerHTML = t;

}

function edit(index){

    var x = window.localStorage.getItem('emps');
    x = JSON.parse(x);
    var xlen =x.length;
    //alert(xlen);
    document.getElementById('index_object').value = index;
    document.getElementById('name_edit').value = x[index].addname;
    document.getElementById('age_edit').value = x[index].addage;
    document.getElementById('salary_edit').value = x[index].addsalary;
    document.getElementById('email_edit').value = x[index].addemail;
    document.getElementById('remarks_edit').value = x[index].addremark;
    
    document.getElementById('container_edit').style.display = 'block';

}

function del(index){

    emps = [];
    var x = window.localStorage.getItem('emps');
    emps = JSON.parse(x);

    if(confirm("Are You Sure you want to delete?")){
        emps.splice(index, 1);
        window.localStorage.setItem("emps", JSON.stringify(emps));
    }

    edit_delete_call();

}




