function take_snapshot()
{
Webcam.snap(function(data_uri)  {                                                           
    document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
});
}
console.log('ml5 verison:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EfZWPCnnF,model'.
model.json)

function check()
{
    img=document.getElementById('captured_img');
    classifier=classify(img,getResult);
}
function gotResult(error,results)
{
    if(error) {
        console.error(error);
    } else { 
        console.log(results);
        document.getElementById("results_object_name").innerHTML=results[0].label;
        document.getElementById("results_object_name").innerHTML=results[0].confidence.toFixed(3); 
    }

    }
