function playsound(animalName){
    const audio = new Audio(`sounds/${animalName}.mp3`);
    audio.play();
}