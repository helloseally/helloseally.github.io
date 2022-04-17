(function() {
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

    var writeForm = document.getElementById("write-form");
    var message = document.getElementById("message");

    message.addEventListener("keyup", function(event) {
        event.preventDefault();

        var curLen = message.value.length;
        var charsLeft = 280 - curLen;
        var count = document.getElementById("char-count");
        count.innerHTML = charsLeft;

        if (message.scrollHeight > message.clientHeight) {
            message.style.height = message.scrollHeight+"px";
        }
    });

    writeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // go somewhere or do something?

        
    });
})();