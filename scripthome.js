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

let bubbles = document.querySelectorAll('.embub');


for (var i=0; i<bubbles.length; i++){

    var specificDiv = bubbles[i];


    let Num = Math.floor((Math.random()*500));
    let NumL = Math.floor((Math.random()*1200));

    specificDiv.style.top = Num +"px";
    specificDiv.style.left = NumL +"px";
}