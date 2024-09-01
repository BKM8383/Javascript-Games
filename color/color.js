var names = ['BLUE', 'RED', 'GREEN', 'YELLOW'];
var rand_col_name;
var rand_col;
var intervalId = setInterval(reset, 200000000);
var score=0;

function start() {
  remove("start");
  create("BLUE", "BLUE");
  create("GREEN", "GREEN");
  create("YELLOW", "YELLOW");
  create("RED", "RED");
  document.getElementById("label").innerText= "SCORE : 0";
  rand();
}

function remove(id) {
  var buttonToRemove = document.getElementById(id);
  buttonToRemove.remove();
}

function create(color, id) {
  var newButton = document.createElement('button');
  newButton.innerHTML = color;
  newButton.setAttribute("onclick", "check(this.id)");
  document.body.appendChild(newButton);
  newButton.querySelector('button');
  if (newButton) {
    newButton.id = id;
  }
}

function rand() {
  clearInterval(intervalId); 
  intervalId = setInterval(reset, 1700);
  var text = document.getElementById("text");
  rand_col = names[Math.floor(Math.random() * names.length)];
  rand_col_name = names[Math.floor(Math.random() * names.length)];
  rand_text_col = names[Math.floor(Math.random() * names.length)];
  text.innerText = rand_col_name;
  text.style.backgroundColor = rand_col;
  while(rand_text_col==rand_col){
    rand_text_col = names[Math.floor(Math.random() * names.length)];
  }
  text.style.color = rand_text_col;
  text.style.width = "300px";
  text.style.marginLeft = "43%";
}

function reset(){
  let text = document.getElementById("text");
  text.innerHTML = "Failed!!!";
  text.style.color="black";
  text.style.backgroundColor = "transparent";
  remove("BLUE");
  remove("GREEN");
  remove("YELLOW");
  remove("RED");
  var newButton = document.createElement('button');
  newButton.innerHTML = "RESTART";
  newButton.querySelector('button');
  if (newButton) {
    newButton.id = 'start';
  }
  newButton.setAttribute("onclick", "start()");
  document.body.appendChild(newButton);
  newButton.style.backgroundColor = "aqua";
  clearInterval(intervalId); 
}

function check(id) {
  if (id == rand_col_name) {
    rand();
    score++;
    var s=document.getElementById("label").textContent=`SCORE : ${score}`;
  }
  else {
    reset();
  }
}