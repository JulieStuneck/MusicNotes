/*function allowDrop(ev) {
  ev.preventDefault();
}*/

allowDrop = ev => ev.preventDefault();

/*function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}*/

drag = ev => ev.dataTransfer.setData("text", ev.target.id);

/*function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}*/

drop = ev => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}