var nameinput = document.getElementById("name");
var lastnameinput = document.getElementById("lastname");
var phonenumberinput = document.getElementById("phone_number");
var emailinput = document.getElementById("email");
var passwordinput = document.getElementById("password");
var confirmpasswordinput = document.getElementById("confirm_pass");

confirmpasswordinput.addEventListener('blur', function(e){
    var pattname = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var errspan = document.getElementById("conpassspan");
    if(confirmpasswordinput.value != passwordinput.value)
    {
        errspan.textContent = "این فیلد با پسورد یکی نیست";
    }
    else
    {
        errspan.textContent = "";
    }
    
})

nameinput.addEventListener('blur', function(e){
    var pattname = /^[آ-ی\s]+$/;
    var errspan = document.getElementById("namespan");

    if(nameinput.value.length > 3 && nameinput.value.length < 20)
    {
        if(!pattname.test(nameinput.value))
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
        errspan.textContent = "این فیلد باید حداقل 4 حرف باشد و بیشتر از 20 حرف نباشد";
    }
    
})

lastnameinput.addEventListener('blur', function(e){
    var pattname = /^[آ-ی\s]+$/;
    var errspan = document.getElementById("lastnamespan");

    if(lastnameinput.value.length > 3 && lastnameinput.value.length < 30)
    {
        if(!pattname.test(lastnameinput.value))
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
        errspan.textContent = "این فیلد باید حداقل 4 حرف باشد و بیشتر از 20 حرف نباشد";
    }
    
})

phonenumberinput.addEventListener('blur', function(e){
    var pattname = /^[0-9]+$/;
    var errspan = document.getElementById("phonespan");

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

emailinput.addEventListener('blur', function(e){
    var pattname = /^[^\s@]+@[A-Za-z]+\.[A-Za-z]+$/;
    var errspan = document.getElementById("emailspan");

        if(!pattname.test(emailinput.value))
        {
            errspan.textContent = "فیلد وارد شده صحیح نیست";
        }
        else
        {
            errspan.textContent = "";
        }
    
})

passwordinput.addEventListener('blur', function(e){
    var pattname = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var errspan = document.getElementById("passspan");

    if(!pattname.test(passwordinput.value))
    {
        errspan.textContent = "رمز عبور عداقل باید 8 کاراکتر و یک حرف انگلیسی و عدد داشته باشد";
    }
    else
    {
        errspan.textContent = "";
    }
})


