(function() {
    'use strict'

    // parse from back4app
    Parse.initialize("zMpPa7cLO009wzjqQgNHKmjqNREKkArCQttD0hxL","Jq0Hh5Ca4vSw7QLT6trPZ2ASvZtbO7Sm4X3Uiid7"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'


    //granim: 
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        transitionSpeed: 10000,
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#C5C4E5', '#8EA5D2'],
                    ['#8EA5D2', '#5A709B'],
                    ['#5A709B', '#C5C4E5']
                ]
            }
        }
    });

      // ------------bubbles--------------

      let bubbles = document.querySelectorAll('.embub');


      for (var i=0; i<bubbles.length; i++){

          var specificDiv = bubbles[i];


          let Num = Math.floor((Math.random()*500));
          let NumL = Math.floor((Math.random()*1200));

          specificDiv.style.top = Num +"px";
          specificDiv.style.left = NumL +"px";
  }

  // https://stackoverflow.com/questions/13784686/moving-an-image-randomly-around-a-page

  $(document).ready(function(){
      AnimateDiv($('.embub'));
      AnimateDiv($('.embub1'));
      AnimateDiv($('.embub2'));
      AnimateDiv($('.embub3'));
      AnimateDiv($('.embub4'));
      AnimateDiv($('.embub5'));
      AnimateDiv($('.embub6'));
      AnimateDiv($('.embub7'));
  });

  function makeNewPosition($container) {
      var h = $container.height() + 500;
      var w = $container.width() + Math.random();

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh, nw];
  };

  function AnimateDiv($target){
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);

      $target.animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          AnimateDiv($target);
      });
  };

  function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);

      var greatest = x > y ? x : y;

      var speedModifier = 0.02;

      var speed = Math.ceil(greatest / speedModifier);

      return speed;

  }



    // ------------------------FORM CODE ----------------------------

    const receiveTypeForm = document.getElementById('receive-type-form');


    let receiveType;

    receiveTypeForm.addEventListener('submit', function(event){
        event.preventDefault();

        if (document.getElementById('affirmation').checked) {
            receiveType = "Affirmations";
        }
        else if (document.getElementById('joke').checked) {
            receiveType = 'Jokes';
        }
    })


    writeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (writeType == "Affirmations"){
            showAffirmations();
            receiveAffirmation();
        }
        else if (writeType == "Jokes"){
            showJokes();
            receiveJoke();

        } else {
            alert("error while retrieving form, make sure that all of the areas are filled out!");
        }

        // code for overlays which are hidden and which shows
        
    });



    // ------------ afirmation and joke array code ---------------

    let affirmationsArray = [];
    let jokesArray = [];
    
    async function showAffirmations(){
        const affirmations = Parse.Object.extend('Affirmations');
        const query = new Parse.Query(affirmations);

        try {
            const results = await query.find();

            results.forEach(function(eachAffirmation){
                const id = eachAffirmation.id;
                const affirmationText = eachAffirmation.get('Affirmation');

                affirmationsArray.push(affirmationText);
                console.log(affirmationsArray);
            })


        } catch (error){
            console.error('Error while fetching your affirmation');
        }
    }

    showAffirmations();

    async function showJokes(){
        const jokes = Parse.Object.extend('Jokes');
        const query = new Parse.Query(jokes);

        try {
            const results = await query.find();

            results.forEach(function(eachJoke){
                const id = eachJoke.id;
                const jokeText = eachJoke.get('Joke');

                jokesArray.push(jokeText);
                console.log(jokesArray)

            })

        } catch (error){
            console.error('Error while fetching your joke');
        }
    }

    showJokes();

    function receiveAffirmation(){
        let ranNum = Math.floor(Math.random() * 10)
    }


  
  
})();
