const texts = ["webkers"];
var count = 0;
var index = 0;
var currenttext = '';
var letter = '';

function type()
{
    if(count == texts.length)
    {
        count = 0;
    }                                                                                                                                                                                                                                                                                                                                                                                               
    currenttext = texts[count];
    letter = currenttext.slice(0, ++index);

    document.querySelector('.top-box-text1').textContent = letter;

    if(letter.length == currenttext.length)
    {
        index = 0;
        count++;
    }
    setTimeout(type,400);
}

type();