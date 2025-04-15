const ricardo = document.getElementById("ricardo");
const ricardoImg = document.getElementById("ricardo-img");

let isFollowing = false;

ricardo.addEventListener("click", () => {
    ricardoImg.style.display = "block";

    if (!isFollowing) {
        isFollowing = true;

        document.addEventListener("mousemove", (e) => {
            ricardoImg.style.left = e.pageX + 10 + "px";
            ricardoImg.style.top = e.pageY + 10 + "px";
        });

        document.addEventListener("touchmove", (e) => {
            const touch = e.touches[0];
            ricardoImg.style.left = touch.pageX + 10 + "px";
            ricardoImg.style.top = touch.pageY + 10 + "px";
        });
    }
});
