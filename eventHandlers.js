



const noiseArray = [ {name: 'GreatIdea', path: 'audioFiles/greatIdea.mp3'}, {name: 'GreatIdea2', path: 'audioFiles/greatIdea2.mp3'} ]





for (let i = 0; i < noiseArray.length; i++) {
  $('.big-button-holder').append(`<div class="button-box"><button type="button" path=${noiseArray[i].path} class="btn btn-primary" id=${noiseArray[i].name}>${noiseArray[i].name}</button></div>`);

  $(`#${noiseArray[i].name}`).on('click', function(e) {

    console.log(e.target.id)
    console.log(e.target.attributes.path.value)
    const newAudio = new Audio(e.target.attributes.path.value);

    newAudio.play();

    $('button').on('click', function(){
      newAudio.pause();
      newAudio.currentTime = 0;
      });

  });
}
