var alllabels = document.getElementById("MyLabels");
var childDivs = alllabels.getElementsByClassName('MainLabel');
var totalchilds = childDivs.length;
var iterator = 0;

var rightbutton = document.getElementById("MoveRight");
var leftbutton = document.getElementById("MoveLeft");

if (totalchilds > 0) {
    childDivs[0].style.display = 'block';
}

if (totalchilds > 1) {
    rightbutton.style.display = 'block';
}

function NextLabel () {
    if (iterator < totalchilds)
    {   
        childDivs[iterator].style.display = 'none';
        iterator += 1;
        childDivs[iterator].style.display = 'block';

        if (iterator === 1)
        {
            leftbutton.style.display = 'block';
        }
        if (iterator === (totalchilds - 1))
        {
            rightbutton.style.display = 'none';
        }
        TheDropLabel = iterator;
    }
}

function PreviousLabel () {
    if (iterator >= 0)
    {   
        childDivs[iterator].style.display = 'none';
        iterator -= 1;
        childDivs[iterator].style.display = 'block';

        if (iterator === 0)
        {
            leftbutton.style.display = 'none';
        }
        if (iterator < (totalchilds - 1))
        {
            rightbutton.style.display = 'block';
        }
        TheDropLabel = iterator;
    }
}