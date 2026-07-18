var phonenumberinput = document.getElementById("lphone_number");
var passwordinput = document.getElementById("lpassword");


phonenumberinput.addEventListener('blur', function(e){
    var pattname = /^[0-9]+$/;
    var errspan = document.getElementById("lphonespan");

    if(phonenumberinput.value.length == 11)
    {
        if(!pattname.test(phonenumberinput.value))
        {
            errspan.textContent = "فیلد وارد شده صحیح نیست";
        }
        else
        {
            errspan.textContent = "";
        }
    }
    else
    {
            errspan.textContent = "شماره وارد شده معتبر نیست";
    }
    
})


passwordinput.addEventListener('blur', function(e){
    var pattname = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var errspan = document.getElementById("lpassspan");

    if(!pattname.test(passwordinput.value))
    {
        errspan.textContent = "رمز عبور عداقل باید 8 کاراکتر و یک حرف انگلیسی و عدد داشته باشد";
    }
    else
    {
        errspan.textContent = "";
    }
})


