let last=null;
function restart(){
    window.location=("index.html");
}
function valuePass(digit,type)
{
    let prev = document.getElementById('input').value
    if (last == type && type == "op") {
        alert("Two operators together are not allowed")
    }

    else {
        if (prev == '') {
            if (digit == '**' || digit == '*' || digit == '+' || digit == '-' || digit == '%' || digit == '/' || digit == '.') {
                alert("Please start with a digit")
            }
            else {
                 document.getElementById('input').value=prev+digit;
                 document.getElementById('input').style.fontFamily="Bold";
                 document.getElementById('input').style.backgroundColor='bisque';
                 document.getElementById('input').style.boxShadow="2px 2px 10px bisque";
                 last = type;
            }

        }
        else {
            document.getElementById('input').value=prev+digit;
            document.getElementById('input').style.fontFamily="Bold";
            document.getElementById('input').style.backgroundColor='bisque';
            document.getElementById('input').style.boxShadow="2px 2px 10px bisque";
            last = type;
        }


    }
        
}
function lastDigit(){
    let prev=document.getElementById('input').value;
    document.getElementById('input').value = prev.slice(0, prev.length - 1);
}
function operation()
{
    if(document.getElementById('input').value=='')
    {
    }
    else{
    try{
    let value=document.getElementById('input').value
    let result=eval(value);
    document.getElementById('input').value=result;
    }
    catch
    {
        alert("something went wrong");
        window.location=("index.html");
    }
}
}