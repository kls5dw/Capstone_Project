#pragma strict

public var myAudioClip : AudioClip;
static var GUIOn: int;

private var anim : Animator;
private var LocationX: float;
private var LocationY: float;
private var buttonSizeX: float;
private var buttonSizeY: float;
private var spacing: float;
private var blueButtonStyle: GUIStyle;

function Awake(){

}
function Start()
{
	//can probably just reference everything directly but this is here in case you want to change things from default
	anim = Variables.anim;
	LocationX = Variables.LocationX;
	LocationY = Variables.LocationY;
	buttonSizeX = Variables.buttonSizeX;
	buttonSizeY = Variables.buttonSizeY;
	spacing = Variables.spacing;
	//blueButtonStyle = Variables.blueButtonStyle;
}

function OnGUI()
{
	if(GUIOn==1){
		createStyles(); //needs to be called in OnGUI but this makes it complicated to edit from another script.

		if(GUI.Button(Rect(LocationX,LocationY,buttonSizeX,buttonSizeY), "Do Something")) 
		{
			Variables.resumeIdle();	//idk if this is needed.
			anim.SetBool("Shout", true); 
			AudioSource.PlayClipAtPoint(myAudioClip, transform.position); //maybe make sure no other audio is playing first
						//even though its a 2D sound you can still play it at a position. 
			Invoke("whenDone",myAudioClip.length); 		//http://answers.unity3d.com/questions/346815/how-to-know-if-a-audiosource-finished-playing-with.html
			//Invoke("whenDone",7);
			GUIOn=0;
		}
		else if(GUI.Button(Rect(LocationX,LocationY+buttonSizeY+spacing,buttonSizeX,buttonSizeY), "Run (No Sound)", blueButtonStyle)) 
		{
			Variables.resumeIdle(); 
			anim.SetFloat("MovementSpeed",1);
			//no audio
			Invoke("whenDone",5);
			GUIOn=0;
		}
	}
		
}

function whenDone()
{
	Variables.resumeIdle();
	ButtonTest2.GUIOn=1; 	
}
function createStyles()
{
	blueButtonStyle = new GUIStyle(GUI.skin.button);
	blueButtonStyle.normal.textColor = Color.black;
	//add for hover as well.
	var myblue = new Texture2D(1,1);
	myblue.SetPixel(1,1,Color.blue);
	myblue.Apply();
	blueButtonStyle.normal.background = myblue;
	
	//repeat for red or whatever
}


