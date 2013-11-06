#pragma strict

public var myAudioClip : AudioClip;
public static var GUIOn: int;
public var TVscreen : GameObject;

private var anim : Animator;
private var LocationX: float;
private var LocationY: float;
private var buttonSizeX: float;
private var buttonSizeY: float;
private var spacing: float;

function Start()
{
	anim = Variables.anim;
	LocationX = Variables.LocationX;
	LocationY = Variables.LocationY;
	buttonSizeX = Variables.buttonSizeX;
	buttonSizeY = Variables.buttonSizeY;
	spacing = Variables.spacing;
}

function OnGUI()
{
	if(GUIOn==1){
		if(GUI.Button(Rect(LocationX,LocationY,buttonSizeX,buttonSizeY), "Play Music")) 
		{
			//do something animated
			AudioSource.PlayClipAtPoint(myAudioClip, transform.position); 
			Invoke("whenDone",myAudioClip.length); 	
			GUIOn=0;
		}
		else if(GUI.Button(Rect(LocationX,LocationY+buttonSizeY+spacing,buttonSizeX,buttonSizeY), "Raise Hand")) 
		{
			Variables.resumeIdle();
			anim.SetBool("Shout", true); 
			//no audio
			Invoke("whenDone",1);
			GUIOn=0;
		}
		else if(GUI.Button(Rect(LocationX,LocationY+(buttonSizeY+spacing)*2,buttonSizeX,buttonSizeY), "TV")) 
		{
			Variables.resumeIdle();
			//no eca animation
			//no audio
			TVscreen.SetActive(true);  //change TV Material by enable or disabling certain Planes
			Invoke("whenDone",3);
			GUIOn=0;
		}
	}
		
}

function whenDone()
{
	Variables.resumeIdle();
	TVscreen.SetActive(false);
	//ButtonTest3.GUIOn=1; 	
	GUIOn = 1;
}


