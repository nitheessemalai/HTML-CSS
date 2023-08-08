function loginnextpage()
{
    location .replace("https://applications.psgcas.ac.in/")
}

function login(){
    debugger;
    var fristname=document.getElementById("fristname");
    var fristname=fristname.value;

    var lastname=document.getElementById("lasttname");
    var lastname=lastname.value;
    var phonenumber=document.getElementById("phonenumber");
    varphonenumber =phonenumber.value;
    var adders=document.getElementById("adders");
    var adders=adders.value;
    if (fristname==null||fristname.length==0)
    {
        alert("please enter the fristname");
        return false;

    }
    else if (lastname==null||lastname==0)
    {
        alert("please enter the lastname");
        return false;

    }
    else if (phonenumber==null||phonenumber==0)
    {
        alert("please enter the phonenumber");
        return false;

    } else if (adders==null||adders==0)
    {
        alert("please enter the adders");
        return false;

    }
    if (fristname.tolowercase()=="nithees"&&lastname.tolowercase()=='n'&&phonenumber==2345678916&&adders.tolowercase()=="akp")
    {
        alert("login sucess");
        window.open("https://applications.psgcas.ac.in/")
    }
    else{
        alert("invaild data please enter vaild data");
    }

}


