#pragma strict

public var eca : GameObject;
public var myAudioClip : AudioClip;
public var GUIOn: int;

private var anim : Animator;
private var LocationX: float;
private var LocationY: float;
private var buttonSize: float;
private var spacing: float;

function Awake()
{
	anim = eca.GetComponent(Animator);
	LocationX = 500; //can use Screen.height/2 or whatever
	LocationY = 50;
	buttonSize = 70;
	spacing = 10;
	GUIOn = 1;
}

function OnGUI() //no idea how to get this to loop properly
{
	
	//Make these editable in Unity menu?
	if(GUIOn==1){
		//Use GUI Layout http://www.youtube.com/watch?v=b34j4eTfRJ4
		if(GUI.Button(Rect(LocationX,LocationY,buttonSize,buttonSize), "Shout")) 
		{
			anim.SetFloat("MovementSpeed",0); 
			anim.SetBool("Shout", true);
			AudioSource.PlayClipAtPoint(myAudioClip, transform.position); //maybe make sure no other audio is playing first
			Invoke("whenDone",myAudioClip.length);
			GUIOn=0;
		}
		else if(GUI.Button(Rect(LocationX,LocationY+buttonSize+spacing,buttonSize,buttonSize), "Run!")) 
		{
			anim.SetBool("Shout", false);
			anim.SetFloat("MovementSpeed",1);
			GUIOn=0;
		}
	}
		
}

function whenDone()
{
	anim.SetBool("Shout", false);
	anim.SetFloat("MovementSpeed",0); 
	GUIOn=1;
}


