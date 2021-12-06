function classifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classification=  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vatgxmpKv/model.json', modelReady);
    }

    function modelReady(){
        classification.classify(gotResults);
        }

        function gotResults(error, results){
            if(error){
                console.error(error);
            }
            else {
                console.log(results)
            }
            }
    