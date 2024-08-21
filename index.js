let music = new Audio("GameMusic.wav");
let turnMusic = new Audio("turnSound.wav");
let gameover = new Audio("gameOver.wav");
let turn = "X";
let isgameOver = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const CheckWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".Info").innerText = boxtext[e[0]].innerText + " Won";
            isgameOver = true;
            gameover.play();
            document.querySelector(".imgbox img").style.display = "block";
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        // Play the background music on the first user interaction
        if (!isgameOver && !music.played.length) {
            music.play();
        }

        if (boxtext.innerText === "" && !isgameOver) {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            CheckWin();
            if (!isgameOver) {
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});
