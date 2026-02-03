const d = document.getElementById("display");
const h = document.getElementById("history");

function add(v){
  if(d.value === "0") d.value = "";
  d.value += v;
}

function clr(){
  d.value = "0";
  log("SYSTEM RESET");
}

function del(){
  d.value = d.value.slice(0,-1) || "0";
}

function fn(type){
  try{
    let v = parseFloat(d.value);
    let r;
    if(type === "sqrt") r = Math.sqrt(v);
    if(type === "square") r = v * v;
    if(type === "sin") r = Math.sin(v * Math.PI / 180);
    if(type === "cos") r = Math.cos(v * Math.PI / 180);
    if(type === "tan") r = Math.tan(v * Math.PI / 180);
    if(type === "log") r = Math.log10(v);
    log(type + "(" + v + ") = " + r);
    d.value = r;
  }catch{
    error();
  }
}

function exec(){
  try{
    const exp = d.value;
    const r = eval(exp);
    log(exp + " = " + r);
    d.value = r;
  }catch{
    error();
  }
}

function error(){
  d.value = "ERROR";
  log("INVALID INPUT");
}

function log(t){
  const e = document.createElement("div");
  e.textContent = "> " + t;
  h.appendChild(e);
  h.scrollTop = h.scrollHeight;
}

document.addEventListener("keydown", e => {
  if("0123456789".includes(e.key)) add(e.key);
  if(["+","-","*","/","."].includes(e.key)) add(e.key);
  if(e.key === "Enter") exec();
  if(e.key === "Backspace") del();
  if(e.key === "Escape") clr();
});
