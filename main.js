function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);   
    video.hide();
}
function draw(){
    image(video,60,60,390,300);
    fill(85,250,0);
    stroke(85,250,0);
    rect(40,40,420,20);   

    fill(85,250,0);
    stroke(85,250,0);
    rect(40,350,420,20);    
    
    fill(85,250,0);
    stroke(85,250,0);
    rect(40,40,20,330);   

    fill(85,250,0);
    stroke(85,250,0);
    rect(450,40,20,330); 
}
function take_snap(){
    save("Natasha's Clicks.png");        
}