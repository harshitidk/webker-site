var c = 0 ;
var click =0 ;
function slide()
{
    var links = document.querySelector('.nav-links');
    var burger = document.querySelector('.burger');
    var bur1 = document.querySelector('.bur1');
    var bur2 = document.querySelector('.bur2');
    var bur3 = document.querySelector('.bur3');

    burger.addEventListener('click', function()
    {
        click++;
        if(click==3)
        {
            click = 1;
            links.classList.toggle('toggle-right');
            links.classList.toggle('toggle-left');
        }
        c++;
        if(c%2==0)
        {
            links.classList.toggle('toggle-right');
        }
        else 
        {
            links.classList.toggle('toggle-left');
        }
    })
}

slide();