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
function getRandomAlphabet()
{
    const alphabetstring = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetstring.split("");
    // console.log(alphabets);
    // get a random index 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;
}