
//granim: 
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
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

// bubbles

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