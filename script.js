// Typing animation
new Typed("#typing", {
  strings: ["Web Developer 💻", "AI Enthusiast 🤖", "Problem Solver 🔥"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// GitHub API (Dynamic Projects)
fetch("https://api.github.com/users/VipinBhardwaj-07/repos")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
