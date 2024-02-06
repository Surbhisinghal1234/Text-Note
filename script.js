const btn = document.querySelector("#btn");
btn.addEventListener("click", addNote);

function addNote() {
  const text = document.getElementById("noteText").value;
  const bgColor = document.getElementById("bgColor").value;
  const textColor = document.getElementById("textColor").value
  const textDisplay = document.getElementById("textDisplay");
  const textEle = document.createElement("div");
  textEle.contentEditable = "true"

  textEle.classList.add("noteBox");
  textEle.innerHTML = text;
  textEle.style.backgroundColor = bgColor;
  textEle.style.color = textColor;
  const btn2 = document.createElement("a");
  btn2.classList.add("closeBtn");
  textEle.append(btn2);
  btn2.innerHTML = "&times;";
  document.getElementById("textDisplay").appendChild(textEle);
  document.getElementById("noteText").value = "";
  const cross = textEle.querySelector(".closeBtn");
  cross.addEventListener("click", () => {
    // textEle.style.display = "none";
    // textEle.remove();
    textDisplay.removeChild(textEle);
  });
}