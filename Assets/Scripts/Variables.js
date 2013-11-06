#pragma strict
public var eca : GameObject;
 static var anim : Animator;
 static var LocationX: float;
 static var LocationY: float;
 static var buttonSizeX: float;
 static var buttonSizeY: float;
 static var spacing: float;

function Awake()
{
	//Make these editable in Unity menu?
	//Or Use GUI Layout http://www.youtube.com/watch?v=b34j4eTfRJ4 here or in ButtonTests
	anim = eca.GetComponent(Animator);
	
	LocationX = 800; //can use Screen.height/2 or whatever
	LocationY = 20;
	buttonSizeX = 120;
	buttonSizeY = 70;
	spacing = 10;
}

function Start () {
	ButtonTest1.GUIOn = 1; //Starting GUI
}

function Update () {

}

public static function resumeIdle()
{
	anim.SetBool("Shout", false);
	anim.SetFloat("MovementSpeed",0); 
	//anything else here
}
