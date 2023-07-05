const ubahWarna = setInterval(() => {
    document.getElementById("paragraf").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 200);
