Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90

});

camera = document.getElementById("camera");
Webcam.attach(camera);
function snap_shot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="taken_image" src="'+data_uri+'">';
})
}

console.log('ml5version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rXuU0Wva-/model.json',modelLoaded);

