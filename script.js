function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💜";

    heart.className="floating-heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

fades.forEach((fade) => {
    observer.observe(fade);
});

const button = document.getElementById("heartBtn");

button.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");
        heart.innerHTML = "💜";
        heart.className = "floating-heart";

        // Spawn from the bottom of the screen
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        // Random speed
        heart.style.animationDuration = (2 + Math.random() * 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

});