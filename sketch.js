var s1,s2,s3,s4 ;

var arnab=[];




function setup() 
{
  createCanvas(400,400);
s1=createSprite(100,300,30,30);
s2=createSprite(300,100,30,30);
s3=createSprite(150,250,30,30);
s4=createSprite(200,150,30,30);

arnab=[s1,s2,s3,s4];
for(var o=0;o<arnab.length;o++){
console.log (arnab[o].position.x);
}
}

function draw() 
{
background(51);
drawSprites();
}

