'use strict';
function swapper(){
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value;
    let temp=to;
    document.getElementById('to').selectedIndex=from-1;
    document.getElementById("from").selectedIndex = temp-1;

    from=document.getElementById('in').value;
    to=document.getElementById('out').value;
    temp=to;
    document.getElementById('out').value=from;
    document.getElementById('in').value=temp;
    
    document.getElementById("in").style.backgroundColor="#75e6da";
    document.getElementById("in").style.border="none";
}
function convert(){
    let finalyOut;
    const getVal=document.getElementById('in').value;
    if(document.getElementById("from").selectedIndex ==0)
    finalyOut=dec(getVal);
    else if(document.getElementById("from").selectedIndex ==1)
    finalyOut=hex(getVal);
    else if(document.getElementById("from").selectedIndex ==2)
    finalyOut=oct(getVal);
    else
    finalyOut=bin(getVal);

    if(finalyOut==""||finalyOut=="NaN")
    {
        document.getElementById("in").style.backgroundColor="blue";
        document.getElementById("in").style.border="solid";
        document.getElementById("in").style.borderColor = "red";
        document.getElementById('out').value=null;
    }
    else
    {
        document.getElementById("in").style.backgroundColor="#75e6da";
        document.getElementById("in").style.border="none";
        document.getElementById('out').value=finalyOut;
    }
}
function dec(getVal)
{
    const check="0123456789";
    for(let i=0;i<getVal.length;i++)
    if(!(check.includes(getVal.charAt(i))))
       return ("");

    if(document.getElementById('to').selectedIndex==1)
        return dec2hex(getVal);
    else if(document.getElementById('to').selectedIndex==2)
        return dec2oct(getVal);
    else if(document.getElementById('to').selectedIndex==3)
        return dec2bin(getVal);
    else
        return getVal;

        function dec2bin(x)
        {
            return parseInt(x,10).toString(2);
        }
        function dec2hex(x)
        {
            return parseInt(x,10).toString(16);
        }
        function dec2oct(x)
        {
            return parseInt(x,10).toString(8);
        }
}
function oct(getVal)
{
    const check="012345678";
    for(let i=0;i<getVal.length;i++)
    if(!(check.includes(getVal.charAt(i)))) 
        return ("");

    if(document.getElementById('to').selectedIndex==0)
        return oct2dec(getVal);
    else if(document.getElementById('to').selectedIndex==1)
        return oct2hex(getVal);
    else if(document.getElementById('to').selectedIndex==3)
        return oct2bin(getVal);
    else
        return getVal;

    function oct2dec(x)
    {
        return parseInt(x,8).toString(10);
    }
    function oct2hex(x)
    {
        return parseInt(x,8).toString(16);
    }
    function oct2bin(x)
    {
        return parseInt(x,8).toString(2);
    }
}
function hex(getVal)
{
    getVal=getVal.toUpperCase();
    const check="0123456789ABCDEF";
    for(let i=0;i<getVal.length;i++)
    if(!(check.includes(getVal.charAt(i))))
        return ("");

    if(document.getElementById('to').selectedIndex==0)
        return hex2dec(getVal);
    else if(document.getElementById('to').selectedIndex==2)
        return hex2oct(getVal);
    else if(document.getElementById('to').selectedIndex==3)
        return hex2bin(getVal);
    else
        return getVal;

    function hex2dec(x)
    {
        return parseInt(x,16).toString(10);
    }
    function hex2oct(x)
    {
        return parseInt(x,16).toString(8);
    }
    function hex2bin(x)
    {
        return parseInt(x,16).toString(2);
    }
}
function bin(getVal)
{
    const check="01";
    for(let i=0;i<getVal.length;i++)
    if(!(check.includes(getVal.charAt(i))))
        return ("");

    if(document.getElementById('to').selectedIndex==0)
        return bin2dec(getVal);
    else if(document.getElementById('to').selectedIndex==1)
        return bin2hex(getVal);
    else if(document.getElementById('to').selectedIndex==2)
        return bin2oct(getVal);
    else
        return getVal;

    function bin2dec(x)
    {
        return parseInt(x,2).toString(10);
    }
    function bin2hex(x)
    {
        return parseInt(x,2).toString(16);
    }
    function bin2oct(x)
    {
        return parseInt(x,2).toString(8);
    }
}
    // Written and Debugged by Kartikey Tiwari | kartikey0402@gmail.com
