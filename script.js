var modal = document.querySelector(".modal-section")



//Open modal window
function openWindow() {
    modal.style.display = "block";
}
//Close modal window
function closeWindow() {
    modal.style.display = "none";
};

//Close modal window when you click anywhere outside the modal window
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


///////////////////////////////////////////////////////////////////////////

if (isNaN(localStorage.clickResult)) {
    localStorage.clickResult = 0;
}

//Get the initial score
var result = parseInt(localStorage.clickResult);
$(".score-number").text(result)

//Declare variables for random number and the house picked symbol
var houseNum;
var housePick = "";


function startGame(picked) {
    //Change section displays when you start the game
    $(".main-holder").css("display", "none")
    $(".result-screen").css("display", "flex")

    //Change player picked symbol to the one he chose
    switch (picked) {
        case "paper":
            $("#you-def1").removeClass().addClass("paper-win");;
            $(".you-img").attr("src", "images/icon-paper.svg");
            break;

        case "sciss":
            $("#you-def1").removeClass().addClass("sciss-win");;
            $(".you-img").attr("src", "images/icon-scissors.svg");
            break;

        case "rock":
            $("#you-def1").removeClass().addClass("rock-win");;
            $(".you-img").attr("src", "images/icon-rock.svg");
            break;
    }

    //Generate random number between 1 and 3, for the house chosen symbol
    houseNum = randomNum(1, 3);

    //Check current score 
    result = parseInt(localStorage.clickResult);

    //Change house picked symbol to the one euqling the random number
    setTimeout(function () {
        switch (houseNum) {
            case 1:
                $("#house-def1").removeClass("house-def").addClass("paper-win");
                $(".house-img").attr("src", "images/icon-paper.svg");
                housePick = "paper"
                break;

            case 2:
                $("#house-def1").removeClass("house-def").addClass("sciss-win");
                $(".house-img").attr("src", "images/icon-scissors.svg");
                housePick = "sciss"
                break;

            case 3:
                $("#house-def1").removeClass("house-def").addClass("rock-win");
                $(".house-img").attr("src", "images/icon-rock.svg");
                housePick = "rock"
                break;
        }

        //Determining the winner and displaying the text
        if (picked == housePick) {
            $("#res-sentence").text("TIE");
        }
        else if ((picked == "paper" && housePick == "rock") || (picked == "sciss" && housePick == "paper") || (picked == "rock" && housePick == "sciss")) {
            $("#res-sentence").text("YOU WIN");
            $(".score-number").text(result + 1)
            localStorage.clickResult = result + 1
            if (picked == "paper") {
                $("#you-def1").addClass("glow-paper")
            }
            else if (picked == "sciss") {
                $("#you-def1").addClass("glow-sciss")
            }
            else if (picked == "rock") {
                $("#you-def1").addClass("glow-rock")
            }
        }
        else {
            $("#res-sentence").text("YOU LOSE");
            $(".score-number").text(result - 1)
            localStorage.clickResult = result - 1
            if (housePick == "paper") {
                $("#house-def1").addClass("glow-paper")
            }
            else if (housePick == "sciss") {
                $("#house-def1").addClass("glow-sciss")
            }
            else if (housePick == "rock") {
                $("#house-def1").addClass("glow-rock")
            }
        }

        $(".result-text").css("display", "block")

    }, 2000);
}

//Generate random number - (Simulating the house picking rock,paper or scissors)
function randomNum(min, max) {
    var num = (Math.floor(Math.random() * (max - min + 1) + min));
    return num;
}

//Change back the section displays, when you want to play again
function playAgain() {
    $(".result-screen").css("display", "none")
    $(".main-holder").css("display", "block")
    $("#house-def1").removeClass().addClass("house-def");
    $(".house-img").attr("src", " ");
    $(".result-text").css("display", "none")
}