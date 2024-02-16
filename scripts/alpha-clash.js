function handleKeyboardEvent(event)
{
    const playerPress = event.key;
    const currentAlphabet = document.getElementById('current-screen').innerText;
    const expectedPlayerPress = currentAlphabet.toLowerCase();
    console.log(expectedPlayerPress,playerPress);
    if(playerPress === expectedPlayerPress)
    {
        console.log('correct');

        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore);
        removeBackgroundColorById(expectedPlayerPress);
        continueGame();
    }
    else
    {
        const currentLife = getElementValueById('life');
        const newLife = currentLife - 1;
        if(newLife==0)
        {
            console.log('game over');
            removeBackgroundColorById(expectedPlayerPress);
            const playSection = document.getElementById('play-ground');
            playSection.classList.add('hidden');
            const finalScore = document.getElementById('final-score');
            finalScore.classList.remove('hidden');
            const finalScoreValue = getElementValueById('current-score');
            const showScore = document.getElementById('final-score-value');
            showScore.innerText = finalScoreValue;
        }
        setTextElementValueById('life',newLife);
    }
}
document.addEventListener('keyup',handleKeyboardEvent);

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
    const finalScore = document.getElementById('final-score');
    finalScore.classList.add('hidden');
    //showing home section
    const playSection = document.getElementById('play-ground');
    playSection.classList.remove('hidden');
    setTextElementValueById('current-score',0);
    setTextElementValueById('life',5);
    continueGame();
}