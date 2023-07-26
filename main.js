


var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
		blockImageObject = Img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top:blockY,
			left:blockX
		});
		canvas.add(blockImageObject);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");

	if(keyPressed == '69') // é a tecla E
	{
		newImage('rr1.png');
		console.log("rr1");
	}
	if(keyPressed == '86')	// é a tecla V
	{
		blockX = 200;
		newImage('gr.png');
		console.log("gr");
	}
	
	if(keyPressed == '65') // é a tecla A
	{
		blockX =350;
		newImage('yr.png');
		console.log("yr");			
	}
	if(keyPressed == '82')	// é a tecla R 
	{
		blockX = 600;
		newImage('pr.png');
		console.log("pr");
	}
	if(keyPressed == '73') // é a tecla I
	{
		blockX = 700;
		newImage('br.png');
		console.log("rr");
	}
	
}

