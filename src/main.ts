import './style.css'

const canv = document.querySelector<HTMLCanvasElement>('#canvas');
const cntx = canv?.getContext("2d");

if (cntx && cntx?.fillStyle) {
  cntx.fillStyle = "green";

  cntx.beginPath();

  cntx.strokeStyle = "gray";
  cntx.moveTo(200, 20);
  cntx.lineTo(200, 130);
  cntx.lineTo(50, 20);
  cntx.stroke();

  // Arc
  cntx.beginPath();
  cntx.strokeStyle = "black";
  cntx.lineWidth = 5;
  cntx.moveTo(200, 20);
  cntx.arcTo(200, 130, 50, 20, 40);
  cntx.stroke();
  
  // Start point
  cntx.beginPath();
  cntx.fillStyle = "blue";
  cntx.arc(200, 20, 5, 0, 2 * Math.PI);
  cntx.fill();

  // Control points
  cntx.beginPath();
  cntx.fillStyle = "red";
  cntx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
  cntx.arc(50, 20, 5, 0, 2 * Math.PI); // Control point two
  cntx.fill();

}
