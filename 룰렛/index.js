const asd = document.getElementById("asd");
const but = document.getElementById("button");
const stop = document.getElementById("stop");

console.log(asd);


function qwer(e){
// e.preventDefault();
const random = Math.floor(Math.random()*1000);
console.log(random);

  asd.animate([
    {transform: 'rotateZ('+random+'deg)'}],1000);
console.log("a");

}

function asdasd(){
  console.log("b");
  qwer.stopImmediatePropagation();
}
but.addEventListener("click", qwer);
stop.addEventListener("click", asdasd);

