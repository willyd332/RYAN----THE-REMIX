const noiseArray = [{
  name: 'AddExtraStuff',
  path: 'audioFiles/addExtraStuff.mp3'
}, {
  name: 'AllYouNeed',
  path: 'audioFiles/allYouNeed.mp3'
}, {
  name: 'AndBAM',
  path: 'audioFiles/andBam.mp3'
}, {
  name: 'Authentication',
  path: 'audioFiles/authentication.mp3'
}, {
  name: 'ButInTheory',
  path: 'audioFiles/butInTheory.mp3'
}, {
  name: 'Correct',
  path: 'audioFiles/correct.mp3'
}, {
  name: 'CRUDFunctionality',
  path: 'audioFiles/crudFunctionality.mp3'
}, {
  name: 'DeadSimple',
  path: 'audioFiles/deadSimple.mp3'
}, {
  name: 'DontSufferInSilence',
  path: 'audioFiles/dontSufferInSilence.mp3'
}, {
  name: 'Exactly',
  path: 'audioFiles/exaactly.mp3'
}, {
  name: 'GoodDayForDonuts',
  path: 'audioFiles/goodDayForDonuts.mp3'
}, {
  name: 'GoodQuestion',
  path: 'audioFiles/goodQuestion.mp3'
}, {
  name: 'UseGoogle',
  path: 'audioFiles/google.mp3'
}, {
  name: 'GreatGoForIt',
  path: 'audioFiles/greatGoForIt.mp3'
}, {
  name: 'GreatIdea',
  path: 'audioFiles/greatIdea.mp3'
}, {
  name: 'Grrreat',
  path: 'audioFiles/grrreat.mp3'
}, {
  name: 'IdkWhatever',
  path: 'audioFiles/idkWhatever.mp3'
}, {
  name: 'Included',
  path: 'audioFiles/Included.mp3'
}, {
  name: 'JustForMVP',
  path: 'audioFiles/JustForMVP.mp3'
}, {
  name: 'LikeWithBottom',
  path: 'audioFiles/likeWithBottom.mp3'
}, {
  name: 'LikeYeah',
  path: 'audioFiles/likeYeh.mp3'
}, {
  name: 'LoggingIn',
  path: 'audioFiles/loggingIn.mp3'
}, {
  name: 'LongerThanYouThink',
  path: 'audioFiles/longerThanYouThink.mp3'
}, {
  name: 'MostComfortable',
  path: 'audioFiles/mostComfortable.mp3'
}, {
  name: 'MyCupcake',
  path: 'audioFiles/myCupcake.mp3'
}, {
  name: 'NiceToHave',
  path: 'audioFiles/niceToHave.mp3'
}, {
  name: 'NiceCategory',
  path: 'audioFiles/niceToHaveCat.mp3'
}, {
  name: 'NoRelationshipWhoCares',
  path: 'audioFiles/noRelationshipWhoCares.mp3'
}, {
  name: 'NotNeccessary',
  path: 'audioFiles/notNeccessary.mp3'
}, {
  name: 'NotPartOfMVP',
  path: 'audioFiles/notPartOfMVP.mp3'
}, {
  name: 'Ohhhh',
  path: 'audioFiles/ohhhhh.mp3'
}, {
  name: 'OhNo',
  path: 'audioFiles/ohNo.mp3'
}, {
  name: 'PasteInChannel',
  path: 'audioFiles/pastedInChannel.mp3'
}, {
  name: 'ReallyPowerful',
  path: 'audioFiles/reallyPowerful.mp3'
}, {
  name: 'RelatedModels',
  path: 'audioFiles/relatedModels.mp3'
}, {
  name: 'TechnicallyPassing',
  path: 'audioFiles/technicallyPassing.mp3'
}, {
  name: 'Terrible',
  path: 'audioFiles/terrible.mp3'
}, {
  name: 'ThatsIt',
  path: 'audioFiles/thatsIt.mp3'
}, {
  name: 'ThatsWhereItsGonnaBe',
  path: 'audioFiles/thatsWhereItsGonnaBe.mp3'
}, {
  name: 'TheDonutApp',
  path: 'audioFiles/theDonutApp.mp3'
}, {
  name: 'TheIdea',
  path: 'audioFiles/theIdea.mp3'
}, {
  name: 'TotallyDoable',
  path: 'audioFiles/totallyDoable.mp3'
}, {
  name: 'YeahRight',
  path: 'audioFiles/yeahRight.mp3'
}, {
  name: 'UuughOK',
  path: 'audioFiles/uuuhgOK.mp3'
}, {
  name: 'YehButAtThatPoint',
  path: 'audioFiles/yehButAtThatPoint.mp3'
}, {
  name: 'What',
  path: 'audioFiles/what.mp3'
}, {
  name: 'WhoCaresRight',
  path: 'audioFiles/whoCaresRight.mp3'
}, {
  name: 'Yaah',
  path: 'audioFiles/yaah.mp3'
}, {
  name: 'YehYESyes',
  path: 'audioFiles/yehYesYes.mp3'
}, ]



for (let i = 0; i < noiseArray.length; i++) {
  $('.big-button-holder').append(`<div class="button-box"><button type="button" path=${noiseArray[i].path} class="btn btn-primary" id=${noiseArray[i].name}>${noiseArray[i].name}</button></div>`);

  $(`#${noiseArray[i].name}`).on('click', function(e) {

    console.log(e.target.id)
    console.log(e.target.attributes.path.value)
    const newAudio = new Audio(e.target.attributes.path.value);
    newAudio.volume = 0.1;
    newAudio.play();

    $('button').on('click', function(){
      newAudio.pause();
      newAudio.currentTime = 0;
      });

  });
}
