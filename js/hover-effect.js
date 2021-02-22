const gridContainer = document.getElementById("container");

const mainColor = "#FFFFFF";
let color1 = "#FFFFFFAA";
let color2 = "#FFFFFF77";
let color3 = "#FFFFFF33";


gridContainer.addEventListener("mouseover", function(e) {
    if (e.target.className === "square") {
        e.target.style.backgroundColor = mainColor;
        // let c = parseInt(e.target.dataset.column);
        // let r = parseInt(e.target.dataset.row);
        // let prox1 = [`c${c}r${r - 1}`, `c${c}r${r + 1}`, `c${c - 1}r${r}`, `c${c + 1}r${r}`];
        // let prox2 = [`c${c - 1}r${r - 1}`, `c${c + 1}r${r - 1}`, `c${c - 1}r${r + 1}`, `c${c + 1}r${r + 1}`];
        // let prox3 = [`c${c}r${r - 2}`, `c${c}r${r + 2}`, `c${c - 2}r${r}`, `c${c + 2}r${r}`];

        // for (locationId of prox1) {
        //     document.getElementById(locationId).style.backgroundColor = color1;
        // }
        // for (locationId of prox2) {
        //     document.getElementById(locationId).style.backgroundColor = color2;
        // }
        // for (locationId of prox3) {
        //     document.getElementById(locationId).style.backgroundColor = color3;
        // }

        setTimeout(() => {
            e.target.style.backgroundColor = "red";
        }, 1500);
        setTimeout(() => {
            e.target.style.backgroundColor = "blue";
        }, 2000);
        setTimeout(() => {
            e.target.style.backgroundColor = "green";
        }, 2500);
        setTimeout(() => {
            e.target.style.backgroundColor = "";
        }, 3000);
    }
})