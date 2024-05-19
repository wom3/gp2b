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
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    
	//Add your code here ...
    
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
