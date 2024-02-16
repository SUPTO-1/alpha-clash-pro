function continueGame()
{
    const alphabet = getRandomAlphabet();
    const currentScreen = document.getElementById('current-screen');
    currentScreen.innerHTML = alphabet;

    // set addBackgroundColorById 
    addBackgroundColorById(alphabet);
}
function play()
{
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //showing home section
    const playSection = document.getElementById('play-ground');
    playSection.classList.remove('hidden');
    continueGame();
}