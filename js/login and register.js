/*Create by ZC*/
var bool1 = true, bool2 = true, bool3 = true, bool4 =true;
function IDNorm(x) {
    var uid = document.getElementById(x).value
    var PN = /^\w{4,8}$/
    if (PN.test(uid)) {
        bool1 = false;
        document.getElementById("userid_zs").innerHTML = "<font color=#008100> \u2714";
    }
    else {
        bool1 = true;
        document.getElementById("userid_zs").innerHTML = "<font color=red> \u2716";
    }
}
function PwdNorm(x) {
    var pwd1 = document.getElementById(x).value
    var PN = /^\w{8,16}$/;
    if (PN.test(pwd1)) {
        bool2 = false;
        document.getElementById("pwd1_zs").innerHTML = "<font color=#008100> \u2714";
    }
    else {
        bool2 = true;
        document.getElementById("pwd1_zs").innerHTML = "<font color=red> \u2716";
    }
}
function NameNorm(x) {
    var una = document.getElementById(x).value
    var PN = /.+/;
    if (PN.test(una)) {
        bool3 = false;
        document.getElementById("una_zs").innerHTML = "<font color=#008100> \u2714";
    }
    else {
        bool3 = true;
        document.getElementById("una_zs").innerHTML = "<font color=red> \u2716";
    }
}
function PwdValidate(x) {
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById(x).value;
    if(pwd1 == pwd2) 
    {
        bool4 = false;
        document.getElementById("pwd2_zs").innerHTML = "<font color=#008100> \u2714";       
    }
    else {
        bool4 = true;
        document.getElementById("pwd2_zs").innerHTML = "<font color=red> \u2716";
    }
}
function LoginIDNorm(x) {
    var uid = document.getElementById(x).value
    var PN = /^\w{4,8}$/
    if (PN.test(uid)) {
        bool1 = false;
        bool2 = false;
        document.getElementById("IDdiv").style.borderColor = "#15F2F0";
    }
    else {
        bool1 = true;
        bool2 = true;
        document.getElementById("IDdiv").style.borderColor = "#FF0000";
    }
}
function LoginPwdNorm(x) {
    var uid = document.getElementById(x).value
    var PN = /^\w{8,16}$/
    if (PN.test(uid)) {
        bool3 = false;
        bool4 = false;
        document.getElementById("PWdiv").style.borderColor = "#15F2F0";
    }
    else {
        bool3 = true;
        bool4 = true;
        document.getElementById("PWdiv").style.borderColor = "#FF0000";
    }
}
function BtnDisabled() {
    if (bool1 || bool2 || bool3 || bool4)
        document.getElementById("button").disabled = true;
    else document.getElementById("button").disabled = false;
}
setInterval("BtnDisabled()", "1000");