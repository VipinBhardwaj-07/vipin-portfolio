const texts = ["Web Developer", "DSA Enthusiast", "Tech Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      current = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = texts[i].substring(0, j--);
    }

    document.getElementById("typing").innerHTML = current;

    if (j == texts[i].length) isDeleting = true;
    if (j == 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(type, 100);
}
type();

function toggleMode(){
  document.body.classList.toggle("light");
}

function sendMsg(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
}
