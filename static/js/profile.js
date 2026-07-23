var nameinput = document.getElementById("name");
var lastnameinput = document.getElementById("last_name");
var phonenumberinput = document.getElementById("phone_number");
var emailinput = document.getElementById("email");
var addressinput = document.getElementById("address");

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

addressinput.addEventListener('blur', function(e){
    var pattname = /^[آ-ی0-9\s]+$/;
    var errspan = document.getElementById("address_span");

    if(addressinput.value.length > 10 && addressinput.value.length < 200)
    {
        if(!pattname.test(addressinput.value))
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
        errspan.textContent = "فیلد وارد شده صحیح نیست";
    }
    
})