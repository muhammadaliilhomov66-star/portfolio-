const theme = document.querySelector("#Theme");


theme.onclick = () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    theme.textContent = dark ? "☀️" : "🌙";
};


const words = ["Dasturchi", "O'quvchi"];
const typing = document.querySelector("#typing");
let i = 0, j = 0;

setInterval(() => {
    j++;
    typing.textContent = words[i].slice(0, j);
    if (j > words[i].length + 10) {
        i = (i + 1) % words.length;
        j = 0;
    }
}, 100);