// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImg = document.querySelector('#explore > img');
  let voices = [];

  //Populate the “Select Voice” 
  function populateSelectVoice(){
     voices = synth.getVoices();
     voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
     for (const voice of voices){
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
     }
  }
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateSelectVoice;
  }

  populateSelectVoice();

  talkButton.addEventListener('click', function(){
    if (!textArea.value.trim() || voiceSelect.value === 'select'){
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices){
      if (voice.name === selectedOption){
         utterThis.voice = voice;
      }
    }

    utterThis.addEventListener('start', function(){
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Smiling face with a open mouth';
    });
    utterThis.addEventListener('end', function(){
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face';
     });
    synth.speak(utterThis); 
  });
}