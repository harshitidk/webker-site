var d = 0;
function change_color()
{
    var burger = document.querySelector('.burger');
    var bur = document.querySelectorAll('.bur');
    
    burger.addEventListener('click',function()
    {
        d++;
        bur.forEach(li => {
            if(d%2==0)
            {
                li.style.backgroundColor = 'rgb(250, 37, 94)';
            }
            else 
            {
                li.style.backgroundColor = 'white';
            }
        })
    })
}

change_color();
