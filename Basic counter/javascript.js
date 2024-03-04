let counter = document.querySelector('#brojac');

function reset()
{
    if(counter.value == 0)
        alert('You already reset the value!');
    else
        counter.value=0;
    LowerHigherEqual();
}

function increase(){ counter.value = parseFloat(counter.value)+1; LowerHigherEqual();}

function decrease(){ counter.value = parseFloat(counter.value)-1; LowerHigherEqual();}

function LowerHigherEqual()
{
    if(counter.value < 0)
    {
        counter.style.color = 'red';
    }
    else if(counter.value > 0)
    {
        counter.style.color = 'blue';
    }
    else
        counter.style.color = 'black';
}