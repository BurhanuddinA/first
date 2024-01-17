

let count = 0;
const number = document.querySelector('.number');




function plus()
{
count++;
number.textContent= count;

}


function minus(){
if(count !==0)
{

    count--;
number.textContent = count;

}
}

function reset()
{

    count = 0;
    number.textContent = count;
    
}