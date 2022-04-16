
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