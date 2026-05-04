// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){
  const hornSelect = document.getElementById('horn-select');
  const mainImg = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  //Horn Selection -- correct image and audio 
  hornSelect.addEventListener('change', function(){

    const selected = hornSelect.value; 
    if (selected != 'select'){
      mainImg.src = `assets/images/${selected}.svg`;
      mainImg.alt = `${selected} visual`;
      audio.src = `assets/audio/${selected}.mp3`;
    }
  }); 

  //Volume 
  //zero volume -- mute icon (level 0)
  // 1 to < 33 -- level 1 
  // 33 to < 67 -- level 2 
  // 67 to up -- level 3
  volumeSlider.addEventListener('input', function(){
    const volumeSelected = volumeSlider.value; 
    audio.volume = volumeSelected/100; 
    if (volumeSelected == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } 
    else if (volumeSelected >= 1 && volumeSelected < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } 
    else if (volumeSelected >= 33 && volumeSelected < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } 
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
  //Play button 
  playButton.addEventListener('click', function(){
    if (hornSelect.value !== 'select'){
      audio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });

}  
