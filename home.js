function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

let x = 0;

function socialtech()
{
    x = 1;
    show();
}


function supplychain(){

    x=2;
    show();
}

function ott(){

    x=3;
    show();
}

function fintech(){

    x=4;
    show();
}

function healthtech(){

    x=5;
    show();
}

function ecommerce(){

    x=6;
    show();
}

function travel(){

    x=7;
    show();
}

function edtech(){

    x=8;
    show();
}



function show()
{
    console.log(x)
    switch(x)
    {
        case 1:
            document.getElementById("globalimg").src = "Social Networks .jpg"
            break;
        case 2:
            
            document.getElementById("globalimg").src ="Supply Chain 002.jpg"
            break;
        case 3:
            document.getElementById("globalimg").src = "Media 003.jpg"
            break;
        case 4:
            document.getElementById("globalimg").src = "Fintech 004.jpg"
            break;
        case 5:
            document.getElementById("globalimg").src = "Health Tech.jpg"
            break; 
        case 6:
            document.getElementById("globalimg").src = "E-commerce.jpg"
            break; 
        case 7:
            document.getElementById("globalimg").src = "Travel Tech.jpg"
            break;
        case 8:
            document.getElementById("globalimg").src = "Edutech.jpg"
            break;    
        

    }
}