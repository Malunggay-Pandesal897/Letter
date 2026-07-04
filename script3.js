const button = document.getElementById("heartBtn");

button.addEventListener("click", () => {

    for(let i = 0; i < 35; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💞";
        heart.className = "floating-heart";

        // Hearts appear randomly across the bottom
        heart.style.left = Math.random() * window.innerWidth + "px";

        // Random animation speed
        heart.style.animationDuration = (2 + Math.random() * 2) + "s";

        // Random size
        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }

});