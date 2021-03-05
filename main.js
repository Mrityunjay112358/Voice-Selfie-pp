var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("voice_textarea").innerHTML="";
    recognition.start();
}

recognition.onresult= function(event){
console.log(event);
content = event.results[0][0].transcript;
document.getElementById("voice_textarea").innerHTML=content;
console.log(content);
//speakText();

if(content=="take my selfie"){
console.log("taking selfie-----");
speakText();
}
}

function speakText(){
    var synth = window.speechSynthesis;

    //var speak_data = document.getElementById("voice_textarea").value;
var speak_data = "taking your selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
     setTimeout(function(){
        take_snapshot();
save();
     },5000);

}
var camera = document.getElementById("camera");

Webcam.set({
    width:280,
    height:360,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="take_img" src="'+data_uri+'">' ;
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("take_img").src;
    link.href = image;
    link.click();
}