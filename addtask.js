
var exampleCount=1;

window.onload =function()
{
  document.getElementById("add").onclick = addText;
  document.getElementById("delete").onclick = deleteText;
}

function addText()  {

  var outputDiv = document.getElementById("output");
  var inputText = document.getElementById("input");
  var newP = document.createElement("P");
  newP.innerHTML = inputText.value;
  outputDiv.appendChild(newP);
}


function deleteText() {
    var outputDiv = document.getElementById("output");
    var children = outputDiv.children;
    if (children.length > 0)
    {
      outputDiv.removeChild(children[0]);
    }
    else {
      alert("No task to delete!");
    }
}
