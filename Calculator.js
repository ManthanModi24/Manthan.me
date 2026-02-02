const display = document.getElementById("display");

function animateDisplay(){
  display.classList.add("animate");
  setTimeout(() => display.classList.remove("animate"), 120);
}

function append(val){
  if(display.value === "0") display.value = "";
  display.value += val;
  animateDisplay();
}

function clearAll(){
  display.value = "0";
  animateDisplay();
}

function backspace(){
  display.value = display.value.slice(0, -1) || "0";
  animateDisplay();
}

function toggleSign(){
  if(display.value !== "0"){
    display.value = display.value.startsWith("-")
      ? display.value.slice(1)
      : "-" + display.value;
    animateDisplay();
  }
}

function calculate(){
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error";
  }
  animateDisplay();
}

/* Keyboard Support */
document.addEventListener("keydown", (e) => {
  if("0123456789".includes(e.key)) append(e.key);
  if(["+","-","*","/","."].includes(e.key)) append(e.key);
  if(e.key === "Enter") calculate();
  if(e.key === "Backspace") backspace();
  if(e.key === "Escape") clearAll();
});
