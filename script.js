/*	
	Plan:
	- Display 3 boxes inside container box
	- Add click handler to container box
	- on click, determine if box clicked has ball underneath (wins)
	- style boxes based on if box is winning box or not
	- reset game
	
	EC
	- on win/loss, play sound
	- animate boxes moving
	- 

	
	
	
	
	
	
	
	
	
*/

function clickedShell(event)
{	
	if(document.getElementsByClassName("box-up").length>0)
	{
		resetGame(event);
		return;
	}
	
	if(!event.target.classList.contains("box"))
		return;

	var boxes=document.getElementsByClassName('box');
	var winner=Math.floor(Math.random()*3);
	for(var i=0;i<boxes.length; i++)
	{
		boxes[i].classList.add('box-up','box-up-lose');
		boxes[i].children[0].classList.add('box-inside-lose');
	}
	event.target.children[0].classList.add('box-inside-chosen');

	boxes[winner].children[0].classList.add('box-inside-win');
	boxes[winner].classList.add('box-up-win');

	var result=document.getElementsByClassName("result")[0];
	result.textContent=((boxes[winner] === event.target) ? "A WINNER IS YOU" : "<LAUGHING_DOG.GIF> NOT FOUND");
	console.log(result);

	}

function resetGame(event)
{
	var boxes=document.getElementsByClassName('box');
	for(var i=0;i<boxes.length; i++)
	{
		boxes[i].classList.remove('box-up', 'box-up-win', 'box-up-lose');
		boxes[i].children[0].classList.remove('box-inside-win', 'box-inside-lose', 'box-inside-chosen');
	}
	var result=document.getElementsByClassName("result")[0];
	result.textContent="";

}




function onReady(event)
{
	// var shellcontainer=document.getElementsByTagName("body")[0];
	var resetbutton=document.getElementById("resetbtn");



	resetbutton.addEventListener('click',resetGame);
	document.addEventListener('click',clickedShell);
	


}


document.addEventListener('DOMContentLoaded', onReady);