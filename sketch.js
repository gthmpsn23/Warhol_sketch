
var maxDist;

function setup()
{
	createCanvas(900, 900);
	noLoop();
}



function draw()
{
	background(0);
	fill(255,0,255);
	noStroke();

	for (var j = 0; j < 3; j ++)
	{
		for(var i = 0; i < 3; i++)
		{
			fill(random(255), random(255), random(255));
			rect(0 + j * 300, 0 + i * 300 ,300,300)
			

			fill(random(255), random(255), random(255));
			ellipse(150 + j * 300, 150 + i * 300, 160, 140);  // heads
			ellipse(105 + j * 300, 70 + i * 300, 50,100); // ears
			ellipse(190 + j * 300, 70 + i * 300, 50,100); // ears

			fill(255);
			ellipse(120 + j * 300,120 + i * 300,20,20); // eyes
			ellipse(175 + j * 300,120 + i * 300,20,20); // eyes

			// nose
			fill(0);
			triangle(150 + j * 300,
				 170 + i * 300,
				 140 + j * 300,
				 150 + i * 300,
				 160 + j * 300,
				 150 + i * 300)

			// teeth
			fill(255);
			rect(139 + j * 300 ,170 + i * 300,10,20);
			rect(151 + j * 300, 170 + i * 300,10,20);
		
		}
	}

	

	
}