/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon = {
        x_pos: 0,
        width: 100 
    }
    
    collectable = {
        x_pos: 100,
        y_pos: 100,
        size: 50
    }
    
    mountain = {
        x_pos: -120,
        y_pos: 100
    }
    
    cloud = {
        x_pos: 0,
        y_pos: 0,
        size: 20
    }
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    // Draw mountain
    
    fill(105, 105, 105)
	quad(mountain.x_pos+380, mountain.y_pos+332, mountain.x_pos+480, mountain.y_pos+132, mountain.x_pos+580, mountain.y_pos+132, mountain.x_pos+680, mountain.y_pos+332)
	fill(255)
	triangle(mountain.x_pos+480, mountain.y_pos+132, mountain.x_pos+500, mountain.y_pos+102, mountain.x_pos+520, mountain.y_pos+132)
	triangle(mountain.x_pos+500, mountain.y_pos+132, mountain.x_pos+530, mountain.y_pos+82, mountain.x_pos+560, mountain.y_pos+132)
	triangle(mountain.x_pos+540, mountain.y_pos
             +132, mountain.x_pos+560, mountain.y_pos+102, mountain.x_pos+580, mountain.y_pos+132)
    
    // Draw cloud
    
    fill(255)
	ellipse(cloud.x_pos+200, cloud.y_pos + 150, 5*cloud.size)
	ellipse(cloud.x_pos+250,cloud.y_pos+ 150,5*cloud.size)
	ellipse(cloud.x_pos+300,cloud.y_pos+ 150, 4*cloud.size)
    
    //2. Draw tree
    
    fill(165,42,42)
    rect(treePos_x,treePos_y,20,145);
    fill(0,155,0)
    triangle(treePos_x-40,treePos_y+20,treePos_x+10,treePos_y-30,treePos_x+60,treePos_y+20)
    triangle(treePos_x-37,treePos_y,treePos_x+10,treePos_y-60,treePos_x+57,treePos_y)
    triangle(treePos_x-32,treePos_y-22,treePos_x+10,treePos_y-60,treePos_x+52,treePos_y-22)
    
    // Draw canyon
    
	fill(139, 69, 19);
	quad(canyon.x_pos+100, canyon.width+332, canyon.x_pos+200, canyon.width +332, canyon.x_pos+220, canyon.width+476, canyon.x_pos+80, canyon.width+476);

    
    // Draw collectable
    fill(255, 215, 0);
	ellipse(collectable.x_pos+20, collectable.y_pos+310, collectable.size, collectable.size)
    
	//1. Draw Game character
    
    // face
    fill(222,184,135);
    ellipse(gameChar_x,gameChar_y-65,20);
    
    // neck
    fill(189,183,107);
    rect(gameChar_x-3,gameChar_y-56,5,5);
    
    // torso
    
    fill(0,0,139);
    quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);
    
    // Legs
    
    // Left Side
    
    // Thigh
    fill(233,150,122);
    quad(gameChar_x-8,gameChar_y-20,gameChar_x-5,gameChar_y-20,gameChar_x-5,gameChar_y-14,gameChar_x-8,gameChar_y-14);
    
    //Calf
    fill(0,100,0);
    quad(gameChar_x-8,gameChar_y-14,gameChar_x-5,gameChar_y-14,gameChar_x-5,gameChar_y-8,gameChar_x-8,gameChar_y-8)
    
    // Foot
    
    fill(128,0,0);
    quad(gameChar_x-8,gameChar_y-8,gameChar_x-5,gameChar_y-8,gameChar_x-4,gameChar_y,gameChar_x-11,gameChar_y)
    
    // Right Side
    
    // Thigh
    fill(233,150,122);
    quad(gameChar_x+3,gameChar_y-20,gameChar_x+6,gameChar_y-20,gameChar_x+6,gameChar_y-14,gameChar_x+3,gameChar_y-14);
    
    //Calf
    fill(0,100,0);
    quad(gameChar_x+3,gameChar_y-14,gameChar_x+6,gameChar_y-14,gameChar_x+6,gameChar_y-8,gameChar_x+3,gameChar_y-8)
    
    // Foot
    
    fill(128,0,0);
    quad(gameChar_x+3,gameChar_y-8,gameChar_x+6,gameChar_y-8,gameChar_x+9,gameChar_y,gameChar_x+2,gameChar_y)


}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
