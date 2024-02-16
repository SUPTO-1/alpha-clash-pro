function addBackgroundColorById(id)
{
    const element = document.getElementById(id);
    element.classList.add('bg-red-500');
}
function removeBackgroundColorById(id)
{
    const element = document.getElementById(id);
    element.classList.remove('bg-red-500');
}
function getElementValueById(elementId)
{
   const element = document.getElementById(elementId);
   const elementValueString = element.innerText;
   const elementValue = parseInt(elementValueString);
   return elementValue;
}
function setTextElementValueById(elementId,elementValue)
{
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}
function getRandomAlphabet()
{
    const alphabetstring = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetstring.split("");
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;
}