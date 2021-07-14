var mouseevent = "empty";
var last_po_of_x,last_po_of_y;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="pink";
Width_of_the_line=3;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    c_ox=e.clientX-canvas.offsetLeft;
    c_oy=e.clinty-canvas.offsetTop;
if(mouseevent=="mouseDown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=Width_of_the_line;
console.log("x="+last_po_of_x+"y="+last_po_of_y);
ctx.moveTo(last_po_of_x,last_po_of_y);
console.log("x="+c_ox+"y="+c_oy);
ctx.lineTo(c_ox,c_oy);
ctx.stroke();
}
last_po_of_x=c_ox;
last_po_of_y=c_oy;
}