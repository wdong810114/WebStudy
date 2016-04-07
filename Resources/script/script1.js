function changeImage() {
  element=document.getElementById("myimage");
  if(element.src.match("bulbon")) {
    element.src="../Resources/eg_bulboff.gif";
  } else {
    element.src="../Resources/eg_bulbon.gif";
  }
}