
const rightMenu = document.querySelector("#user .right_menu");
const snbBtn = document.querySelector("#user .btn_menu");

snbBtn.addEventListener("click",function(){
    if(rightMenu.classList.contains("hide")) {
        rightMenu.classList.remove("hide");
    }else {
        rightMenu.classList.add("hide");
    }
})

const leftMenu = document.querySelector("#main .left_menu");
const mainBtn = document.querySelector("#main .left_btn_menu");

mainBtn.addEventListener("click", function () {
    if(leftMenu.classList.contains("hidden")) {
        leftMenu.classList.remove("hidden");
    }else {
        leftMenu.classList.add("hidden");
    }
})

function unmute() {
    const player = document.getElementById("player");
    player.muted = false;
}

// function unmute() {
//     const player = document.getElementById("player");
//     const btn = document.getElementById("unmutePlayerButton");

//     btn.addEventListener("click",function {
//         if(){
//             player.muted = false;
//         }else {
//             player.muted = true;
//         }
//     })
// }