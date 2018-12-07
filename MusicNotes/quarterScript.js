function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//for remembering - change to note unicode
	/*const COLOR_RED = "#F00";
	const COLOR_GREEN = "#0F0";
	const COLOR_BLUE = "#00F";
	const COLOR_ORANGE = "#FF7F00";

	// ...when we need to pick a color
	let color = COLOR_ORANGE;
	alert(color); // #FF7F00*/

class Note {
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
const eighth = new Duple('Eighth', .5);