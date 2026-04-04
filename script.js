const text = ["Aspiring Developer", "DSA Learner", "AI & ML Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    document.getElementById("typing").textContent = currentText.substring(0, j);

    if (!isDeleting && j < currentText.length) {
        j++;
        setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % text.length;
        setTimeout(type, 1000);
    }
}

type();
