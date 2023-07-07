Webcam.set({
width:350,
height:300,
iamge_format:'png',
png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
        capturedImg = document.getElementById("captured_image")
    });
}
console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a8bIXTyBd/model.json', modelLoaded)
function check(){
classifier.classify(capturedImg, gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}
function modelLoaded(){
console.log("Model Loaded!")
}