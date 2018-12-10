// Draggable Note:
dragElement(document.getElementById("note"));

function dragElement(elmnt) {
 let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






/*function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}*/

//for remembering - change to note unicode
	/*const COLOR_RED = "#F00";
	const COLOR_GREEN = "#0F0";
	const COLOR_BLUE = "#00F";
	const COLOR_ORANGE = "#FF7F00";

	// ...when we need to pick a color
	let color = COLOR_ORANGE;
	alert(color); // #FF7F00*/

//Classes
/*class Note {
	constructor (name, duration) {
		this.name = name;
		this.duration = duration;
	}	
}

class Duple extends Note {
	constructor (name, duration) {
		super(name, duration);
	}	
	//function for determining portion of measure
}

class Triple extends Note {
		constructor (name, duration) {
		super(name, duration);
	}	
	//function for determining portion of measure
}

const quarter = new Duple('Quarter', 1);
const eighth = new Duple('Eighth', .5);*/