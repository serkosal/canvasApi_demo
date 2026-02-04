import './style.css'

const canv = document.querySelector<HTMLCanvasElement>('#canvas');
const cntx = canv?.getContext("2d");

if (cntx && cntx?.fillStyle) {
  cntx.fillStyle = "green";
  cntx.fillRect(10, 10, 10, 10);
}
