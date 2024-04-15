const btn = document.querySelector("#btn");
btn.addEventListener("click", addNote);

function addNote() {
  const text = document.getElementById("noteText").value;
  const bgColor = document.getElementById("bgColor").value;
  const textColor = document.getElementById("textColor").value;
  const textDisplay = document.getElementById("textDisplay");

  const textEle = document.createElement("div");
  textEle.classList.add("noteBox");
  textEle.innerHTML = text;
  textEle.style.backgroundColor = bgColor;
  textEle.style.color = textColor;
  textEle.contentEditable = "true";
  
  const btn2 = document.createElement("a");
  btn2.classList.add("closeBtn");
  btn2.innerHTML = "&times;";
  textEle.appendChild(btn2);
  textDisplay.appendChild(textEle);

  document.getElementById("noteText").value = "";
  btn2.addEventListener("click", () => {
    textDisplay.removeChild(textEle);
  });
}


