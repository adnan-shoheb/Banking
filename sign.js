
function validate(form) {
 
    var fname=document.getElementById("fn").value
    var lname=document.getElementById("ln").value
    var email=document.getElementById("email").value
    var pnum=document.getElementById("pn").value
    var pass=document.getElementById("psw").value
    var cpass=document.getElementById("cpd").value
    var date=document.getElementById("date").value

    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (fname.length==0) {
            document.getElementById("one").innerHTML="<br> * Please fill the name input field"
            return false
        }
        else if(!(isNaN(fname))){
            document.getElementById("one").innerHTML="<br> * Please enter correct name"
            return false
        }
        else if (fname.length<3) {
            document.getElementById("one").innerHTML="<br> * Please enter minimum 3 letter"
            return false
        }
        else if (fname.lenght>20) {
            document.getElementById("one").innerHTML="<br> * Name should be less than 20"
            return false
        }
        if (lname.length==0) {
            document.getElementById("two").innerHTML="<br> * Please enter the last name"
            return false
        }
        else if(!(isNaN(lname))){
            document.getElementById("two").innerHTML="<br> * Please enter correct name"
            return false
        }
            else if (lname.length<3) {
                document.getElementById("two").innerHTML="<br> * Please enter minimum 3 letter"
                return false
            }
            else if (lname.lenght>15) {
                document.getElementById("two").innerHTML="<br> * Letter should be less than 15"
                return false
            }
            if(email.length==0){
                document.getElementById("emailId").innerHTML="<br> * Email cannot be empty"
            return false
            }
            else if(!(/\w+([\.]*)\w+(@gmail.com)|(@yahoo.com)|(@hotmail.com)$/.test(email))){
                document.getElementById("emailId").innerHTML ="<br> * Invalid email format"
                return false
            }
             if (pnum.length==0) {
                document.getElementById("three").innerHTML="<br> * Number is not blank"
                return false
            }
            else if (isNaN(pnum)) {
                document.getElementById("three").innerHTML="<br> * Please enter number"
                return false
            }
       
           else if (pnum.length>10 || pnum.length<10) {
                document.getElementById("three").innerHTML="<br> * Number should be 10 digit "
                return false
            }
            
            else if (pnum.charAt(0)<6) {
                document.getElementById("three").innerHTML="<br> * Number should start from 6 to 9"
                return false
            }
            if((form.gender[0].checked==false)&&(form.gender[1].checked==false)&&(form.gender[2].checked==false))
            {
                document.getElementById("four").innerHTML = "<br> * Select the gender"
                return false
            }
            if(date.length==0){
                document.getElementById("dateMsg").innerHTML="* Please enter date <br>"
                return false
            }
            else if(!(/[0-9]{2}([\/])+[0-9]{2}([\/])+[0-9]{4}/.test(date))){
                document.getElementById("dateMsg").innerHTML="* Incorrect date format <br>"
                return false    
            }
           if (pass.length==0) {
                document.getElementById("five").innerHTML="<br> * enter password"
                return false
            }
           else if(pass.length<3) {
                document.getElementById("five").innerHTML="<br> * not less than 3"
                return false
            }
           else if (pass!=cpass) {
                document.getElementById("six").innerHTML="<br> * password must be same"
                return false
            }
    }

// var stateObject = {
//     "India": {
//             "Delhi": ["new Delhi", "North Delhi"],
//             "Kerala": ["Thiruvananthapuram", "Palakkad"],
//             "Goa": ["North Goa", "South Goa"],
//     },
//     "Australia": {
//     "South Australia": ["Dunstan", "Mitchell"],
//     "Victoria": ["Altona", "Euroa"]
//     }, 
//     "Canada": {
//     "Alberta": ["Acadia", "Bighorn"],
//     "Columbia": ["Washington", "Columbo"]
//     }
//     }
//     window.onload = function () {
//     var countySel = document.getElementById("countySel"),
//     stateSel = document.getElementById("stateSel"),
//     districtSel = document.getElementById("districtSel");
//     for (var country in stateObject) 
//     {
//         countySel.options[countySel.options.length] = new Option(country)
//     }
    
//     countySel.onchange = function () {
//     stateSel.length = 1; // remove all options bar first
//     districtSel.length = 1; // remove all options bar first
//     if (this.selectedIndex < 1) return; // done 
//     for (var state in stateObject[this.value]) {
//     stateSel.options[stateSel.options.length] = new Option(state, state);
//     }
//     }
    
//     stateSel.onchange = function () {
//     districtSel.length = 1; // remove all options bar first
//     if (this.selectedIndex < 1) return; // done 
//     var district = stateObject[countySel.value][this.value];
//     for (var i = 0; i < district.length; i++) {
//     districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
//     }
//     }
    // countySel.onchange(); // reset in case page is reloaded
    // }
    
    function toggle(){
    var showPass = document.getElementById("psw")

    if(showPass.type==="password") {
        showPass.type="text"
        document.getElementById("showHide").innerHTML = "Hide"
    }
    else{
        document.getElementById("showHide").innerHTML = "Show"
        showPass.type="password"
    }
}
function toggle2(){
    var showPass2 = document.getElementById("cpd")

    if(showPass2.type==="password") {
        showPass2.type="text"
        document.getElementById("showHide2").innerHTML = "Hide"
    }
    else{
        document.getElementById("showHide2").innerHTML = "Show"
        showPass2.type="password"
    }
}